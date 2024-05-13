function getInfo (event) { //el event seria el boton que se ha pulsado, en este caso el de update
    let infoDiv = document.getElementById("infoContainer") //obtiene el div donde se mostraran los datos
    infoDiv.innerHTML = "" //limpia el div para que no se dupliquen los datos
    let row = event.target.parentNode.parentNode

    let patientID = row.cells[0].innerText
    let patientName = row.cells[1].innerText

    fetch(`https://informatica.iesquevedo.es/marcas/patients/${patientID}/medRecords`)
    .then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
        console.log(data)
        let medRecordTable = document.createElement("table")
        medRecordTable.id = "medRecordTable" //crea una nueva tabla con id 
        medRecordTable.className = "table table-bordered table-condensed table-striped " //crea una nueva tabla con clase
        medRecordTable.innerHTML = `<thead>
        <tr>
            <th colspan=5>${patientName}'s medical records</th>
            <th colspan=2><button class="btn btn-info btn-sm my-2" id="addB">Add</button></th>
        </tr>
        `

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
            <tbody></tbody>`
        
        data.forEach(medRecord => {
            let row = createMedRecordRow(medRecord) //crea una nueva fila
            medRecordTable.querySelector("tbody").appendChild(row) //añade la nueva fila
            //sigue en el bucle forEach hasta crear todas las filas
        })

        infoDiv.appendChild(medRecordTable)
        document.getElementById("addB").addEventListener("click", showAddMedRecordModal)
    })
}


function createMedRecordRow(medRecord) {
    let row = document.createElement("tr") //crea una nueva fila
    row.innerHTML = `
    <td>${medRecord.id}</td>
    <td>${medRecord.description}</td>
    <td>${medRecord.date}</td>
    <td>${medRecord.idDoctor}</td>
    <td>${medRecord.medications}</td>
    <td><button class='btn btn-danger btn-sm deleteButton'>Delete</button></td>
    <td><button class='btn btn-primary btn-sm updateButton'>Update</button></td>`
    return row
}


function fillDoctors(){
    fetch ("https://informatica.iesquevedo.es/marcas/doctors")
    .then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
        console.log(data)
        let comboDoctor = document.getElementById("addMedRecordDoctor")
        comboDoctor.innerHTML = ""
        data.forEach(doctor => {
            let option = document.createElement("option")
            option.value = doctor.id
            option.textContent = doctor.name
            comboDoctor.appendChild(option)
        })
    }).catch(error => console.log(`Error in the fetch: ${error}`))
}

function fillMedications(){
    let comboMeds = document.getElementById("addMedRecordMeds")
    comboMeds.innerHTML = ""
    let option = document.createElement("option")
    option.textContent= "Med 1"
    comboMeds.appendChild(option)

    option = document.createElement("option")
    option.textContent= "Med 2"
    comboMeds.appendChild(option)

    option = document.createElement("option")
    option.textContent= "Med 3"
    comboMeds.appendChild(option)
}

function showAddMedRecordModal(){
    fillMedications()
    fillDoctors()
    document.getElementById("addMedRecord").addEventListener("click", addMedRecord)
    let addMedRecordModal = new bootstrap.Modal(document.getElementById("addMedRecordModal"))
    addMedRecordModal.show()
}


function addMedRecord (){
    let diagnosis = document.getElementById("addMedRecordDesc").value
    let date = document.getElementById("addMedRecordDate").value
    let doctor = document.getElementById("addMedRecordDoctor").value
    let parseDate = new Date(date)
    let formattedDate = parseDate.toISOString().split('T')[0]
    let selectedMedications = getSelectedMeds()

    let medRecord = {
        id : 0,
        description : diagnosis,
        date : formattedDate,
        idDoctor : Number(doctor),
        medications : selectedMedications
    }

    fetch ("https://informatica.iesquevedo.es/marcas/patients/medRecords", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(medRecord) //convierte el objeto en un string y lo envia
    }).then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    })
    .then(data =>{
        let medRecordTable = document.getElementById("medRecordTable")
        console.log("Medical record added successfully", data)
        let row = createMedRecordRow(data) //crea una nueva fila
        medRecordTable.querySelector("tbody").appendChild(row) //añade la nueva fila
        $("#addMedRecordModal").modal("hide")
    }).catch(error => console.log(`Error in the fetch: ${error}`))
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



