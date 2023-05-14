const display = document.querySelector('#display');
const btnDecrease = document.querySelector('#btnDecrease');
const btnReset = document.querySelector('#btnReset');
const btnIncrement = document.querySelector('#btnIncrement');

let counter = 0;

btnDecrease.addEventListener('click', ()=> {
    display.textContent = counter--;
})
btnReset.addEventListener('click', ()=> {
    counter = 0;
    display.textContent = counter;
})
btnIncrement.addEventListener('click', ()=> {
    display.textContent = counter++;
})