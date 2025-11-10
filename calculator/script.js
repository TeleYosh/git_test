let a = '0';
let b = '0';

// display
const display = document.querySelector('.display');
function updateDisplay(value) {
    display.textContent = parseInt(value, 10); // to remove leading zeros
}
updateDisplay(a);

// upper display
const upperDisplay = document.querySelector('.upper-display');
function updateUpperDisplay(value) {
    if (value != '0') {
        upperDisplay.textContent = parseInt(value, 10);
    }
    else {
        upperDisplay.textContent = ''
    }
}

// number buttons
const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // add limit to number of digits
        a += button.textContent;
        updateDisplay(a);
    })
})

// AC button
const acButton = document.querySelector('#AC');
acButton.addEventListener('click', () => {
    a = '0';
    b = '0';
    updateDisplay(a);
    updateUpperDisplay(b);
})

// operations buttons
function add(a, b) {
    // takes string, returns int
    return parseInt(a)+parseInt(b);
}
function substract(a, b) {
    return add(a, '-'+b);
}
function multiply(a, b) {
    return parseInt(a)*parseInt(b);
}
function divide(a, b) {
    return parseInt(a)/parseInt(b);
}

const symbol2op = new Map([
    ['+', add],
    ['-', substract],
    ['x', multiply],
    ['÷', divide]
])

let currentOp;

const opButtons = document.querySelectorAll('.op');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operation = button.textContent;
        if (operation == '+') {
            b = add(a, b).toString();
            a = '0';
            currentOp = '+';
        }
        else if (operation == '-') {
            if (b == '0') {
                b = a ;
                a = '0';
            }
            else {
            b = substract(b, a);
            a = '0';
            }
            currentOp = '-';
        }
        updateDisplay(a);
        updateUpperDisplay(b);
    })
})

// equal button
const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    a = symbol2op.get(currentOp)(b, a).toString();
    b = '0';
    updateDisplay(a);
    updateUpperDisplay(b);
})