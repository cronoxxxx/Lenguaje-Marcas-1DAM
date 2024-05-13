function action (){
    document.getElementById('getStringValue').addEventListener('click',valueString)
}

function valueString (){
    let stringValue = document.getElementById('stringValue').value
    if (stringValue.length>0 ){
        if (stringValue.length>10){
            let madeSubString = stringValue.substring(1,4)
            document.getElementById('textValue').innerText= "The first 4 characters of the string are " + madeSubString

        } else {
            document.getElementById('textValue').innerText = "Length of the string " + stringValue.length
        }
    }
}

action()