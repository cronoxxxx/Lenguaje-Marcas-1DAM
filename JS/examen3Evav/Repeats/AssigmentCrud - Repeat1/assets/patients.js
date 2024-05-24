//ADD PATIENT PART

document.getElementById("add").addEventListener("click", showAddPatientModal)
function showAddPatientModal() {
    document.getElementById("addPatient").addEventListener("click", addPatient)
    let addpatientModal = new bootstrap.Modal(document.getElementById("addpatientModal"))
    addpatientModal.show()
}

function addPatient() { //añade un nuevo paciente con los valores del modal 
    let name = document.getElementById("addpatientName").value
    let phone = document.getElementById("addpatientPhone").value
    let tablebody = document.getElementById("bodytable")
    let patient = {id: 0, name: name, phone: phone}
    fetch ("https://informatica.iesquevedo.es/marcas/patients", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(patient) //convierte el objeto en un string y lo envia
    }).then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
            let row = createPatientRow(data) //crea una nueva fila
            tablebody.appendChild(row) //añade la nueva fila
            $("#addpatientModal").modal("hide")
    }).catch(error => console.log(`Error in the fetch: ${error}`))
}



getAllPatients()
function getAllPatients() { //genera los pacientes que ya están en el servidor
    fetch ("https://informatica.iesquevedo.es/marcas/patients")
    .then(response =>{
        if (!response.ok){
            throw new Error("Network response ain't ok")
        }
        return response.json()
    }).then(data =>{
        let tablebody = document.getElementById("bodytable")
        data.forEach(patient => {
            tablebody.setAttribute("patientID",patient.id) //asignado
            let row = createPatientRow(patient) //crea una nueva fila
            tablebody.appendChild(row) //añade la nueva fila
            //sigue en el bucle forEach hasta crear todas las filas
        })
    }).catch(error => console.log(`Error in the fetch: ${error}`))
}

function createPatientRow(patient) {
    let row = document.createElement("tr") //crea una nueva fila
    row.innerHTML = `
    <td>${patient.id}</td>
    <td>${patient.name}</td>
    <td>${patient.phone}</td>
    <td><button class='btn btn-info btn-sm'>Get info</button></td>
    <td><button class='btn btn-danger btn-sm'>Delete</button></td>
    <td><button class='btn btn-primary btn-sm'>Update</button></td>`
    row.querySelector(".btn-info").addEventListener("click", getInfo)
    row.querySelector(".btn-danger").addEventListener("click", deletePatient)
    row.querySelector(".btn-primary").addEventListener("click", showUpdatePatientModal)

    return row
}



//DELETE PATIENT PART

function deletePatient(event) {
    let row = event.target.parentNode.parentNode
    let patientID = row.cells[0].innerText
    let tablebody = document.getElementById("bodytable")
    fetch(`https://informatica.iesquevedo.es/marcas/patients/${patientID}?confirm=true`,{
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
        tablebody.removeChild(row)

    }).catch(error => console.log(`Error in the fetch: ${error}`))
    
}


//UPDATE PATIENT PART

function showUpdatePatientModal(event) { //el event seria el boton que se ha pulsado, en este caso el de update
    let row = event.target.parentNode.parentNode //obtiene el tr de la fila de la que se ha pulsado el boton
    //let patientID = row.cells[0].innerText //obtiene el valor de la columna 0 (id) de la fila
    let patientName = row.cells[1].innerText //obtiene el valor de la columna 1 (name) de la fila
   let patientPhone = row.cells[2].innerText //obtiene el valor de la columna 2 (phone) de la fila
    let updateB= document.getElementById("updatePatientB")
    updateB.addEventListener("click", handleUpdatePatientModal) 

    //document.getElementById("updatepatientId").value = patientID //coge los valores de los inputs y los rellena en el modal a mostrar
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

