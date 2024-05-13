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



//DELETE PATIENT PARTç

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


