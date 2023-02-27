const incrBrn = document.querySelector('button[data-action="increment"]')
const decrBrn =  document.querySelector('button[data-action="decrement"]')
const value = document.querySelector('#value')

let counterValue = 0
incrBrn.addEventListener( "click",()=> {
    counterValue++
    value.textContent = counterValue
})
decrBrn.addEventListener("click",()=> {
    counterValue--
    value.textContent = counterValue
})