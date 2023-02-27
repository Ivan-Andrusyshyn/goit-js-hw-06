function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const select ={
  btn: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
  body:document.querySelector('body')
}
select.btn.addEventListener('click', () =>{
  select.span.textContent = getRandomHexColor()
  select.body.style.backgroundColor =getRandomHexColor();
})
