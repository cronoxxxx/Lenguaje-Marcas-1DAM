document.addEventListener("DOMContentLoaded",whole)


function whole(){
   let image = document.getElementById('prueba')
   const cambiarFuenteImagen = (newSource) => image.src = newSource
   
   const onMouseOver = () => cambiarFuenteImagen('p1.jpg')
   const onMouseOut = () => cambiarFuenteImagen('p2.jpg')

   //añadir propiedades
   image.addEventListener("mouseover",onMouseOver)
   image.addEventListener ("mouseout",onMouseOut)
}


