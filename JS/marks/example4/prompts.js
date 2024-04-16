const calculateResponseTime =()=> {
    
    const startTime = new Date() 

    const answer = prompt("Please answer the question:") 
    const endTime = new Date() 
    const responseTime = (endTime - startTime) / 1000 
    return responseTime
}


function actionPrompt (){
    const responseTime = calculateResponseTime()
    alert("The user took " + responseTime + " seconds to answer the question.")
}

actionPrompt()