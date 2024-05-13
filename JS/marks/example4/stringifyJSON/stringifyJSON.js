function action(){
    document.getElementById('getStringValue').addEventListener('click', valueString)
}

function valueString(){
    let string1 = document.getElementById('stringifyJSON1').value
    let string2 = document.getElementById('stringifyJSON2').value
    let string3 = document.getElementById('stringifyJSON3').value
    
    if (!isNaN(string1) || !isNaN(string2) || !isNaN(string3)) {
        document.getElementById('textValue').innerText = "Please enter strings only"
        return
    }
    
    let string = [string1, string2, string3]
    
    if (string.length > 0 && typeof string1 === "string" && typeof string2 === "string" && typeof string3 === "string") {
        document.getElementById('textValue').innerText = typeof string + ": " + JSON.stringify(string)
    } else {
        document.getElementById('textValue').innerText = "Enter a string"
    }
}

action()