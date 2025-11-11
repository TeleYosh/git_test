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
function modulo(a, b) {
    return parseInt(a)%parseInt(b);
}

const symbol2op = new Map([
    ['+', add],
    ['-', substract],
    ['x', multiply],
    ['÷', divide],
    ['%', modulo]
])

let previousOp;

const opButtons = document.querySelectorAll('.op:not(#equal)');
opButtons.forEach((button) => {
    button.addEventListener('click', () => {
        operation = button.textContent;
        if (previousOp) {
            b = symbol2op.get(previousOp)(b, a).toString();
        }
        else {
            b = a;
        }
        a = '0';
        previousOp = operation;
        updateDisplay(a);
        updateUpperDisplay(b);
    })
})

// plus-minus button
const pmButton = document.querySelector('#plus-minus');
pmButton.addEventListener('click', () => {
    int_val = parseInt(a, 10)
    a = -int_val.toString();
    updateDisplay(a);
})

// equal button
const equalButton = document.querySelector('#equal');
equalButton.addEventListener('click', () => {
    if (previousOp) {
        a = symbol2op.get(previousOp)(b, a).toString();
    }
    b = '0';
    previousOp = '';
    updateDisplay(a);
    updateUpperDisplay(b);
})

// secret combination
const secretSequence = ['5', '6', '-', 'x'];
let inputSequence = [];

const buttonsContainer = document.querySelector('.buttons').addEventListener(
    'click', async (e) => {
        const clickedButton = e.target;
        const val = clickedButton.textContent.trim();
        inputSequence.push(val);
        if (inputSequence.length > secretSequence.length) {
            inputSequence.shift();
        }
        if (inputSequence.join('') === secretSequence.join('')) {
            inputSequence = [];
            await loadSecretApp();
        }
    }
)
async function loadSecretApp() {
    try {
        // load html
        const response = await fetch('secret/secret.html');
        const html = await response.text();
        const calContainer = document.querySelector('.container');
        calContainer.innerHTML = html;

        // load css 
        const secretCSS = document.createElement('Link');
        secretCSS.rel = 'stylesheet';
        secretCSS.href = 'secret/secret.css';
        document.head.appendChild(secretCSS);

        // load js
        const secretScript = document.createElement('script');
        secretScript.src = 'secret/secret.js';
        document.head.appendChild(secretScript);

    } catch (err) {
        console.error('Failed to load secret app:', err);
    }
}