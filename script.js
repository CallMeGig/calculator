// page setup

const buttonBox = document.querySelector('#buttonBox');
const calcSymbols = [0,1,2,3,4,5,6,7,8,9,'/','*','-','+','clr'];

const buttons = calcSymbols.map((symbol) => {
    let button = document.createElement('button');
    button.textContent = symbol;
    buttonBox.appendChild(button);
    return button;
})


// calculator functions

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
