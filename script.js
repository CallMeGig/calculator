// page setup
const buttonBox = document.querySelector('#buttonBox');
const calcSymbols = [0,1,2,3,4,5,6,7,8,9,'/','*','-','+','clr'];

const buttons = calcSymbols.map((symbol) => {
    let button = document.createElement('button');
    button.textContent = symbol;
    buttonBox.appendChild(button);
    return button;
})

console.log('hello');
