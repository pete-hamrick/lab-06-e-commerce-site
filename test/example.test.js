// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { renderVegetables } from '../vegetable-render.js';

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
