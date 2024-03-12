
let a = 5
let b = 6
suma(a,b)


function suma(a,b) {
    const sum = a + b
    console.log("La suma es: "+sum)
}


//funciones con retorno
function dato_trabajador() {
    let salario = 2550
    return salario;
}
let obrero = dato_trabajador()
console.log(obrero)


//funciones anonimas (flecha)
let resta = function (var1,var2){
    return a - b
}
const result = resta(a,b)
console.log (result)

    //FORMA 2
    let resta2 = (n1,n2)=> n1 - n2
    const result2= resta2(a,b)
    console.log (result2)




    //sin flecha
let nombre = function(){
    return "Adrian"
}
const name1= nombre()
const name2 = nombre()
console.log (name1 + " "+ name2)

//con flecha
let nombre2 = ()=> "Adrian viva adrian"

const name3 = nombre2()
console.log(name3)


//ANIDADAS

function operacion (){
    const PI = 3.14
    function areas (radio){
        let area = PI*radio * radio
        console.log ("Area del circulo: "+area)
    }
    operacion.area = areas;
}

let radio = 4;
operacion();

let result3= operacion.area
result3(radio)

