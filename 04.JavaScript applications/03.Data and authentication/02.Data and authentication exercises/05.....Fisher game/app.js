import { renderHome } from './src/views/home.js';
import { renderLogin } from './src/views/login.js';
import { renderRegister } from './src/views/register.js';

renderHome();

const btnHome = document.getElementById('home');
btnHome.addEventListener('click', renderHome);
const btnRegister = document.getElementById('register');
btnRegister.addEventListener('click', renderRegister);
const btnLogin = document.getElementById('login');
btnLogin.addEventListener('click', renderLogin);
