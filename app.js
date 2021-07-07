import vegetables from './data/vegetables.js';
import { renderVegetables } from './vegetable-render.js';

const vegetableUL = document.getElementById('vegetables');

for (let vegetable of vegetables) {
    const vegetableLI = renderVegetables(vegetable);
    vegetableUL.appendChild(vegetableLI);
}