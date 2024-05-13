function action (){
    document.getElementById('JSONtoStringButton').addEventListener('click',JSONFormatter)
}

function JSONFormatter (){
    let string1 = document.getElementById('JSONtoString1').value
    let string2 = document.getElementById('JSONtoString2').value
    let string3 = document.getElementById('JSONtoString3').value
    let string = {
        name: string1,
        mediumname: string2,
        lastname: string3
    }

    createNewStringJSON(JSON.stringify(string))
}


function createNewStringJSON (string){

    document.getElementById('textValue').innerText = string
}

action()