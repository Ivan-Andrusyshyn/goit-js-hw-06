const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')
const d = span.textContent = 'Anonymous'
input.addEventListener('input',()=>{
    if( input.value == ''){
        span.textContent = 'Anonymous'
    }else {
        span.textContent = input.value   
    }
})