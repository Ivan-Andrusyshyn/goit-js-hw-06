const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
span.textContent = 'Anonymous'
input.addEventListener('input',()=>{
    span.textContent = input.value
})