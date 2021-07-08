import vegetables from '../data/vegetables.js';
import { renderTableRow, calcOrderTotal, toUSD, findById, getCart } from '../utils.js';

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

