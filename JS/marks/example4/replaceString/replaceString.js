function action (){
    document.getElementById('replaceString').addEventListener('input',replaceString)
}

function replaceString (){
    let stringValue = document.getElementById('replaceString').value
    document.getElementById('textValue').innerText = stringValue.replace("fail","success")
}

action()