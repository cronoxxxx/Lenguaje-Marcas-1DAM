document.addEventListener("DOMContentLoaded",whole)

function whole(){
    document.getElementById('one').addEventListener("input",copy) //se usa el input para ingresar
}

const copy = () => {
    let value = document.getElementById('one').value
    document.getElementById('two').value = value //refleja el cambio al mismo tiempo
}

