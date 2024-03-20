// Constantes
const textboxName = document.getElementById('name');
const pName = document.getElementById('warning-name');
const ageInput = document.getElementById('age');
const pName2 = document.getElementById('warning-name2');
const emailInput = document.getElementById('email');
const pName3 = document.getElementById('warning-name3');


function initializeEvents () {
    textboxName.addEventListener("focusout", comprobarNombre);
    ageInput.addEventListener("focusout", comprobarEdad);
    emailInput.addEventListener("keyup", comprobarEmail);
};



const comprobarNombre = () => {
    let texto = textboxName.value;
    if (texto.length < 2 || texto.length > 25) {
        textboxName.style.backgroundColor = "#E65252";
        pName.innerHTML = "El valor tiene que tener entre 2 y 25 caracteres";                                                                                                                                  
    } else {
        textboxName.style.backgroundColor = "white";
        pName.innerHTML = "";
        textboxName.value = texto.toUpperCase();
    }
};

const comprobarEdad = () => {
    let age = ageInput.value;
    if (age.length < 2 || age.length > 25) {
        ageInput.style.backgroundColor = "red";
        pName2.innerHTML = "El valor tiene que tener entre 2 y 25 caracteres";
    } else {
        ageInput.style.backgroundColor = "white";
        pName2.innerHTML = " ";
        ageInput.value = ageInput.value.toUpperCase();
    }
};

const comprobarEmail = () => {
    if (emailInput.value.length < 2 || emailInput.value.length > 25) {
        emailInput.style.backgroundColor = "red";
        pName3.innerHTML = "No se acepta esa longitud de caracter";
    } else {
        emailInput.style.backgroundColor = "white";
        pName3.innerHTML = " ";
        emailInput.value = emailInput.value.toUpperCase();
    }
};


// Obtener elementos del DOM

// Inicializar eventos
initializeEvents();