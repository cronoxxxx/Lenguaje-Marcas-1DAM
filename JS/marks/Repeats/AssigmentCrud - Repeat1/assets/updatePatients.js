

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