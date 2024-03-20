


let image = document.getElementById('prueba');


function whole() {
   //añadir propiedades
   image.addEventListener("mouseover", onMouseOver);
   image.addEventListener("mouseout", onMouseOut);
}

const cambiarFuenteImagen = (newSource) => image.src = newSource;
const onMouseOver = () => cambiarFuenteImagen('p1.jpg');
const onMouseOut = () => cambiarFuenteImagen('p2.jpg');

whole();