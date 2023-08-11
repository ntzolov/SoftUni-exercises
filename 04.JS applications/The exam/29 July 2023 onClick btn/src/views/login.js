import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { getFormData } from '../util.js';

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
          <a href="/register">Create an account</a>
        </p>
      </form>
    </div>
  </section>
`;

export function loginView(ctx) {
  ctx.render(loginTemplate(onLogin));

  async function onLogin(e) {
    e.preventDefault();

    try {
      const { email, password } = getFormData();

      await login(email, password);
      ctx.page.redirect('/');
    } catch (error) {
      return alert(error.message);
    }
  }
}
