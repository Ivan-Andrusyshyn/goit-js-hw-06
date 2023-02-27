// const input = document.querySelector('#validation-input')

// input.addEventListener('input',() => {
// input.classList.toggle('valid',
// input.value.length>= 6)
// input.classList.toggle('invalid',
// input.value.length > 6 ||input.value.length < 6 )
// })
const span = document.querySelector('#text')
const input = document.querySelector('#font-size-control')
input.addEventListener('input',(event)=>{
span.style.fontSize = `${event.target.value}px`;
})

