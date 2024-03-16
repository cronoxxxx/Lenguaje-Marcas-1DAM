

function whole (){
    document.getElementById('button').addEventListener("click",showName)
}

const showName = () => {
    let name = document.getElementById('example').value
    document.getElementById('out').innerHTML="Hello "+name
}

whole()