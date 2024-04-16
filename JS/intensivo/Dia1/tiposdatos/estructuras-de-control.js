/**----------------------------Clase 13: Tipos de operadores----------------------------------------------- */

console.log("7" == 7) //solo compara los valores
console.log("7" === 7) //compara los tipos de datos y el valor
console.log(0 == false)
console.log(0 === false)

//incremento y decremento

let i = 1
console.log(i++) //asigna suma para la proxima iteracion
console.log(++i) //primero evalua la suma para esta iteracion


console.log(5+5 ===10 && 2+8 === 10)
console.log(!true)



/**----------------------------Clase 14: Condicionales----------------------------------------------- */


let edad = 19

if (edad>=17){
    console.log("Eres mayor de edad")
} else{
    console.log("Eres menor de edad")
}

switch(true){
    case edad>18:
        console.log("Eres mayor de edad")
        break;
    default:
        console.log("Eres menor de edad")    
}

let hora = 7
if(hora>=0 && hora<=5){
    console.log("Quiero dormir")
}

switch(true){
    case hora>=0 && hora<=5:
        console.log("Quiero dormir")
        break;
    case hora>=6 && hora<=11:
        console.log("Buenos dias")
        break;
    case hora>=12 && hora<=18:
        console.log("Buenas tardes")
        break;
    default:
        console.log("Buenas noches")        



        
}


const saludo = (hora) => {
    switch(true){
        case hora>=0 && hora<=5:
            console.log("Quiero dormir")
            break;
        case hora>=6 && hora<=11:
            console.log("Buenos dias")
            break;
        case hora>=12 && hora<=18:
            console.log("Buenas tardes")
            break;
        default:
            console.log("Buenas noches")        
    }
};

// Llamada a la función
saludo(10)
/**Operador ternario (condicion) ? verdadero : falso*/

let eresMayor = (edad>=10) ? "Eres mayor de edad" : "Eres menor de edad"
console.log(eresMayor)




/**----------------------------Clase 15: Bucles----------------------------------------------- */
let contador = 0

while(contador < 10){
    console.log(contador)
    contador++
}

contador = 0
do{
    console.log(contador)
    contador++
}while(contador<10)


let contadorX = 10;
while (contadorX < 10) {
    console.log("Bucle 'while': ", contadorX); // Este mensaje nunca se imprimirá ya que la condición es falsa desde el principio
    contadorX++;
}

// Ejemplo con do-while
contadorX = 10;
do {
    console.log("Bucle 'do-while': ", contadorX); // Este mensaje se imprimirá al menos una vez, ya que el cuerpo del bucle se ejecuta antes de verificar la condición
    contadorX++;
} while (contadorX < 10);


for(let i = 0; i<contadorX; i++){ //contadorX es ahora 11 gracias a evluacion previa de do while que lo incremento con contadorX++
    console.log(i)

}

const numeros = Array.of(10,20,30,40,50,60,70)
for(let cont in numeros){
    console.log(numeros[cont])
}

for(let key of numeros){
    console.log(key)
}

const adri = {
    nombre:"Adrian",
    apellido:"Saavedra",
    edad:35
}

for(let key in adri){
    console.log(`${key} : ${adri[key]}`)
}

let cadena = "Hola"
for(const char of cadena){
    console.log(char)
}


/**----------------------------Clase 16: Excepciones----------------------------------------------- */
try {
    console.log("Error")
    sinValor//captura
} catch (error) {
    console.log("Captura")
} finally{
    console.log("Ejecucion al final como cierre a excepcion")
}

try {
    let numero = NaN
    if (isNaN(numero)){
        throw new Error("Valor NaN")
    }
    console.log(`Numero ${numero}`)
} catch (error) {
    console.log("Se produjo el siguiente error: "+error)
}



console.log(parseInt(Math.random() * (10 - 1) + 1));

/**--------------------Clase 17: breaks y continues-------------------------- */

const numerosArreglo = [0,"xd",2,3,4,5,6,7,8]

for(let i = 0; i<numerosArreglo.length;i++){
    if(i===5){
        break //el break omite todos los numeros a partir del 5
    }
    console.log(numerosArreglo[i])
    
}


for(let i = 0; i<numerosArreglo.length;i++){
    if(i===5){
        continue //el continue omite el indice 5, el resto sigue normal
    }
    console.log(numerosArreglo[i])
}

/**--------------------Clase 18 : destructuracion-------------------------- */
let arreglosDesctructuracion = [1,2,3]
//sin destructuracion
let unoArr = arreglosDesctructuracion[0],
dosArr=arreglosDesctructuracion[1],
tresArr=arreglosDesctructuracion[2]
console.log(unoArr,dosArr,tresArr)

//con destructuracion
let [one,two,tree] = arreglosDesctructuracion
console.log(one,two,tree)

const nuevaPersona = {
    nuevoNombre:"Adrian",
    nuevoApellido:"Saavedra",
    nuevaEdad:19
}

let {nuevoNombre,nuevoApellido,nuevaEdad}=nuevaPersona

console.log(nuevoNombre,nuevoApellido,nuevaEdad)


/**------------------------Clase 19 : objetos literales---------------------------------- */

let nombreLit = "kEnAI",edadLit=19

const perro = {
    nombreLit: nombreLit,
    edadLit:edadLit,
    ladrar : function(){
        console.log("Guau guau")
    }
}
perro.ladrar()
console.log(perro)

/**Asignar valores directamente */
const dog = {
    nombreLit,edadLit,
    ladrar(){
        console.log("Guau guau")
    }
}
dog.ladrar()
console.log(dog)


/**------------------Clase 20 : Parámetros REST & Operador Spread---------------------------- */
//Parametros REST
function sumar(a,b,...c){
   let resultado = a+b

   c.forEach(n =>{
    resultado+=n
   })

   return resultado
}
console.log(sumar(2,3,4,6,7))


function restar(...c){
    let resultado = 0
 
    c.forEach(n =>{
     resultado+=n
    })
 
    return resultado
 }

console.log(restar(2,3,4,5,6,7)) //infinitos valores

//Operador SPREAD
const arr1 = [1,2,3,4,5],
arr2=[5,6,7,8,9]

console.log(arr1,arr2)
//los mezcla en un array producto de los 3 puntos
const arr3 = [...arr1,...arr2]

console.log(arr3) 



/**------------------Clase 21 : Arrow Functions---------------------------- */
const arrowSaludo = (nombre) =>{
    console.log(`Hola ${nombre}`)
}

arrowSaludo("Arnau")

const sumarArrow = (a,b,...c) =>{
    let sum = a+b
    c.forEach(n=>{
        sum+=n
    })
    return sum
}

console.log(sumarArrow(1,2,4,5,6,7))

const arrowArray = [1,2,3,4,6]

arrowArray.forEach((i,j)=>{
    console.log(`Elemento ${i} con indice ${j}`)
})


const perroArrow = {
    nombre:"Dog",
    ladrar:() =>{
        console.log(this) //el this ahora sera el objeto window
    },

    ladrar2(){
        console.log(this) //el this se refiere al objeto
    }
}

perroArrow.ladrar2()
perroArrow.ladrar()