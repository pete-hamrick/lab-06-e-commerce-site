import { findById, calcItemTotal, renderTableRow, calcOrderTotal } from '../utils.js';
import { renderVegetables } from '../vegetable-render.js';
import vegetables from '../data/vegetables.js';

const test = QUnit.test;

test('does this list carrot values', (expect) => {
    const carrotLI = `<li><h3>Carrots</h3><img src="./assets/carrots.jpg" alt="Carrots"><span>$0.5</span><button>Add to Cart</button></li>`;
    const carrot = {
        id: 'carrots',
        name: 'Carrots',
        image: 'carrots.jpg',
        description: 'orange, and crunchy',
        category: 'root',
        price: 0.50
    };
    
    const actual = renderVegetables(carrot);

    expect.equal(actual.outerHTML, carrotLI);
});

test('returns vegetables by their id', expect =>{
    const expected = {
        id: 'carrots',
        name: 'Carrots',
        image: 'carrots.jpg',
        description: 'orange, and crunchy',
        category: 'root',
        price: 0.50
    };

    const actual = findById(vegetables, 'carrots');

    expect.deepEqual(actual, expected);
});

test('calcOrderTotal should return the total amount of the cart', expect => {
    const cart = [
        { id: 'carrots', qty: 4 },
        { id: 'onions', qty: 2 },
        { id: 'broccoli', qty: 3 },
    ]; 
    const data = [{
        id: 'carrots',
        price: 0.50
    },
    {   
        id: 'onions',
        price: 1.50    
    },
    {
        id: 'broccoli',
        price: 2.50
    }];

    const expected = 12.50;
    const actual = calcOrderTotal(data, cart);
    expect.equal(expected, actual);
});

test('renderTableRow should return a <tr> element', expect => {
    const carrot = {
        id: 'carrots',
        name: 'Carrots',
        image: 'carrots.jpg',
        description: 'orange, and crunchy',
        category: 'root',
        price: 0.50
    };
    const carrotCart = { id: 'carrots', qty: 4 };
    const expected = `<tr><td>Carrots</td><td>$0.50</td><td>4</td><td>$2.00</td></tr>`;
    const dom = renderTableRow(carrot, carrotCart);
    const html = dom.outerHTML;
    expect.equal(html, expected);
});

test('tests if calcItemTotal multiplies item and price correctly', expect => {
    const carrotPrice = { id: 'carrots', price: 0.50 };
    const qty = { id: 'carrot', qty: 4 };

    const expected = '$2.00';
    const actual = calcItemTotal(carrotPrice, qty);
    expect.equal(actual, expected);
});