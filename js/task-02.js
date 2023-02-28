const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector('#ingredients')
let f = [];
const items = ingredients.map((el)=>{
  const fruits = el;
 const liEl =  document.createElement('li')
 liEl.classList.add('item')
 liEl.textContent = el
 f.push(liEl)
}
)
list.append(...f)








