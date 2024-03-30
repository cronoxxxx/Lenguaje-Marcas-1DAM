function action() {
    document.getElementById("breset").addEventListener("click", resetForm)
    document.getElementById("bsubmit").addEventListener("click", validate)
}

const validate = (ev) => {
    listErrors = []
    ev.preventDefault()

    validateName()

    validateSurname()

    validateAddress()

    validateEmail()

    validatePassword()

    validateAge()

    validateTerms()

    if (listErrors.length === 0) {
        document.getElementById("iform").submit()
    } else {
        let tbM = document.getElementById("errorInProgram")
        tbM.style.color="red"
        listErrors.forEach(err => { tbM.innerHTML += "<p>" + err + "</p>" })
    }
}

const validateName = () => {
    let name = document.getElementById("name")
    if (name.value.length < 3 || name.value.length > 15) {
    
        return listErrors.push("The name must be between 2 to 15 characters")
    } else{
        
    }
}

const validateSurname = () => {
    let surname = document.getElementById("surname")
    if (surname.value.length < 2 || surname.value.length > 15) {
        return listErrors.push("The username must be between 2 to 15 characters")
    }
}

const validateAddress = () => {
    let address = document.getElementById("address")
    if (address.value.length === 0) {
        return listErrors.push("Please write an address")
    }
}

const validateEmail = () => {
    let email = document.getElementById("email");
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
        return listErrors.push("Enter a valid email")
    }
}

const validatePassword = () => {
    let password = document.getElementById("password");
    let confirmpassword = document.getElementById("confirmpassword");
    if (password.value === "" || confirmpassword.value === "") {
        return listErrors.push("Please fill in both password fields");
    } else if (!/^(?=.*[a-zA-Z])(?=.*\d).{6,}$/.test(password.value)) {
        return listErrors.push("The password should have at least an uppercase, a lowercase, a digit and a minimum of 8 characters");
    } else if (password.value !== confirmpassword.value) {
        return listErrors.push("Password and Confirm password should be the same");
    }
}

const validateAge = () => {
    let dateofbirth = document.getElementById("dateofbirth").value;
    const date = new Date(dateofbirth);
    const today = new Date();
    const age = today - date;
    const age_years = age / 1000 / 60 / 60 / 24 / 365.25
    if (age_years < 18) {
        return listErrors.push("You need to be older than 18 years old")
    }
}

const validateTerms = () => {
    let termsofservice = document.getElementById("termsofservice");
    if (!termsofservice.checked) {
        return listErrors.push("Agree to the terms and conditions")
    }
}

const resetForm = (ev) => {
    ev.preventDefault();
    let answer = confirm("Are you sure that you want to reset all the data?")
    if (answer) {
        document.getElementById("iform").reset();
    }
}

action();
