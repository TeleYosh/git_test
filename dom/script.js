// your JavaScript file

function addItem(e, item) {
    const ul = document.querySelector('ul');
    ul.innerHTML += `
    <div class='item ${item}'>
        <li>${item}</li>
        <button class='delete'>delete</button>
    </div>
    `;
    const newDeleteBtn = ul.querySelector(`.item.${item} .delete`);
    newDeleteBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });
}

function deleteItem(e, item) {
    const div = document.querySelector(`.${item}, .item`);
    div.innerHTML = '';
}

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const textValue = form.elements.text.value;
    addItem(e, textValue);
    form.elements.text.value = '';
    // const dlt_btn = document.querySelector('.delete');
    // dlt_btn.addEventListener('click', (e) => {
    //     const item = dlt_btn.parentElement.className;
    //     console.log(`item name: ${item.split(' ')[1]}`);
    //     deleteItem(e, item);
    // });
});


