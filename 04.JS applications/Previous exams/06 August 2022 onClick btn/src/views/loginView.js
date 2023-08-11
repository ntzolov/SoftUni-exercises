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
          <a href="#">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onLogin));

  async function onLogin(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email === '' || password === '') {
      return alert('All fields required!');
    }

    await login(email, password);
    ctx.page.redirect('/dashboard');
  }
}
