import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';

const loginTemplate = (onLogin) => html`
  <section id="login-page" class="auth">
    <form id="login" @submit=${onLogin}>
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" class="btn submit" value="Login" />
        <p class="field">
          <span>
            If you don't have profile click
            <a href="#">here</a>
          </span>
        </p>
      </div>
    </form>
  </section>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onLogin));

  async function onLogin(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(document.querySelector('form')));
    const { email, password } = data;

    if ([email, password].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    await login(email, password);
    ctx.page.redirect('/');
  }
}
