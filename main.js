const addTask =() =>{
    if(userInput.value){
        log(userInput);
        localStorage.setItem("task",userInput)

    }else{
        alert("please fill completely")
    }
}