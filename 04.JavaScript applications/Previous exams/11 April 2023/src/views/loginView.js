import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../services/auth.js';

const loginTemplate = (onLogin) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${onLogin}>
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">
          Not registered?
          <a href="javascript:void(0)">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onLogin));

  async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const { email, password } = Object.fromEntries(formData);

    if (email === '' || password === '') {
      return alert('All fields are required!');
    }

    await login(email, password);
    ctx.page.redirect('/');
  }
}
