export function findById(items, id) {
    for (const item of items) {
        if (item.id === id) {
            return item;
        }
    }
}

export function toUSD(number) {
    return number.toLocaleString(
        'en-US', { style: 'currency', currency: 'USD' });
}

export function calcOrderTotal(vegetables, cart){
    let itemTotal = 0;

    for (let item of cart) {
        const vegetable = findById(vegetables, item.id);
        itemTotal += vegetable.price * item.qty;
    }
    return itemTotal;
}

export function renderTableRow(vegItem, cartItem){
    const tr = document.createElement('tr');
    const tdName = document.createElement('td');
    tdName.textContent = vegItem.name;
    tr.appendChild(tdName);

    const tdPrice = document.createElement('td');
    tdPrice.textContent = toUSD(vegItem.price);
    tr.appendChild(tdPrice);

    const tdQty = document.createElement('td');
    tdQty.textContent = cartItem.qty;
    tr.appendChild(tdQty);

    const tdTotal = document.createElement('td');
    const total = calcItemTotal(vegItem, cartItem);
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;

}

export function calcItemTotal(vegItem, cartItem) {
    const itemTotal = vegItem.price * cartItem.qty;
    return toUSD(itemTotal);

}

export const CART = 'cart';
const emptyCart = [];
console.log(emptyCart);
// TODO write getCart function
export function getCart() {
    // get the cart from localstorage
    let stringCart = localStorage.getItem(CART) || '[]';
    // parse it
    const cart = JSON.parse(stringCart);
    // return it
    return cart;
}
// TODO write setCart function
export function setCart() {
    localStorage.setItem(CART, JSON.stringify(CART));
}
// TODO write addItemToCart function
export function addItemToCart(itemId){
    // get the cart from local storage
    const cart = getCart();
    const item = findById(cart, itemId);

    if (item) {
        item.qty += 1;
    } else {
        const newItem = { id: itemId, qty: 1 };
        cart.push(newItem);
    }
    localStorage.setItem(CART, JSON.stringify(cart));
}

export function clearCart() {
    localStorage.removeItem(CART);
}