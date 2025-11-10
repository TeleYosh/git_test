let value = '0';

// display
const display = document.querySelector('.display');
function updateDisplay(value) {
    display.textContent = parseInt(value, 10);
}
updateDisplay(value);

// number buttons
const numberButtons = document.querySelectorAll('.num');
numberButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        // add limit to number of digits
        value += button.textContent;
        updateDisplay(value);
    })
})

// AC button
const acButton = document.querySelector('#AC');
acButton.addEventListener('click', () => {
    value = '0';
    updateDisplay(value);
})

// operations buttons
function add(a, b) {
    // takes string, returns int
    return parseInt(a)+parseInt(b)
}
function multiply(a, b) {
    return parseInt(a)*parseInt(b)
}