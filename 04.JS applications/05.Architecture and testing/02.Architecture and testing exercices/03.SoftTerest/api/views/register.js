import { register } from '../auth.js';

const section = document.getElementById('register-view');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let context = null;
export function registerView(ctx) {
  ctx.showSection(section);
  context = ctx;
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');
  const rePass = formData.get('repeatPassword');

  if (email.length < 3) {
    return alert('Email must be at least 3 characters');
  }

  if (password.length < 3) {
    return alert('Email must be at least 3 characters');
  }

  if (password !== rePass) {
    return alert("Password does'nt match");
  }

  await register({ email, password });

  context.goTo('/catalog');
  context.updateNav();
}
