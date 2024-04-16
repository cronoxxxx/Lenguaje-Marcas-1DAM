function action(){
    document.getElementById('submitButton').addEventListener('click', validate)
}

const validate = () =>{
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    
    const cred ={
        username: username,
        password: password
    };

    fetch("https://informatica.iesquevedo.es/marcas/login", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cred)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response is not ok")
        }
        return response.json()
    })
    .then(data => {
        if (data === true) {
            window.location.href = "main.html" // al main
        } else {
            console.error("Wrong credentials")
        }
    })
    .catch(error => {
        console.error("Error in the fetch", error)
    })
}

action()