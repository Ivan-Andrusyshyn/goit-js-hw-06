function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const allRef = {
  btnCreat: document.querySelector('button[data-create]'),
  btnDestroy: document.querySelector('button[data-destroy]'),
  input : document.querySelector('input[type="number"]'),
   div : document.querySelector('#boxes')
}




allRef.btnCreat.addEventListener('click',getValue)
allRef.btnDestroy.addEventListener('click',destroyBoxes)
let count = 0;
  
function getValue(){
  createBoxes(allRef.input.value)
  }
  function createBoxes(amount){
    for(let i = 1;i<=amount;i++){
      let size = 30;
      count+=10;
    let f = document.createElement('div') 
      f.style.backgroundColor = getRandomHexColor(),
       f.style.width = `${size+count}px`,
       f.style.height = `${size+count}px`
       allRef.div.append(f)
    }
    count = 0
  }
function destroyBoxes(){
allRef.div.innerHTML = '';
count = 0
}




