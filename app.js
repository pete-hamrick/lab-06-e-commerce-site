import vegetables from './data/vegetables.js';
import { addItemToCart } from './utils.js';
import { renderVegetables } from './vegetable-render.js';
// import { addItemToCart } from './utils.js';

const vegetableUL = document.getElementById('vegetables');

for (let vegetable of vegetables) {
    const vegetableLI = renderVegetables(vegetable);
    vegetableUL.appendChild(vegetableLI);
}

// add event listener to each button with class "add"
// retrieve the existing shopping cart from localStorage
//      if there is no cart in data in localStorage use an empty array: []
//      if there is cart data in localStorage, turn into array using JSON.parse
// Check if the shopping cart already has the line item for this product. You can reuse your findById function for this task.
//      if it does exist, increment the quantity.
//      if it does not exist, create a new line item with the following format
    // const lineItem = {
    //     id: <product-id>,
    //     qty: 1
    // };
// Save the modified cart array back to localStorage, remembering to serialize with JSON.stringify before saving.
const addButtons = document.querySelectorAll('.add');
for (let button of addButtons) {
    button.addEventListener('click', (e)=>{
        addItemToCart(e.target.value);
    });
}