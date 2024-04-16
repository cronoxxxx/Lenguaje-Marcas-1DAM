/*------------------------VIDEO 1: let vs var*------------------------------------------------/

var h = "Hola mundo"
let x = "Hello"
/*console.log(window.h)
console.log(window.x)//no se imprime*/

var musica = "Rock"
console.log("Variable música antes del bloque " + musica)
//bloque
{
  var musica = "Pop"
  console.log("Variable música dentro del bloque " + musica)
}

console.log("Variable música afuera del bloque " + musica) //ahora vale pop en vez de rock fuera del scope

console.log ("let")

let musica2 = "Rock"
console.log("Variable música antes del bloque " + musica2)
//bloque
{
  let musica2 = "Pop"
  console.log("Variable música dentro del bloque " + musica2)
}

console.log("Variable música afuera del bloque " + musica2) //tiene el valor inicial fuera del scope, que seria  rock



/*--------------------------------VIDEO2 : const y sus variaciones ----------------------------------*/

const PI  = 3.1416
console.log(PI)
const NUEVE = 9
console.log(NUEVE)

let afuera = "65"
let asciiCharacter = String.fromCharCode(parseInt(afuera))
console.log(asciiCharacter) // Output: A


const objeto = { //son valores compuestos, por lo que se puede agregar mas propiedades
    nombre : "Jon",
    edad: 35
}
console.log(objeto)
console.log(objeto.edad) //output de edad

objeto.correo = "adriam@example.com" //agregacion de variables
objeto.nombre="Adrian" //cambio de valor de variables
objeto.edad=17
console.log(objeto) //objeto


const colores = ["blanco","negro"]

console.log(colores)
colores.push("naranja")

console.log(colores)


/*--------------------------CLASE 3 : strings --------------------------------------------*/

let nombre = "jon"

let saludo = new String ("Hola mundo") //obsoleto

console.log(nombre,saludo)

console.log(nombre.length,saludo.length,saludo.toUpperCase())

let lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid, odio."

console.log(lorem.includes("amet"), lorem.includes("adrian"))

console.log(lorem.replace(/ /g, ""))

let loremSplit = lorem.split("")
let nLength = loremSplit.length

console.log(loremSplit,nLength) //genera otro conjunto a partir de donde los separamos

let palabra = "hola que tal";
let palabraRevertida = palabra.split("").reverse().join("");
console.log(palabraRevertida);


/*-----------------------CLASE 4: template strings-------------------------------------- */

nombre = "Adrian"
let apellido = "Saavedra"
saludo = "Hola mi nombre es: " +nombre + " " + apellido + "."

console.log(saludo)


//Interpolacion de variables
//Template String
let saludo2 = `Hola mi nombre es ${nombre} ${apellido}.`

console.log(saludo2)

let h1 = "<h1>Primavera</h1>.<h1>Verano</h1>.<h1>Otoño</h1>.<h1>Invierno</h1>"
h1 = h1.split(".")

console.log(h1)

for (let key of h1) {
    console.log(key)
    
}

h1 = `<h1>Primavera</h1>
        <h1>Verano</h1>
        <h1>Otoño</h1>
        <h1>Invierno</h1>`

console.log(h1)


let ul3 = "<h1>"
ul3+="Primavera</h1>"
console.log(ul3)




/*--------------------------CLASE 4 : numeros --------------------------------------------*/
let a = 2
let b = new Number(5)
let c = 8.53333
let d = "5.6323" //es una cadena
let dFloat = parseFloat(d) //parsea cadena a float
console.log(a,b,c)
console.log(c.toFixed(2)) //decimal format
console.log (parseInt(c)) //parte entera
console.log(dFloat) //parsea cadena a float
console.log(typeof c,typeof d, typeof dFloat)
console.log(a + dFloat)
console.log((a + dFloat).toFixed(2))

 

/*--------------------------CLASE 5 : booelanos --------------------------------------------*/





let verdadero = true
let falso = false

console.log(verdadero, falso, typeof verdadero, typeof falso)

/*--------------------------CLASE 6 : otros primitivos --------------------------------------------*/
let undefinedx

console.log(undefinedx)

let nulo = null

console.log(nulo)


let nan = "hola" * 3.7
console.log(nan)

/*--------------------------CLASE 7 : funciones --------------------------------------------*/

function action (){
 
  const listaNumeros = []
  for (let i = 0; i<10 ;i++){
    listaNumeros[i] = i+1;
  }
return listaNumeros //todo lo que esta antes del return se completa

}
 
console.log(action())


nombre = "Adrian"
edad = 18

function saludos (nombre ="Default",edad = -1){ //valores por defecto al no tener un nombre y edad como argumentos
    return console.log(`Hola mi nombre es ${nombre} y tengo ${edad}`)
}

saludos(nombre,edad)
saludos()

/*--------------------------CLASE 8 : arrays --------------------------------------------*/

const array = [1,2,3]
const array2 = [1,true,"Hola",["A","B",1.5,[1.1,2.2,3.3]]]
console.log(array)
console.log(array2.length)
console.log(array2[0])
console.log(array2[array2.length-1])
console.log(array2[3][2]) //imprime el array dentro del array
console.log(array2[3][3][1])


const arrayof = Array.of("X","U","L",9,8,8)

console.log(arrayof) //con longitud


// Crear un array a partir de una cadena
const cadena = 'hello';
const arraycadena = Array.from(cadena);
console.log(arraycadena); 

const falsefilling = Array(10).fill(true)

falsefilling.push(false, false)

console.log(falsefilling)


falsefilling.pop()
console.log(falsefilling)


falsefilling.forEach((variant, index) => {
  console.log(`Index: ${index}, Value: ${variant}`)
})

/*--------------------------CLASE 9 : objetos --------------------------------------------*/

const objectRandom = {
  nombre : "Adrian",
  apellido : "Saavedra",
  edad : 17,
  pasatiempos : ["Quejarme de todo", "estudiar"],
  soltero : false,
  contacto:{
    email : "saavedra.mateo.walter@gmail.com",
    github : "cronoxxxx"
  },
  saludar: () => { //global, no va relacionado con el objeto, sino con window
    console.log("Hola")
  },

  miNombreEs: function() { //usar function para el this local del objeto
    console.log(`Nombre: ${this.nombre}
    Apellido: ${this.apellido}`)
  }
}

console.log(objectRandom)

console.log(objectRandom["nombre"])
console.log(objectRandom.apellido)
objectRandom.saludar()
console.log(objectRandom.pasatiempos[0])
console.log(objectRandom.contacto.email)
objectRandom.miNombreEs()

console.log(Object.keys(objectRandom)) //lista las claves de los objetos

const lista = Object.keys(objectRandom) //lo convierto en array

lista.push("Pais".toUpperCase())

console.log(lista.sort())

console.log(Object.values(objectRandom)[1])

console.log(objectRandom.hasOwnProperty("nombre"))
console.log(objectRandom.hasOwnProperty("nacimiento"))