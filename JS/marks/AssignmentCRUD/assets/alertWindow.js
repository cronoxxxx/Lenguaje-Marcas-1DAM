
function action() {
    const getInfoButtons = document.querySelectorAll(".GetInfoButton")
    const deleteButtons = document.querySelectorAll(".DeleteButton")
    const updateButtons = document.querySelectorAll(".UpdateButton")
    const addButton = document.getElementById("addButton")

    getInfoButtons.forEach(button => {
        button.addEventListener("click", getInfoListener)
    })

    deleteButtons.forEach(button => {
        button.addEventListener("click", deleteListener)
    })

    updateButtons.forEach(button => {
        button.addEventListener("click", updateListener)
    })

    addButton.addEventListener("click",adderListener)
}

const showAlert= (message) =>{
    alert(message)
}

const adderListener = () =>{
    showAlert("The Add button has been clicked")
}


const getInfoListener= () => {
    showAlert("The Get Info button has been clicked")
}

const deleteListener= () => {
    showAlert("The Delete button has been clicked")
}

const updateListener= () => {
    showAlert("The Update button has been clicked")
}

action()