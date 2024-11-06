// page setup

const buttonBox = document.querySelector('#buttonBox');
const SYMBOLS = [1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'clr','','/'];

const displayBox = document.querySelector('#display');
let displayText = "";


SYMBOLS.map((symbol) => {
    let button = document.createElement('button');
    button.textContent = symbol;
    buttonBox.appendChild(button);
    button.addEventListener('click', onBtnClick);
})

function onBtnClick(event) {
    let btn = event.target;
    let text = btn.textContent;
    addToDisplay(text);
}

function addToDisplay(text) {
    displayText = displayText + text;
    displayBox.textContent = displayText;
}

let num1;
let operator;
let num2;
let result;

// helper

function getNum1() {
    return num1;
}

function setNum1(num) {
    num1 = num;
}

function getNum2() {
    return num2;
}

function setNum2(num) {
    num2 = num;
}

function getOperator() {
    return operator;
}

function setOperator(sign) {
    operator = sign;
}

// calculator functions


// operate
function operate(operator, num1, num2) {

    switch (operator) {
        case '+':
            result = add(num1,num2);
            break;
        case '-':
            result = subtract(num1,num2);
            break;
        case '*':
            result = multiply(num1,num2);
            break;
        case '/':
            result = divide(num1,num2);
            break;
    }


}

// add
function add(a,b) {
    return a + b;
}

// subtract
function subtract(a,b) {
    return a - b;
}

// multiply
function multiply(a,b) {
    return a * b;
}

// divide
function divide(a,b) {
    return a / b;
}
