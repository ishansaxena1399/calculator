function add(num1,operator,num2){
    return num1 + num2;
}

function subtract(num1,operator,num2){
    return num1 - num2;
}

function multiply(num1,operator,num2){
    return num1 * num2;
}

function division(num1,operator,num2){
    return num1 / num2;
}

function operate(num1,operator,num2){
    switch(operator){
        case '+':
            return add(num1,operator,num2);
        case '-':
            return subtract(num1,operator,num2);
        case 'x':
            return multiply(num1,operator,num2);
        case '/':
            return division(num1,operator,num2);
        default:
            return "Error";

    }
}

const display = document.querySelector("h2")

const buttons = document.querySelectorAll("button")
let num1 = 0
let num2 = 0
let op = ''
buttons.forEach(btn=>{
    btn.classList.add("btn"+btn.textContent)
    btn.addEventListener("click",function(e){

        if(btn.textContent=='clear'){
            display.textContent = "0";
            num1=0;
            num2=0;
        } 
        else if(btn.textContent=='='){
            num2 = +display.textContent
            display.textContent = operate(num1,op,num2);
            num1 = +display.textContent
            num2 = 0
        }
        else{
            if(btn.textContent=='+' || btn.textContent=='-' || btn.textContent=='x' || btn.textContent=='/'){
                num1 = +display.textContent
                op = btn.textContent
                display.textContent = op
        }
            else {
                if(display.textContent == '0' && num1===0) {
                    display.textContent = ""
                    display.textContent = display.textContent+=btn.textContent
                } else if(num1===0 && display.textContent!=='0'){
                    display.textContent = display.textContent+=btn.textContent
                } else if(num1!==0){
                    if(display.textContent===op){
                        display.textContent = ""
                        display.textContent = display.textContent+=btn.textContent
                    }
                    else{
                        display.textContent = display.textContent+=btn.textContent
                    }
                }

                }
        }
    })
})
console.log(buttons)