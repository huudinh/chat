import { InputGroup } from "./index_3_input_group.js";

const app = document.getElementById('app');
const usernameInput = new InputGroup('Usernam', 'text');
const passwordInput = new InputGroup('Password', 'text');

app.appendChild(usernameInput.render());
app.appendChild(passwordInput.render());

const btnSubmit = document.createElement('button');
btnSubmit.innerHTML = 'Submit';

btnSubmit.addEventListener('click', ()=>{
    usernameInput.setSuccessMessage('Look good!');
    passwordInput.setErrorMessage('This field cannot be empty!');
});

app.appendChild(btnSubmit)