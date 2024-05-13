function getInfo (){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.getElementById('tablebody')
        data.forEach(user => {
            const row = document.createElement('tr')
            row.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `
            tableBody.appendChild(row)
        }
    )
})
}

getInfo()

