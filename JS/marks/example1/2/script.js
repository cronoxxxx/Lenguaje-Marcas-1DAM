

function whole(){
    document.getElementById('one').addEventListener("keyup",copy) //se usa el input para ingresar, change para clic
}

const copy = () => {
    let value = document.getElementById('one').value
    document.getElementById('two').value = value //refleja el cambio al mismo tiempo
}

whole()