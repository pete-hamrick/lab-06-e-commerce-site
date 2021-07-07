// import data(both cart and vegetables), DOM generation function, and any needed utility functions
// locate the tbody element where your line items will go
// loop through your data
// Create a variable based on the current array index.
// Use your findById function to find the corresponding product for this line item
// Pass these to your DOM generation function and capture result in variable
// Append to the table body (tbody)

import vegetables from '../data/vegetables.js';
import cart from '../data/cart.js';
import { renderTableRow, calcItemTotal, toUSD, findById } from '../utils.js';

const tableBody = document.getElementById('table-body');

// loop through each item in cart
// find its associated fruit using findById
// get its <tr> using renderTableRow
// append <tr> to the tableBody element

for (let item of cart) {
    const veg = findById(vegetables, item.id);
    const tr = renderTableRow(veg, item);
    tableBody.appendChild(tr);
}

const orderTotal = document.getElementById('order-total');
const total = calcItemTotal(vegetables, cart);
orderTotal.textContent = toUSD(total);