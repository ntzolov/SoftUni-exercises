import { get, post } from './api.js';
import { renderHome } from './views/home.js';

export async function register(e) {
  e.preventDefault();
  const form = e.target.parentElement;

  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');
  const rePass = formData.get('rePass');

  try {
    if (email === '' || password === '' || rePass === '') {
      throw new Error('Not empty fields allowed');
    }

    if (password !== rePass) {
      throw new Error("Password does'nt match");
    }

    const user = await post('/users/register', {
      email,
      password,
    });

    localStorage.setItem('user', JSON.stringify(user));
    renderHome();
  } catch (error) {
    alert(error.message);
  }
}

export async function logout() {
  get('/users/logout');

  localStorage.clear();
  renderHome();
}

export async function login(e) {
  e.preventDefault();
  const form = e.target.parentElement;

  const formData = new FormData(form);
  const email = formData.get('email');
  const password = formData.get('password');

  const user = await post('/users/login', {
    email,
    password,
  });

  localStorage.setItem('user', JSON.stringify(user));
  renderHome();
}
