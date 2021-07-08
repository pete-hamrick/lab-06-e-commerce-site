import vegetables from '../data/vegetables.js';
import cart from '../data/cart.js';
import { renderTableRow, calcOrderTotal, toUSD, findById } from '../utils.js';

const tableBody = document.getElementById('table-body');

for (let item of cart) {
    const vegItem = findById(vegetables, item.id);
    const tr = renderTableRow(vegItem, item);
    tableBody.appendChild(tr);
}

const orderTotal = document.getElementById('order-total');
const total = calcOrderTotal(vegetables, cart);
orderTotal.textContent = toUSD(total);