let a = 20;
let b = 20;
if (a > b) {
    console.log(a+" ES MAYOR")
} else if (a==b){
    console.log ("Son iguales")
} 
else {
    console.log (b+" ES MAYOR")
}

var x = true;
var y = false;

console.log(x || y)
console.log (x && y)


//uso de condicionales and y or

let c = 30

if(a>b && a>c ){
    console.log(a+ "es mayor")
    
} else if (a<b && b>c ){
    console.log (b+" es mayor")
} else{
    console.log (c+ " es mayor")
}


//switch - case

let curso = "java"
switch (curso) {
    case "java":
        console.log ("es java")
        break;
    case "jabba the hutt":
        console.log ("big")
        break;    
    default:
        console.log ("no valido")
        break;
}





