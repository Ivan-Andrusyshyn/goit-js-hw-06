const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector('.gallery')

const img = images.map((el)=>
  `<li class="list-item"> 
  <img src="${el.url}" alt="${el.alt}"></li>`

).join('')
list.insertAdjacentHTML( "beforeend", img);



// const list = document.querySelector('#ingredients')
// let f = [];
// const items = ingredients.map((el)=>{
//   const fruits = el;
//  const liEl =  document.createElement('li')
//  liEl.classList.add('item')
//  liEl.textContent = el
//  f.push(liEl)
// }
// )
// list.append(...f)
