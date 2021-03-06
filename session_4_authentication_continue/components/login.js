import { setScreen } from '../app.js';
import { InputGroup } from './input-group.js';
import { Register } from './register.js';

class Login{
    $container;
    $title;
    $inputGroupEmail;
    $inputGroupPassword;
    $form;
    $button;
    $linkToRegister;

    constructor(){
        this.$container = document.createElement('div');
        this.$container.classList.add('center', 'h-screen', 'flex-col');
        this.$title = document.createElement('h3');
        this.$title.innerHTML = 'Login';
        this.$inputGroupEmail = new InputGroup('email', 'Email', 'email');
        this.$inputGroupPassword = new InputGroup('password', 'Password', 'password');
        this.$form = document.createElement('form');
        this.$form.addEventListener('click', this.handleSubmit);
        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.type = 'submit';
        this.$btnSubmit.innerHTML = 'Login';
        this.$linkToRegister = document.createElement('div');
        this.$linkToRegister.classList.add('btn-link');
        this.$linkToRegister.addEventListener('click', this.moveToRegister);
        this.$linkToRegister.innerHTML = ' > Create new account';
    }

    moveToRegister = () => {
        const register = new Register();
        setScreen(register);

    }

    handleSubmit = (evt) =>{
        evt.preventDefault();
        const email = this.$inputGroupEmail.getInputValue();
        const password = this.$inputGroupPassword.getInputValue();

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userInfo)=>{
            console.log(userInfo);
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    render(){
        this.$form.appendChild(this.$inputGroupEmail.render());
        this.$form.appendChild(this.$inputGroupPassword.render());
        this.$form.appendChild(this.$btnSubmit);

        this.$container.appendChild(this.$title);
        this.$container.appendChild(this.$form);
        this.$container.appendChild(this.$linkToRegister);
        return this.$container;
    }
}

export { Login };