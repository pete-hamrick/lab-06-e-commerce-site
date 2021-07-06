export function renderVegetables(vegetable){
    const vegetableLI = document.createElement('li');
    const vegetableH3 = document.createElement('h3');
    vegetableH3.textContent = vegetable.name;

    const vegetableImg = document.createElement('img');
    vegetableImg.src = `./assets/${vegetable.image}`;
    vegetableImg.alt = vegetable.name;

    const vegetableSpan = document.createElement('span');
    vegetableSpan.textContent = `$${vegetable.price}`;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';

    vegetableLI.appendChild(vegetableH3);
    vegetableLI.appendChild(vegetableImg);
    vegetableLI.appendChild(vegetableSpan);
    vegetableLI.appendChild(button);

    return vegetableLI;
}