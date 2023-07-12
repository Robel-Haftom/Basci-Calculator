const buttonEl  = document.querySelectorAll("button");
const resultEl = document.getElementById("number-display");

for(let index = 0; index < buttonEl.length; index++){
    buttonEl[index].addEventListener("click" , ()=>{
        const buttonValue = buttonEl[index].textContent;
        if(buttonValue == "C"){
            clearResult();
        }
        else if (buttonValue == "="){
            calculateResult();
        }
        else{
            appendValue(buttonValue);
        }
    });
}

function calculateResult(){
    resultEl.value = eval(resultEl.value);
}

function clearResult(){
    resultEl.value ="";
}

function appendValue(buttonValue){
    resultEl.value += buttonValue;
}