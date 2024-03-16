function whole(){
    let button = document.getElementById('btn')
    button.addEventListener("click",calcularResultado)
}

const calcularResultado = () => {
    let result = eval((4/3)*3.1415*document.getElementById('calc').value) //formula del volumen
    document.getElementById('result').value=result
}

whole()