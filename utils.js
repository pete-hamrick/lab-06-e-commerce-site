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

export function calcItemTotal(vegetables, cart){
    let itemTotal = 0;

    // loop through cart items
    // get the veggies that are in the cart
    // sum up the qty * price
    // return itemTotal
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
    const total = vegItem.price * cartItem.qty;
    tdTotal.textContent = toUSD(total);
    tr.appendChild(tdTotal);

    return tr;

}