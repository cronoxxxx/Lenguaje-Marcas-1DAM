getInfo()

function getInfo(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error " + response.status);
        }
        return response.json()
    }   
    )
    .then(data => {
        console.log(data)
        let list = document.getElementById('users')
        data.forEach(element => {
            list.innerHTML += `<li>${element.name}</li>`
    })})
    .catch(error => console.log(error))
}