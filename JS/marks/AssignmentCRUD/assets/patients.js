
getAllPatiens() //primera llamada a la api para cargar los datos en la tabla

function getAllPatiens() { //primera llamada a la api para cargar los datos en la tabla
    fetch("https://informatica.iesquevedo.es/marcas/patients")
       
    .then (response => {
        if (!response.ok) {
            throw new Error('Network response is not ok')
        }
        return response.json()
    })
    
    .then (data => {
        let tablebody = document.getElementById("bodytable")
        data.forEach(patient => {
            let row = createPatientRow(patient) //crea una nueva fila de la tabla
            tablebody.appendChild(row)
        })

    })
    
    .catch(error => {
        console.error("Error in the fetch:",error)
    })
}

function createPatientRow(patient) { //crea una nueva fila de la tabla
    var row = document.createElement("tr")
    row.innerHTML = "<td>" + patient.id + "</td>" +
        "<td>" + patient.name + "</td>" +
        "<td>" + patient.phone + "</td>" +
        "<td><button class='btn btn-info btn-sm'>Get Info</button></td>" +
        "<td><button class='btn btn-danger btn-sm'>Delete</button></td>" +
        "<td><button class='btn btn-primary btn-sm'>Update</button></td>" 

    row.querySelector(".btn-info").addEventListener("click", getInfo) //in medRecords.js
    row.querySelector(".btn-danger").addEventListener("click", deletePatient)
   row.querySelector(".btn-primary").addEventListener("click",showUpdatePatientModal)

    return row
}








document.getElementById("add").addEventListener("click", showAddPatientModal); //llamada al modal

function showAddPatientModal() {
    
    document.getElementById("addPatient").addEventListener("click",addPatient) //le damos un evento al boton para que con el metodo de addPatient agregue los valores del modal y los convierta en nueva fila de la tabla cuando se presione
    let addpatientModal = new bootstrap.Modal(document.getElementById('addpatientModal'))
    addpatientModal.show()
}



function addPatient (){ //crea un nuevo paciente con los valores insertados por el usuario en el modal addpatientModal
    //obtiene los valores insertados por el usuario
    let patientName = document.getElementById("addpatientName").value
    let patientPhone = document.getElementById("addpatientPhone").value
    let tableBody = document.getElementById("bodytable")
    let patient = { //crea un objeto con los datos del paciente insertados por el usuario y se muestra en consola
        id:0,
        name:patientName,
        phone:patientPhone
    }

    fetch("https://informatica.iesquevedo.es/marcas/patients", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(patient)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response is not ok")
        }
        return response.json()
    })
    .then(data => {
        if (Array.isArray(data)) { //si la respuesta es un array
            
            data.forEach(patient => { //coge los datos insertados por el usuario
                let row = createPatientRow(patient) //crea una nueva fila de la tabla
                tableBody.appendChild(row) //agrega la nueva fila a la tabla
            });
        } else {
            //si la respuesta es un solo objeto
            let row = createPatientRow(data) //crea una nueva fila de la tabla
            tableBody.appendChild(row) //agrega la nueva fila a la tabla
        }
        $('#addpatientModal').modal('hide') //UNA VEZ CREADA LA NUEVA FILA, se oculta el modal de addpatientModal
    })
    .catch(error => {
        console.error("Error in the fetch", error)
    })
}
//parte ha hecha la de arriba

function showUpdatePatientModal(event) { //el event seria el boton que se ha pulsado, en este caso el de update
    let row = event.target.parentNode.parentNode //obtiene el tr de la fila de la que se ha pulsado el boton
    let patientID = row.cells[0].innerText //obtiene el valor de la columna 0 (id) de la fila
    let patientName = row.cells[1].innerText //obtiene el valor de la columna 1 (name) de la fila
   let patientPhone = row.cells[2].innerText //obtiene el valor de la columna 2 (phone) de la fila
    let updateB= document.getElementById("updatePatientB")
    updateB.addEventListener("click", handleUpdatePatientModal) 

    document.getElementById("updatepatientID").value = patientID //coge los valores de los inputs y los rellena en el modal a mostrar
    document.getElementById("updatepatientName").value = patientName
   document.getElementById("updatepatientPhone").value = patientPhone

    function handleUpdatePatientModal() {
        updateB.removeEventListener("click", handleUpdatePatientModal) //remueve el evento para que solo se ejecute una vez
        updatePatient(row) //llama a la función que actualiza el paciente pasando la fila de la que se ha pulsado el boton (el tr)
    }

    let updatepatientModal = new bootstrap.Modal(document.getElementById("updatepatientModal"))
    updatepatientModal.show()
}

function updatePatient(row) {
    //let patientID = document.getElementById("updatepatientId").value 
    //obtiene el valor del nombre del modal para actualizar el paciente
    let patientName = document.getElementById("updatepatientName").value
   let patientPhone = document.getElementById("updatepatientPhone").value
    let patient = {name: patientName,phone:patientPhone}


    fetch("https://informatica.iesquevedo.es/marcas/patients",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient)
    } ).then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
        console.log (data)
        $('#updatepatientModal').modal('hide')
        row.cells[1].innerText = patient.name
        row.cells[2].innerText = patient.phone
    }).catch(error => console.log(`Error in the fetch: ${error}`))




}

//el event representa al boton que se presiona
function deletePatient (event){ //funcion para borrar un paciente, usa el event para borrar el paciente de la tabla seleccionada
    let row = event.target.parentNode.parentNode
    let patientID = row.cells[0].innerText 
    fetch(`https://informatica.iesquevedo.es/marcas/patients/${patientID}?confirm=true`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response is not ok")
        }
        return response.json()
    })
    .then(data => {
        console.log("Patient deleted successfully",data)
        document.getElementById("bodytable").removeChild(row) //elimina la fila
        
    }).catch(error => {
        console.error("Error deleting patient", error)
    })
}










































