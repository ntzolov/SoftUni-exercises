import { html } from '../lib.js';
import { login } from '../services/authService.js';

const loginTemplate = (loginHandler) => html`
  <section id="login">
    <div class="form">
      <h2>Login</h2>
      <form class="login-form" @submit=${loginHandler}>
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
  ctx.render(loginTemplate(loginHandler));

  async function loginHandler(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const email = formData.get('email').trim();
    const password = formData.get('password').trim();

    if (email === '' || password === '') {
      return alert('All fields required!');
    }

    await login(email, password);
    ctx.updateNav();
    ctx.page.redirect('/');
  }
}
