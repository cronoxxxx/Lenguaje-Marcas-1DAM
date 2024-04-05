function action(){
    const button = document.getElementById("submitButton")
    button.addEventListener("click",validate)
}

const validate = (ev) =>{
    ev.preventDefault()

    let errorCount = 0

    errorCount += emailValidation()
    errorCount += passwordValidation()

    if (errorCount === 0) {
        window.location.href = "main.html"
    }


}


const emailValidation = () =>{
    const email = document.getElementById("email")
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        putMessage("Email","Invalid user for email. Please add a valid pattern")
        return 1
    } else{
        delMessage("Email")
        return 0
    }
}

const passwordValidation = () =>{
    const password = document.getElementById("password")
    if (!/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password.value)){
        putMessage("Password","Invalid value for password")
        return 1
    } else{
        delMessage("Password")
        return 0
    }
}



const putMessage = (identi,message) =>{
    document.getElementById("error"+identi).innerHTML=message
    document.getElementById("error"+identi).style.color="red"

}


const delMessage = (identi) =>{
    document.getElementById("error"+identi).innerHTML=" "
}





action()