import vegetables from '../data/vegetables.js';
import { renderTableRow, calcOrderTotal, toUSD, findById, getCart, clearCart } from '../utils.js';

const tableBody = document.getElementById('table-body');
function renderCart(){
    const cart = getCart();
    for (let item of cart) {
        const vegItem = findById(vegetables, item.id);
        const tr = renderTableRow(vegItem, item);
        tableBody.appendChild(tr);
    }
    if (cart.length === 0){
        tableBody.innerHTML = '';
    }
    const totalDom = document.getElementById('order-total');
    const total = calcOrderTotal(vegetables, cart);
    totalDom.textContent = toUSD(total);
}
renderCart();

const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', ()=> {
    clearCart();
    location.reload();
});

const placeOrder = document.querySelector('#place-order');
const currentCart = getCart();
if (getCart === 0) {
    placeOrder.disabled = true;
} else {
    placeOrder.addEventListener('click', () => {
    // display an alert with the contents of the cart
        alert(JSON.stringify(currentCart, true, 2));
    // remove the cart from local storage
        clearCart();
    // redirect the user back to the home page
        location.href = '../index.html';
    });
}