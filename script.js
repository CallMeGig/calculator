// page setup

const BUTTONBOX = document.querySelector('#buttonBox');
const SYMBOLS = [1,2,3,'+',4,5,6,'-',7,8,9,'x',0,'=','clr','/'];
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
let result = 0;

console.log(OPERATORS);

SYMBOLS.map((symbol) => {
    // create a button with a listener to each symbol mapped in array
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
    console.log('result');
    console.log(result);
    console.log('-----');

}

function getDisplayText() {
    let text;

    if (num2String != '') {
        text = num2String;
    } else if (num1String != '') {
        text = num1String;
    } else if (result != undefined) {
        text = String(result);
    } else text = "0";

    return text;
}

function updateDisplay() {
    displayText = getDisplayText()
    DISPLAYBOX.textContent = displayText;
}

function addToDisplay(text) {
    // add text to the current display unless the text is '='
    if (text != '=') {
        displayText = displayText + text;
    }
    console.log('displayText');
    console.log(displayText);
    DISPLAYBOX.textContent = displayText;
}

function resetVariables() {
    displayText = '';
    operatorString = '';
    operator = '';
    num1 = undefined;
    num1String = '';
    num2 = undefined;
    num2String = '';
}

function clearDisplay() {
    DISPLAYBOX.textContent = '';
    resetVariables();

}

function ensureOneOperator(text) {
    // removes the last character from the display text if it is an operator
    let last = displayText.slice(-1);
    if (OPERATORS.includes(last)) {
        displayText = displayText.slice(0,-1);
    }
    // sets operatorString to the provided string
    operatorString = text;
}

function setNum1() {
    if (num1String !== '') {
        num1 = Number(num1String);
    }
}

function setFirstOperator(text) {
    if (num1 !== undefined) {
        operatorString.length == 0 && num2 == undefined ? operatorString = text : ensureOneOperator(text);
    } else if (num1 == undefined) {
        operatorString = '';
        displayText = '';
    }
    console.log('here');
}

function setNum2() {
    if (num2String !== '') {
        num2 = Number(num2String);
    }
}

function getResult(text) {
    setNum2();
    operate(operator, num1, num2);
    clearDisplay();
    num1String = result;
    setNum1();
    displayText = String(num1);
    if (text !== '=') {
        setFirstOperator(text);
    }
}

function checkSymbol(text) {
    if (text === 'clr') {
        clearDisplay()
    } else if (OPERATORS.includes(text)) {
        // check if num1 is defined
        setNum1();
        operator === '' ? setFirstOperator(text) : getResult(text);
    } else { //numbers
        if (num1 === undefined) {
            num1String += text;
        } else {
            num2String += text;

            operator == '' ? operator = operatorString : operate(operator,Number(num1String),Number(num2String));

        }
    }

    if (text !== 'clr' && num1String !== '') {
        updateDisplay(text);
    }
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
        case 'x':
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
