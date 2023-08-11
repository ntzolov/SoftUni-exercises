import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { getFormData } from '../util.js';

const registerTemplate = (onRegister) => html`
  <section id="register-page" class="auth">
    <form id="register" @submit=${onRegister}>
      <h1 class="title">Register</h1>

      <article class="input-group">
        <label for="register-email">Email:</label>
        <input type="email" id="register-email" name="email" />
      </article>

      <article class="input-group">
        <label for="register-password">Password:</label>
        <input type="password" id="register-password" name="password" />
      </article>

      <article class="input-group">
        <label for="repeat-password">Repeat Password:</label>
        <input type="password" id="repeat-password" name="repeatPassword" />
      </article>

      <input type="submit" class="btn submit-btn" value="Register" />
    </form>
  </section>
`;

export function registerView(ctx) {
  ctx.render(registerTemplate(onRegister));

  async function onRegister(e) {
    e.preventDefault();

    try {
      const { email, password, repeatPassword } = getFormData();

      if (password !== repeatPassword) {
        throw new Error("Password don't match");
      }

      await register(email, password);
      ctx.page.redirect('/');
    } catch (error) {
      return alert(error.message);
    }
  }
}
