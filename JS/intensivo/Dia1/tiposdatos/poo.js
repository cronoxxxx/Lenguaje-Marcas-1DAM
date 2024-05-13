/**Clase 22 -------Prototipos-------- */

class Persona{
    constructor(nombre = "Adrian", apellido = "Saavedra"){
        this.nombre = nombre
        this.apellido = apellido
    }

    
    saludar(){
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }
    miNombreEs(){
        console.log(`Mi nombre es ${this.nombre} ${this.apellido}`)
    }
}


    //otra forma de hacerlo
    const persona = new Persona("John","Doe")
    persona.saludar()
    console.log(persona)


    function Animal (nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    

    Animal.prototype.sonar = function(){
        console.log(`${this.nombre} hace sonidos`)
    }
    const animal = new Animal("Perro","Mamifero")
    const animal2 = new Animal("Gato","Mamifero")
    animal.sonar()
    animal2.sonar()
    console.log (animal.nombre, animal.tipo)
    console.log (animal2.nombre, animal2.tipo)



    /**Clase 23 -------Herencia Prototipica-------- */

   function Perro (nombre, tipo,tamano){
    this.super = Animal
    this.super (nombre,tipo)
    this.tamano = tamano
   }
   Perro.prototype = new Animal()
   Perro.prototype.constructor = Perro
   //Sobreescritura
   Perro.prototype.sonar = function(){
    console.log(`${this.nombre} hace guau guau`)
   }

   Perro.prototype.ladrar = function(){
    console.log(`${this.nombre} ladra`)
   }

   const Doggy = new Perro("Perro","Mamifero","Grande")
   Doggy.ladrar()
   Doggy.nombre = "John"
   Doggy.ladrar()
   Doggy.sonar()
   console.log(Doggy.tamano)

   /**Clase 24 -------Herencia Constructora-------- */

   class Figura {
    constructor (lado){
        this.lado = lado
    }
    area (){
        return -1
    }

     
   }

   const fig = new Figura(5)
   console.log(fig)

   class Cuadrado extends Figura{
    constructor (lado,tipo){
        super(lado)
        this.tipo = tipo
        
    }
    area (){
        return this.lado * this.lado
    }

    static desc (){
        console.log ("El cuadrado es una figura")
    }
   }

   Cuadrado.desc() //estatico
   const cuadrado2 = new Cuadrado(5,"grande")
   console.log(cuadrado2)
   console.log(cuadrado2.area())


   /**Clase 25 -------Getters & Setters-------- */

   class Persona2 {
    constructor (nombre, apellido){
        this.nombre = nombre
        this.apellido = apellido
    }
    get getNombre(){
        return this.nombre
    }
    set setNombre(n){
        this.nombre = n
    }

    toString (){
        return `${this.getNombre} ${this.apellido}`
    }
   }

   const persona2 = new Persona2("Adrian","Saavedra")
   console.log(persona2.getNombre)
   persona2.setNombre="John"
   console.log(persona2.getNombre)
   
console.log (persona2.toString())
   
    






