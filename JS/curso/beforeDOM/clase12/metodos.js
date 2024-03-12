//foreach
let numero = [1,2,3,4,5,6,7]

numero.forEach((value) =>{
    console.log(value == 5)
    
})



for (let i = 0; i<numero.length ; i++){
    console.log(numero[i])
    console.log (numero[i] ==5)
}

numero.forEach(function(value){
    console.log(value)
})



//some
let numeros = [1,2,3,4,5];
console.log(numeros.some((value) =>{
    return (value %2 == 0) //haya si hay numeros pares, y lanza true si hay
    
}))

//every
numeros = [1,2,3,4,5];
console.log(numeros.every((value)=>{
    return (value ==5) //haya si todos los numeros son iguales a  5
}))

//map
numeros = [1,2,3,4,5];
let duplicar = numeros.map((value) =>{
    return value*2
})
console.log(duplicar)

//filter
numeros = [1000,3340,7046,2550,1092]

let numerosGrandes = numeros.filter((value) => {
    return (value > 2500)
})

console.log(numerosGrandes)


//reduce
numero = [1,2,3,4,5,6,7]
let respuesta = numero.reduce((sumar,datoActual)=> 
    sumar+datoActual,0 //se asigna 0 para el valor inicial suma, y de ahi el datoActual toma de valor los elementos del array
)
console.log(respuesta)



