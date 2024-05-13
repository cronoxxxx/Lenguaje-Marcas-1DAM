
//ejercicio 1


function action1(n1, n2) {
    return randomGetter(n1, n2);
}

const randomGetter = (n1, n2) => {
    const storage = [n1, n2]; 
    const randomIndex = Math.floor(Math.random() * storage.length); 
    return storage[randomIndex]; 
}

console.log(action1(3,5))



//ejercicio 2

//Function to calculate the result of a quadratic equation (ax2+bx+c=0)

function action2(a = 1, b = 2, c=1){
    return ecuacion(a,b,c)
}


const ecuacion = (a,b,c) =>{
    const discriminante = (Math.floor(b,2)*4*a*c)
    if (isNaN(discriminante)){
        return console.log("no es valido")
    } else{
        const cuadraticaPositiva = (-b + discriminante)/(2*a)
        const cuadraticaNegativa = (-b - discriminante)/(2*a)
        const resultados = Array.of(cuadraticaNegativa,cuadraticaPositiva)
        return resultados
    }
}

console.log(action2(2,4,5))

//Function to get the maximum date from an array of dates ejercicio 4
// Create an array of dates using the array constructor
let datesArray = [new Date('2024-04-01'), new Date('2024-04-02'), new Date('2024-04-03')];

let maxDate = new Date(Math.max.apply(null, datesArray));
console.log(maxDate.toString());

//. Function that gets the current date and returns the day and month as a string in the following format: "Today is day 3 of month 3". Use .getDay() and .getMonth() Date methods. ejercicio 5

const currentDayFormat = () =>{
    const day = new Date ()
    
    const toNumberDay = day.getDate()
    console.log(toNumberDay)
    const toNumberMoth = day.getMonth()+1
    console.log(toNumberMoth)

    console.log(`Today is the day ${toNumberDay} of month ${toNumberMoth}`)

}
currentDayFormat()


//ejercicio 6
/**Function that receives one parameter, and it has to verify that it is a
number and that it is between 18 and 120. If the "age" is between 18
and 120 it will return the string of characters "You can drive"
Otherwise it will return: " Insert a valid number"  */

function action6(age){
    if(isNaN(age)){
        return "Insert a valid number"
    }else if(age >= 18 && age <= 120){
        return "You can drive"
    }else{
        return "Insert a valid number"
    }
}
console.log(action6(20))


/*Function that receives one parameter. If it is not an array it will return
"Not an array". If it is an array it will return the third value of the
array. If there is no third value, it will return "No third element”
*/


let array = [1,2,3]

function comproveArray (array){
    if(!Array.isArray(array)){
        return "Not an array";
    }
    for (let i = 0; i < array.length; i++){
        if(i==2){
            return `The third element is ${array[i]}`;
        }
    }
    return "No third element";
}
console.log(comproveArray(array))









