// your JavaScript file

function addItem(e, item) {
    const ul = document.querySelector('ul');
    ul.innerHTML = `<li>${item}</li>`;

}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textValue = form.elements.text.value;
    addItem(e, textValue);
});
