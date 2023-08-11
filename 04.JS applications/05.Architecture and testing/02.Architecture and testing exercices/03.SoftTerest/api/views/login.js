import { login } from '../auth.js';

const section = document.getElementById('login-view');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let context = null;
export function loginView(ctx) {
  ctx.showSection(section);
  context = ctx;
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');

  await login({ email, password });

  form.reset();
  context.goTo('/catalog');
  context.updateNav();
}
