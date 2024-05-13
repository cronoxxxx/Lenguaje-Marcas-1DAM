
    document.getElementById("submitButton").addEventListener("click", validate)


function validate(){

    let username = document.getElementById("username").value //coge los valores de los inputs
    let password = document.getElementById("password").value

    let cred = { //crea un objeto con los valores
        username: username,
        password: password
    }

    fetch ("https://informatica.iesquevedo.es/marcas/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cred) //convierte el objeto en un string y lo envia
    })
    .then(response =>{
        if (!response.ok){ //comprueba si la respuesta es correcta
            throw new Error("Network response ain't ok")
        }
        return response.json() //convierte la respuesta en un objeto json
    })
    .then(data =>{
        if (data===true){
            window.location.href = "main.html" //redirige a la nueva pagina
        }
        else{
            document.getElementById("errorUsername").innerHTML = "Wrong username"
            document.getElementById("errorPassword").innerHTML = "Wrong password"
        }
            
    })
}



