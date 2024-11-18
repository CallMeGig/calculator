// page setup

const BUTTONBOX = document.querySelector('#buttonBox');
const SYMBOLS = [1,2,3,'+',4,5,6,'-',7,8,9,'x',0,'=','clr','/'];
const OPERATORS = SYMBOLS.filter((symbol) => {
    if ((typeof symbol !== "number") && (symbol != "clr")) {
        return symbol;
    }
})

const DISPLAYBOX = document.querySelector('#display');
const DISPLAYLIMIT = 9;
const MSGDIVZERO = 'N00B';

let displayText = "0";
let num1;
let num1String = '';
let operator = '';
let operatorString = '';
let num2;
let num2String = '';
let result = 0;

SYMBOLS.map((symbol) => {
    // create a button with a listener to each symbol mapped in array SYMBOLS
    let button = document.createElement('button');
    button.textContent = symbol;
    BUTTONBOX.appendChild(button);
    button.addEventListener('click', onBtnClick);
})

updateDisplay();



function onBtnClick(event) {
    let btn = event.target;
    let text = btn.textContent;

    checkSymbol(text);
}

function getDisplayText() {
    // Returns the result or the current number a user is working on once defined

    let text;

    if (num2String != '') {
        text = num2String;
    } else if (num1String != '') {
        text = num1String;
    } else if (result != undefined) {
        text = String(result);
    }

    return limitTextLength(text);
}

function limitTextLength(text) {
    text = String(text);
    hasPeriod = text.includes('.');
    if (text.length > DISPLAYLIMIT && !hasPeriod) {
        return text.slice(0,1) + "." + text.slice(1,4) + 'e+' + (text.length - 1);
    }
    if (hasPeriod) {
        return Number(text).toPrecision(6);
    }
    return text;
}

function updateDisplay() {

    displayText = getDisplayText();
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

function setNum1() {
    if (num1String !== '') {
        num1 = Number(num1String);
    }
}

function setFirstOperator(text) {
    if (num1 !== undefined) {
        operatorString = text;
    } else if (num1 == undefined) {
        operatorString = '';
        displayText = '';
    }
}

function setNum2() {
    if (num2String !== '') {
        //num2String > 6
        num2 = Number(num2String);
    }
}

function getResult(text) {
    setNum2();
    operate(operator, num1, num2);
    clearDisplay();
    updateDisplay();
    //num1String = result;
    //setNum1();

    //displayText = String(num1);
    if (text !== '=') {
        setFirstOperator(text);
    }
}

function checkSymbol(text) {
    if (text === 'clr') {
        clearDisplay()
    } else if (OPERATORS.includes(text)) {
        // check if num1 is defined
        num1String == '' ? num1String = String(result): num1String;
        setNum1();
        operator === '' ? setFirstOperator(text) : getResult(text);
    } else { //numbers
        if (num1 === undefined) {
            num1String.length < DISPLAYLIMIT ? num1String += text: num1String = num1String;
        } else {
            num2String.length < DISPLAYLIMIT ? num2String += text: num2String = num2String;
            //num2String += text;

            operator == '' ? operator = operatorString : operate(operator,Number(num1String),Number(num2String));

        }
    }

    if (text !== 'clr' && num1String !== '') {
        updateDisplay();
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
    if (b === 0) {
        return MSGDIVZERO;
    } else {
        return a / b;
    }
}
