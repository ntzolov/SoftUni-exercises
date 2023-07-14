import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../services/auth.js';

const registerTemplate = (onRegister) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="login-form" @submit=${onRegister}>
        <input type="text" name="email" id="register-email" placeholder="email" />
        <input type="password" name="password" id="register-password" placeholder="password" />
        <input type="password" name="re-password" id="repeat-password" placeholder="repeat password" />
        <button type="submit">register</button>
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

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();
    const rePass = formData.get('re-password').trim();

    if (email === '' || password === '' || rePass === '') {
      return alert('All fields required!');
    }

    if (password !== rePass) {
      return alert("Password don't match!");
    }

    await register(email, password);
    ctx.page.redirect('/dashboard');
  }
}
