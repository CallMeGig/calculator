// page setup

const BUTTONBOX = document.querySelector('#buttonBox');
const SYMBOLS = [1,2,3,'+',4,5,6,'-',7,8,9,'*',0,'=','clr','/'];
const OPERATORS = SYMBOLS.filter((symbol) => {
    if ((typeof symbol !== "number") && (symbol != "clr")) {
        return symbol;
    }
})

const DISPLAYBOX = document.querySelector('#display');
let displayText = "";
let num1;
let num1String = '';
let operator = '';
let operatorString = '';
let num2;
let num2String = '';
let result;

console.log(OPERATORS);

SYMBOLS.map((symbol) => {
    let button = document.createElement('button');
    button.textContent = symbol;
    BUTTONBOX.appendChild(button);
    button.addEventListener('click', onBtnClick);
})

function onBtnClick(event) {
    let btn = event.target;
    let text = btn.textContent;

    checkSymbol(text);


    console.log('num1String');
    console.log(num1String);
    console.log('num1');
    console.log(num1);
    console.log('operatorString');
    console.log(operatorString);
    console.log('operator');
    console.log(operator);
    console.log('num2String');
    console.log(num2String);
    console.log('num2');
    console.log(num2);

}

function addToDisplay(text) {
    displayText = displayText + text;
    console.log('displayText');
    console.log(displayText);
    DISPLAYBOX.textContent = displayText;
}

function clearDisplay() {
    DISPLAYBOX.textContent = '';
    displayText = '';
    operatorString = '';
    num1String = '';
    num2String = '';

}
function ensureOneOperator(text) {
    let last = displayText.slice(-1);
    if (OPERATORS.includes(last)) {
        displayText = displayText.slice(0,-1);
    }
    operatorString = text
}

function checkSymbol(text) {
    if (text === 'clr') {
        clearDisplay()
    } else if (OPERATORS.includes(text)) {
        num1String === '' ? num1 = undefined : num1 = Number(num1String);
        operatorString.length == 0 ? operatorString = text : ensureOneOperator(text);

    } else { //numbers
        if (num1 === undefined) {
            num1String += text;
        } else {
            num2String += text;

        }
    }

    if (text !== 'clr') {
        addToDisplay(text);
    }

}


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
