// PSEUDO CODE
// I need to design a list that will generically refer to my vegetables
// The list will have a title, image and a button to add it to the cart
// The list will have a product id, name, image, description, category, and price

const carrots = {
    id: 'carrots',
    name: 'Carrots',
    image: 'carrots.jpg',
    description: 'orange, and crunchy',
    category: 'root',
    price: 0.50
};

const radishes = {
    id: 'radishes',
    name: 'Radishes',
    image: 'radishes.jpg',
    description: 'small, spicy and crunchy',
    category: 'root',
    price: 0.25
};

const kale = {
    id: 'kale',
    name: 'Kale',
    image: 'kale.jpg',
    description: 'leafy green, nutrient rich',
    category: 'greens',
    price: 3.00
};

const onions = {
    id: 'onions',
    name: 'Onions',
    image: 'onions.jpg',
    description: 'aromatic that adds flavor to dishes when cooked',
    category: 'aromatic',
    price: 1.50
};

const broccoli = {
    id: 'broccoli',
    name: 'Broccoli',
    image: 'broccoli.jpg',
    description: 'best sauteed, roasted, or steamed. Nutritious and flavorful',
    category: 'floret',
    price: 2.50
};

const cabbage = {
    id: 'cabbage',
    name: 'Cabbage',
    image: 'cabbage.jpg',
    description: 'Green that cooks well or can be eaten raw',
    category: 'green',
    price: 1.25
};

const vegetables = [
    carrots,
    radishes,
    kale,
    onions,
    broccoli,
    cabbage
];


export default vegetables;
