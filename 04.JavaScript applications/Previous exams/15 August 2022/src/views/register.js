import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';
import { getFormData } from '../util.js';

const registerTemplate = (onRegister) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="login-form" @submit=${onRegister}>
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">login</button>
        <p class="message">
          Already registered?
          <a href="#">Login</a>
        </p>
      </form>
    </div>
  </section>
`;

export function registerView(ctx) {
  ctx.render(registerTemplate(onRegister));

  async function onRegister(e) {
    e.preventDefault();

    try {
      const data = getFormData();
      const { email, password } = data;
      const rePass = data['re-password'];

      if (password !== rePass) {
        throw new Error("Password don't match!");
      }

      await register(email, password);
      ctx.page.redirect('/dashboard');
    } catch (error) {
      return alert(error.message);
    }
  }
}
