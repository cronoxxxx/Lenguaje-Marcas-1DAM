const elemento = document.getElementById('t-cursos')
const elemento2 = document.getElementById('mensajes')
const elemento3 = document.getElementsByClassName('list') //para class
const padre = document.querySelector('ul') //selecciona elemento
console.log(elemento)
console.log(elemento2)
console.log(elemento3)
console.log(padre)
console.log(padre.childElementCount) //cuenta cuesto elementos esta dentro
console.log(padre.children) //devuelvo los elementos dentro


console.log(padre.children[1])
console.log(padre.firstElementChild)
console.log(padre.lastElementChild)


const abuelo = document.querySelector('ul.listas-cursos > li.list') //argumentos con clase dentro de una clase padre mayor, que en este caso es el div
console.log(abuelo.parentElement.parentElement) //el padre del padre

//ver elementos hermanos
const hermano = document.querySelector('ul.listas-cursos > li.list')
console.log(hermano.nextElementSibling) //el elemento mas cercano de java