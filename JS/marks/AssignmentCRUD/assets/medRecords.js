
//Al presionar get info, se mostrará esto en el div de infoContainer (ORDER 1)
function getInfo(event) { ////el event seria el boton que se ha pulsado, en este caso el de update
  //Se obtiene el id del div de infoContainer
  let infoDiv = document.getElementById("infoContainer")
  infoDiv.innerHTML = "" //limpia el div para que no se dupliquen los datos

  let row = event.target.parentNode.parentNode // Accedemos al elemento padre del elemento padre del elemento que desencadenó el evento. (de td a tr)
//la variable row se obtiene antes de realizar la solicitud fetch para obtener los registros médicos del paciente. Por lo tanto, la información del ID y el nombre del paciente debe estar presente en la tabla HTML en el momento en que se realiza la selección de la fila.
  let patientId = row.cells[0].innerText // Accedemos al contenido de la primera celda de la tabla (id)
  let patientName = row.cells[1].innerText // Accedemos al contenido de la segunda celda de la tabla (name)
  fetch(`https://informatica.iesquevedo.es/marcas/patients/${patientId}/medRecords`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response is not ok")
      }
      return response.json()
    })
    .then(data => {
      console.log(data)
      let medRecordTable = document.createElement("table") //Creamos la tabla
      medRecordTable.id = "medRecordTable" //Le damos un id
      medRecordTable.className = "table table-bordered table-condensed table-striped" //Le damos una clase
      //First row: headers
      medRecordTable.innerHTML = `<thead>
      <tr>
      <th colspan=5>${patientName}'s MedRecords</th>
      <th colspan=2><button id="addB" class='btn btn-info btn-sm ms-2'>Add medRecords</button></th>
      </tr>`
      //Second row: añade th para cada columna
      medRecordTable.innerHTML += `<tr>
        <th>ID</th>
        <th>Diagnosis</th>
        <th>Date</th>
        <th>Doctor</th>
        <th>Medications</th>
        <th>Action</th>
        <th>Action</th>
        </tr>
        </thead>
        <tbody></tbody>` // tbody vacío porque vamos a rellenarlo con el metodo createMedRecordRow, que lo rellena haciendo un appendChild
        
      data.forEach(fetchContent => {
        let newRow = createMedRecordRow(fetchContent) //pasa como parametro el objeto fetchContent, que son las columnas de data (la informacion del fetch) que se van a rellenar en la tabla
        //y se van a recorrer en el forEach
        medRecordTable.querySelector("tbody").appendChild(newRow) //despues de crear el tbody,hace un query selector para seleccionar el tbody y añadimos la nueva fila
        //sigue en el forEach hasta crear todas las filas
        
      })


      infoDiv.appendChild(medRecordTable) //Añadimos la tabla al div infoContainer
      document.getElementById("addB").addEventListener("click", showAddMedRecordModal) //una vez creado el boton, lo añadimos al evento click que nos permite mostrar el modal de añadir registros medicos
    })
    .catch(err => {
      console.error("Error in the fetch:", err)
    })
}

//Funcion que crea una nueva fila de la tabla y la devuelve para rellenarla en el tbody (ORDER 2)
function createMedRecordRow(fetchContent) { // pasa como parametro el objeto fetchContent que son las columnas de data (la informacion del fetch) que se van a rellenar en la tabla 
  //tambien se usa para rellenar el tbody con los datos del modal de addMedRecordModal
  var row = document.createElement("tr")
  row.innerHTML = "<td>" + fetchContent.id + "</td>" +
    "<td>" + fetchContent.description + "</td>" +
    "<td>" + fetchContent.date + "</td>" +
    "<td>" + fetchContent.idDoctor + "</td>" +
    "<td>" + fetchContent.medications + "</td>" +
    "<td><button class='btn btn-danger btn-sm deleteButton'>Delete</button></td>" +
    "<td><button class='btn btn-primary btn-sm updateButton'>Update</button></td>"

    return row // devolvemos la nueva fila
}

//Funcion que muestra el modal de añadir registros medicos (ORDER 3)
function showAddMedRecordModal() {
    //Fill combo with doctors
    fillDoctors()
    //Fill combo with medications
    fillMedications()
  document.getElementById("addMRB").addEventListener("click",addMedRecord) //le damos un evento al boton para que con el metodo de addMedRecord agregue los valores del modal y los convierta en nueva fila de la tabla cuando se presione
  let addMRModal = new bootstrap.Modal(document.getElementById('addMedRecordModal'))
  addMRModal.show()
}

//Funcion que rellena los combos de addMedRecordModal (ORDER 4)
function fillMedications(){
  let comboMeds = document.getElementById("addMedRecordMeds") // rellena de medicamentos en el select de addMedRecordModal
  comboMeds.innerHTML = ""
  let option = document.createElement("option")
  option.textContent = "Med 1"
  comboMeds.appendChild(option)

  option = document.createElement("option")
  option.textContent = "Med 2"
  comboMeds.appendChild(option)

  option = document.createElement("option")
  option.textContent = "Med 3"
  comboMeds.appendChild(option)
}
//Funcion que rellena el select de addMedRecordModal (ORDER 5)
function fillDoctors(){
  fetch("https://informatica.iesquevedo.es/marcas/doctors")
  .then(response =>{
      if(!response.ok){
          throw new Error("Network response is not ok")
      }
      return response.json()
  }).then(data =>{
    console.log(data)
    let comboDoctor = document.getElementById("addMedRecordDoctor") // llama al elemento select de addMedRecordModal
    comboDoctor.innerHTML = ""
    data.forEach(doctor =>{
      let option = document.createElement("option") //crea un elemento option para el select de addMedRecordDoctor por cada valor de data con forEach (que son los doctores)
      option.textContent = doctor.name
      option.value = doctor.id
      comboDoctor.appendChild(option) //añade los options al select
    })
  }).catch(err =>{
      console.error("Error in the fetch:",err)
  })

}

//Funcion que añade un nuevo elemento medRecordTable con los valores insertados por el usuario (ORDER 6)
function addMedRecord (){ // obtiene los valores insertados por el usuario en el modal y los añade al elemento medRecordTable
    let diagnosis = document.getElementById("addMedRecordDesc").value
    let date = document.getElementById("addMedRecordDate").value
    let idDoctor = document.getElementById("addMedRecordDoctor").value
    let parseDate = new Date(date)
    let formattedDate = parseDate.toISOString().split('T')[0]
    let selectedMedications = getSelectedMeds()
    
    let medRecord = { //objeto que saldra en consola
        id:0,
        description:diagnosis,
        date:formattedDate,
        idDoctor:Number(idDoctor),
        medications:selectedMedications 
    }

    fetch("https://informatica.iesquevedo.es/marcas/patients/medRecords",{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(medRecord)
    })
    .then(response =>{
        if(!response.ok){
            throw new Error("Network response is not ok")
        }
        return response.json()
    })
    .then(data =>{
        console.log("MedRecord added successfully",data)
        let medRecordTable = document.getElementById("medRecordTable") // Llama al elemento medRecordTable
        let newRow = createMedRecordRow(data) // crea una nueva fila con los valores de data, es decir, los valores insertados por el usuario
        medRecordTable.querySelector("tbody").appendChild(newRow) // Añade la nueva fila al elemento medRecordTable
        $('#addMedRecordModal').modal('hide') // UNA VEZ CREADA LA NUEVA FILA, se oculta el modal de addMedRecordModal
    }).catch(err =>{
        console.error("Error in the fetch:",err)
    })
  }

  

  function getSelectedMeds(){ // obtiene los medicamentos seleccionados en el select de addMedRecordModal
    let medsList = document.getElementById("addMedRecordMeds")
    let selectedMeds = []
    for(let i = 0; i < medsList.options.length; i++){
      let option = medsList.options[i]
      if(option.selected){
        selectedMeds.push(option.textContent)
      }
    }
    return selectedMeds
  }

  




  




