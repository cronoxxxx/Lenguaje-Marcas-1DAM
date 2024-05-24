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
        medRecordTable.setAttribute("data-patient-id", patientID)
        medRecordTable.innerHTML = `<thead>
        <tr>
            <th colspan=5>${patientName}'s medical records</th>
            <th colspan=2><button class="btn btn-info btn-sm my-2" id="addB">Add MedRecord</button></th>
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
            medRecordTable.querySelector("tbody").appendChild(row)
             //añade la nueva fila
            //sigue en el bucle forEach hasta crear todas las filas
            
        })

        infoDiv.appendChild(medRecordTable)
         //para el attribute de id
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
    row.querySelector('.deleteButton').addEventListener("click",deleteMedRecord)
    row.querySelector('.updateButton').addEventListener("click",showUpdateMedRecordModal)
    return row
}




function fillDoctors(args){
    fetch ("https://informatica.iesquevedo.es/marcas/doctors")
    .then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
        console.log(data)
        let comboDoctor = document.getElementById(args)
        comboDoctor.innerHTML = ""
        data.forEach(doctor => {
            let option = document.createElement("option")
            option.value = doctor.id
            option.textContent = doctor.name
            comboDoctor.appendChild(option)
        })
    }).catch(error => console.log(`Error in the fetch: ${error}`))
}

function fillMedications(args){
    let comboMeds = document.getElementById(args)
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
    fillMedications("addMedRecordMeds")
    fillDoctors("addMedRecordDoctor")
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

  function getSelectedMedsUpdate(){ // obtiene los medicamentos seleccionados en el select de addMedRecordModal
    let medsList = document.getElementById("updateMedRecordMeds")
    let selectedMeds = []
    for(let i = 0; i < medsList.options.length; i++){
      let option = medsList.options[i]
      if(option.selected){
        selectedMeds.push(option.textContent)
      }
    }
    return selectedMeds
  }

  function deleteMedRecord (event){
    
    let row = event.target.parentNode.parentNode
    let patientID = row.cells[0].innerText
    fetch(`https://informatica.iesquevedo.es/marcas/patients/medRecords/${patientID}`,{
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    } ).then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
        console.log ("Patient deleted successfully", data)
        row.remove()

    }).catch(error => console.log(`Error in the fetch: ${error}`))
  }



 

  function showUpdateMedRecordModal (event){
    let table = document.getElementById("medRecordTable")
    let appIdPatient = table.getAttribute("data-patient-id") //obtiene el id del paciente

    fillDoctors('updateMedRecordDoctor')
    fillMedications('updateMedRecordMeds')
    let row = event.target.parentNode.parentNode
    let patID = row.cells[0].innerText
    let patientDesc = row.cells[1].innerText
    let patientDate = row.cells[2].innerText
    document.getElementById('updateMedRecordID').value = patID
    document.getElementById('updateMedRecordDesc').value = patientDesc
    document.getElementById('updateMedRecordDate').value = patientDate
    document.getElementById('updateMedRecordPatientID').value = appIdPatient
    
    let updateMedRecordBtn = document.getElementById('updateMedRecord')
   
    updateMedRecordBtn.addEventListener("click",handleUpdateMedRecordModal)

    function handleUpdateMedRecordModal(){
        updateMedRecordBtn.removeEventListener("click",handleUpdateMedRecordModal)
        updateMedRecord(row)
    }

    let updateMedRecordModal = new bootstrap.Modal(document.getElementById("updateMedRecordModal"))
    updateMedRecordModal.show()
  }



  function updateMedRecord (row){
    let id = document.getElementById("updateMedRecordID").value
    let diagnosis = document.getElementById("updateMedRecordDesc").value
    let date = document.getElementById("updateMedRecordDate").value
    let doctor = document.getElementById("updateMedRecordDoctor").value
    let idPatient = document.getElementById("updateMedRecordPatientID").value
    let parseDate = new Date(date)
    let formattedDate = parseDate.toISOString().split('T')[0]
    let selectedMedications = getSelectedMedsUpdate()

    let medRecord = {
        id : Number(id),
        description : diagnosis,
        idPatient : Number(idPatient),
        date : formattedDate,
        idDoctor : Number(doctor),
        medications : selectedMedications
    }
 
 
     fetch("https://informatica.iesquevedo.es/marcas/patients/medRecords",{
         method: "PUT",
         headers: {
             "Content-Type": "application/json"
         },
         body: JSON.stringify(medRecord)
     } ).then(response =>{
         if (!response.ok){
             throw new Error("Network response ain't ok")
         }
         return response.json()
     }).then(data =>{
         console.log (data)
         $('#updateMedRecordModal').modal('hide')
         
         row.cells[1].innerText = medRecord.description
         row.cells[2].innerText = medRecord.date
         row.cells[3].innerText = medRecord.idDoctor
         row.cells[4].innerText = medRecord.medications
     }).catch(error => console.log(`Error in the fetch: ${error}`)
     )

  }



