import { login } from "../auth.js";

export function renderLogin() {
  const main = document.querySelector('main');
  main.innerHTML = '';

  document.getElementById('home').classList.remove('active');
  document.getElementById('logout').classList.remove('active');
  document.getElementById('login').classList.add('active');
  document.getElementById('register').classList.remove('active');

  const sectionLogin = document.createElement('section');
  sectionLogin.id = 'login-view';
  sectionLogin.innerHTML = `
  <h2>Login</h2>
  <form id="login">
      <label>Email: <input type="text" name="email"></label>
      <label>Password: <input type="password" name="password"></label>
      <p class="notification"></p>
      <button>Login</button>
  </form>
  `;

  sectionLogin.querySelector('button').addEventListener('click', login);
  main.appendChild(sectionLogin);
}
