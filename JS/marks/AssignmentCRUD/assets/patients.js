
getAllPatiens()

function getAllPatiens() {
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
            let row = createPatientRow(patient)
            tablebody.appendChild(row)
        })

    })
    
    .catch(error => {
        console.error("Error in the fetch:",error)
    })
}

function createPatientRow(patient) {
    var row = document.createElement("tr")
    row.innerHTML = "<td>" + patient.id + "</td>" +
        "<td>" + patient.name + "</td>" +
        "<td>" + patient.phone + "</td>" +
        "<td><button class='btn btn-info btn-sm'>Get Info</button></td>" +
        "<td><button class='btn btn-danger btn-sm'>Delete</button></td>" +
        "<td><button class='btn btn-primary btn-sm'>Update</button></td>" 

    //row.querySelector("btn-info").addEventListener("click", getInfo);
    //row.querySelector("btn-danger").addEventListener("click", deletePatient);
    //row.querySelector("btn-primary").addEventListener("click", showUpdatePatientModalW);

    return row
}

document.getElementById("add").addEventListener("click", function() {
    let addpatientModal = new bootstrap.Modal(document.getElementById('addpatientModal'))
    addpatientModal.show()
});


























