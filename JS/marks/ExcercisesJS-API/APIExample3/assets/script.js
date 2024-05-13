function getInfo () {
fetch('assets/products.json').then((response) => {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response.json()
}).then((data) => {
    data.forEach((product) => {
        let tbody = document.getElementById('bodytable')
        let out = document.createElement('tr')
        out = `
        <tr>
        <td><img src="${product.image}" alt="${product.name}" width="150" height="100"></td>
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>${product.inventory}</td>
        <td>${product.productCode}</td>
        </tr>
        `
        tbody.innerHTML += out

    })
})
}

getInfo()