import { html } from '../../node_modules/lit-html/lit-html.js';
import { register } from '../data/auth.js';

const registerTemplate = (onRegister) => html`
  <section id="register-page" class="content auth">
    <form id="register" @submit=${onRegister}>
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Register</h1>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="maria@email.com" />

        <label for="pass">Password:</label>
        <input type="password" name="password" id="register-password" />

        <label for="con-pass">Confirm Password:</label>
        <input type="password" name="confirm-password" id="confirm-password" />

        <input class="btn submit" type="submit" value="Register" />

        <p class="field">
          <span>
            If you already have profile click
            <a href="#">here</a>
          </span>
        </p>
      </div>
    </form>
  </section>
`;

export function registerView(ctx) {
  ctx.render(registerTemplate(onRegister));

  async function onRegister(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(document.querySelector('form')));
    const { email, password } = data;
    const rePass = data['confirm-password'];

    if ([email, password, rePass].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    if (password !== rePass) {
      return alert("Password don't match!");
    }

    await register(email, password);
    ctx.page.redirect('/');
  }
}
