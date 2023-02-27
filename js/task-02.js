const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
let item = ingredients.forEach((el,i)=>{
let f = document.createElement('li')
f.classList.add('item')
f.textContent = el;
  list.append(f)
})
