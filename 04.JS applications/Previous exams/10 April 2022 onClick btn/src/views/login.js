import { html } from '../../node_modules/lit-html/lit-html.js';
import { login } from '../data/auth.js';
import { getFormData } from '../util.js';

const loginTemplate = (onLogin) => html`
  <section id="login-page" class="auth">
    <form id="login" @submit=${onLogin}>
      <h1 class="title">Login</h1>

      <article class="input-group">
        <label for="login-email">Email:</label>
        <input type="email" id="login-email" name="email" />
      </article>

      <article class="input-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" />
      </article>

      <input type="submit" class="btn submit-btn" value="Log In" />
    </form>
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
