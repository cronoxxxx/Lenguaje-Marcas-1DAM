//--------------------------------Objeto Console--------------------------------------------------------------------------

console.log("Funciones y Objetos")
console.error("Error")
console.warn("Funciones")
console.info("Informativo")


let nombre = "Adrian", edad = 19, casado = false, mascotas = null, color = undefined

console.log(edad, nombre, casado, mascotas, color)
console.log(`Hola soy ${nombre}`)

console.clear()

//grupos
console.group("Funciones")
console.log("Hola")
console.groupEnd()
//tablas
console.table({nombre, edad, casado, mascotas, color})
console.table(console)
console.table(Object.entries(console).sort())

console.clear()

const num = [1,2,3,4,5],vocales = ["a","e","i","o","u"]

console.table(Object.values({num, vocales}).sort())
console.table(Object.keys({num, vocales}).sort())

const perro = {
    nombre: "Kabosu",
    edad: 18,
    casado: false,
    color: "mostaza"
}

console.table(perro)
//medir tiempo de ejecucion
console.time("Cuanto tiempo tarda")
const arreglo = Array(1000)

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i
}

console.timeEnd("Cuanto tiempo tarda")


//contar 
for(let i = 0; i < 10; i++){
    console.count("Conteo")
    console.log(i)
}


//console.trace
let x = 1,y=2,pruebaXY =`Se espera que x(${x}) sea mayor que y(${y})`

console.assert(x>y,pruebaXY)



//---------------------------------------Objeto Date--------------------------------------------------------
let fecha = new Date()

console.log(fecha.getDate())
console.log(fecha.getDay())
console.log(fecha.getFullYear())
console.log(fecha.getHours())
console.log(fecha.getMinutes())
console.log(fecha.getSeconds())
console.log(fecha.getTime())
console.log(Date.now()) //desde el 1970

//formato de fecha
console.log(fecha.toString())
console.log(fecha.toDateString())
console.log(fecha.toTimeString())
console.log(fecha.toLocaleDateString())
console.log(fecha.toLocaleTimeString())
console.log(fecha.toLocaleString())
console.log(fecha.toUTCString())
console.log(fecha.toISOString().slice(0,10))
console.log(fecha.toISOString().split('T')[0])
console.log(fecha.toISOString())
console.log(fecha.getTimezoneOffset())
console.log(fecha.toJSON())
//formato de fecha UTC
console.log(fecha.getUTCDate())
console.log(fecha.getUTCDay())
console.log(fecha.getUTCFullYear())
console.log(fecha.getUTCHours())


let cumpleAdrian = new Date(2004,8,20)
cumpleAdrian.setHours(14); // Establecer la hora a 14:00
cumpleAdrian.setMinutes(30);
cumpleAdrian.setSeconds(30);
console.log(cumpleAdrian.toDateString())
console.log(cumpleAdrian.toString())

//------------------------------------------Objeto Math------------------------------------------------------------------

console.log(Math.PI)
console.log(Math.E)
console.log(Math.abs(-5))
console.log(Math.ceil(4.3)) //redondea hacia arriba
console.log(Math.floor(4.5)) //redondea hacia abajo
console.log(Math.round(4.5)) //redondea al entero mas cercano
console.log(Math.sqrt(9))

console.log(Math.pow(2,3))

console.log(Math.min(1,2,3,4,5,6,7,8,9,10))

console.log(Math.max(1,2,3,4,5,6,7,8,9,10))

console.log(Math.trunc(4.5)) //parte entera
console.log(Math.sign(-5)) //signo -1(negativo), 0 (cero), 1 (positivo)

console.log((Math.random() * 9)+ 2) //random entre 2 y 10

// random entre 2 y 10 con 2 decimales
let numeroAleatorio2 = (Math.random() * 9 + 2).toFixed(2);
console.log(numeroAleatorio2);

// random entre 2 y 10 sin decimales
let numeroAleatorio = parseInt((Math.random() * 9) + 2)
console.log(numeroAleatorio)


//---------------------------------Operadores de corto circuito--------------------------------------------

console.log(0 || "Hola")
console.log(0 && "Hola")
console.log(0 ?? "Hola")
/*
 *Operadores de corto circuito
 *false
null
undefined
0
-0
NaN
una cadena vacía ("")
un objeto vacío ({})
un array vacío ([])
 */
function saludar (nombre){
    nombre = nombre || "Desconocido"
    console.log(`Hola ${nombre}`)
}

saludar("Adrian")
saludar()
saludar("C" || "Adrian")
saludar (0 || "Adrian") //el 0 es falso, por lo que se ejecuta el segundo parametro

//si uno es falso y el otro es verdadero, se ejecuta el verdadero
saludar (false || "Adrian") //0+1 = 1 -> false + verdadero = verdadero
saludar (true || "Adrian") //1+1 = 1 -> verdadero + verdadero = verdadero


saludar("Adrian" && "C") //1x1 = 1 -> verdadero * verdadero = verdadero -> se ejecuta el ultimo verdadero
saludar (0 && "Adrian") 

//si uno es falso y el otro es verdadero, no se ejecuta el verdader
//basta con que uno de los dos sea falso para que se ejecute el "desconocido"
saludar (false && "Adrian") //0 x 1 = 0 -> false * verdadero = false



//---------------------------------Expresiones regulares-----------------------------------------------------------





/**
 * Coincidencias Basicas
.       - Cualquier Caracter, excepto nueva linea
\d      - Cualquier Digitos (0-9)
\D      - No es un Digito (0-9)
\w      - Caracter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Caracter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva linea)
\S      - No es un Espacio, Tab o nueva linea.

Limites
\b      - Limite de Palabra
\B      - No es un Limite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Numero Exacto
{3,4}   - Rango de Numeros (Minimo, Maximo)

Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTAN dentro de los brackets

Grupos
( )     - Grupo
|       - Uno u otro
 */

