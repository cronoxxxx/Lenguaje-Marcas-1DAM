function action (){
    const btn = document.getElementById("btn-load");
    btn.addEventListener("click",createTable)
}

function createTable(){
   let tBody = document.getElementById("bodytable")
    let table = "<table style='width: 100%'>";
    table += `<tr style='height: 50px'>
                <th style='width: 50px; height: 50px'>Action</th>
                <th style='width: 50px; height: 50px'>Name</th>
                <th style='width: 50px; height: 50px'>Email</th>
                <th style='width: 50px; height: 50px'>Add</th>
                <th style='width: 50px; height: 50px'>Delete</th>
                <th style='width: 50px; height: 50px'>Update</th>
                </tr>`
        for (let i = 0; i < 3; i++) {
            table += `<tr style='height: 50px'>
            <td style='width: 50px; height: 50px'>${i+1}</td>
                <td style='width: 50px; height: 50px'>A${i+1}</td>
                <td style='width: 50px; height: 50px'>A@${i+1}.com</td>
                <td style='width: 50px; height: 50px'><button class="btn-add">Add</button></td>
                <td style='width: 50px; height: 50px'><button class="btn-delete">Delete</button></td>
                <td style='width: 50px; height: 50px'><button class="btn-update">Update</button></td>
                </tr>`

        }
        table += "</table>";

        tBody.innerHTML = table;
        document.querySelectorAll(".btn-add").forEach(btn => btn.addEventListener("click",addPersonTable))
        document.querySelectorAll(".btn-delete").forEach(btn => btn.addEventListener("click",deletePersonTable))
        document.querySelectorAll(".btn-update").forEach(btn => btn.addEventListener("click",updatePersonTable))
}

function addPersonTable(){
    
    let addPersonContainer = document.getElementById("personContainer")
    
    addPersonContainer.innerHTML = `<div>
    <label for="name">Name:</label>
    <input type="text" id="name">
    <label for="email">Email:</label>
    <input type="text" id="email">
    <button id="btn-add">Add</button>`
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let btnAdd = document.getElementById("btn-add")
    btnAdd.addEventListener("click",addTable)

    

}

function addTable(){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tBody = document.getElementById("bodytable")
    let table = tBody.innerHTML
    table += `<tr style='height: 50px'>
    <td style='width: 50px; height: 50px'>${table.length}</td>
    <td style='width: 50px; height: 50px'>${name}</td>
    <td style='width: 50px; height: 50px'>${email}</td>
    <td style='width: 50px; height: 50px'><button class="btn-add">Add</button></td>
    <td style='width: 50px; height: 50px'><button class="btn-delete">Delete</button></td>
    <td style='width: 50px; height: 50px'><button class="btn-update">Update</button></td>
    </tr>`
    tBody.innerHTML = table
}

function deletePersonTable(event) {
    let row = event.target.parentNode.parentNode;
    row.remove();
}


function updatePersonTable(event) {
    let row = event.target.parentNode.parentNode;
    let name = row.children[1].textContent;
    let email = row.children[2].textContent;

    let addPersonContainer = document.getElementById("personContainer")
    addPersonContainer.innerHTML = `<div>
    <label for="name">Name:</label>
    <input type="text" id="name" value="${name}">
    <label for="email">Email:</label>
    <input type="text" id="email" value="${email}">
    <button id="btn-update">Update</button>`
    

    let btnUpdate = document.getElementById("btn-update");
    btnUpdate.addEventListener("click", function() {
        updateTable(row); //si lleva argumentos, entonces se pone entre parentesis en una funcion anonima
    });
}


function updateTable(row){
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    row.children[1].textContent = name;
    row.children[2].textContent = email;
}


action()