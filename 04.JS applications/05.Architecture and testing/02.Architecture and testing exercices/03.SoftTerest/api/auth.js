import * as request from './api.js';

export async function register(data) {
  const user = await request.post('/users/register', data);
  localStorage.setItem('user', JSON.stringify(user));
}

export async function login(data) {
  const user = await request.post('/users/login', data);
  localStorage.setItem('user', JSON.stringify(user));
}

export async function logout() {
  await request.get('/users/logout');
}
