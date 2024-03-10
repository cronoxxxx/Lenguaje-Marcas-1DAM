function area() {
    const PI = 3.14;
    let radio = document.getElementById("prueba").value
    let result = PI * radio * radio
    document.getElementById("resultado").value = result

    
}



//Ejemplos


//eval

let a = 10;
let b = 20;
let x = eval("a + b");
let y = eval ("3 + 4")
console.log(x)
console.log(y)
let z = eval("a + 8")
console.log(z)
let respt = a + z
console.log(respt)


//parseFloat: valor numerico

let a1= parseFloat("10")
console.log(a1)
let b1 = parseFloat ("20curso")
console.log(b1)
let c = parseInt("10curso")
console.log(c)

//date.parse()
//intenta analizar una cadena de fecha y hora y devuelve el número de milisegundos transcurridos desde el 1 de enero de 1970 a las 00:00:00 UTC hasta la fecha y hora especificadas.
let dato = "april 26, 2020 1:30 PM"
const resultado = Date.parse(dato)
console.log(resultado) 








