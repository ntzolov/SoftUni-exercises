import { html } from '../lib.js';
import { register } from '../services/authService.js';

const registerTemplate = (registerHandler) => html`
  <section id="register">
    <div class="form">
      <h2>Register</h2>
      <form class="register-form" @submit=${registerHandler}>
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
  ctx.render(registerTemplate(registerHandler));

  async function registerHandler(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
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
    ctx.updateNav();
    ctx.page.redirect('/');
  }
}
