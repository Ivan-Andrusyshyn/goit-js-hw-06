const data = {
  form: document.querySelector('.login-form'),
  inputEmail: document.querySelector('input[type="email"]'),
  inputPass: document.querySelector('input[type="password"]'),
    btn:document.querySelector('button[ type="submit"]')
}
data.form.addEventListener('submit',getSubmit);

function getSubmit(event){
    event.preventDefault();
const formEl = event.currentTarget.elements;
const password = formEl.password.value;
const mail = formEl.email.value;
const formData = {
    mail,password
}
if(password=='' || mail==''){
    return alert('Всі поля мають бути заповнені!')
}
console.log(formData)
event.target.reset()
}



