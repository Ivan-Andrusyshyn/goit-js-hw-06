const ref = {
    categories : document.querySelectorAll('ul#categories'),
     item : document.querySelectorAll('.item'),
}
console.log('Numbes of categories:', ref.item.length)

 ref.item.forEach((el,i)=>{
  const f = el.querySelector('h2').textContent
  const li = el.querySelectorAll('li')

 if(f){
    console.log('Category:', f)
    console.log('Elements:', li.length)
 }
})

