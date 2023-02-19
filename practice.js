
//<=================================================================================>

"use strict";

let display = document.getElementById('calculator');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
        button.addEventListener('click', (e) => {
            switch(e.target.innerText){
                case 'C':
                    calculator.innerText = '';
                    break;
                case '←':
                    if(calculator.innerText){
                        calculator.innerText = calculator.innerText.slice(0, -1)
                    }
                    break;
                case '=':
                   try{
                    calculator.innerText = eval(calculator.innerText);
                   } 
                   catch{
                       calculator.innerText = 'Syntax Error!';
                   }
                    break;   
                default:
                    calculator.innerText += e.target.innerText;
            }
        });
    });


//<====================================================================================>

