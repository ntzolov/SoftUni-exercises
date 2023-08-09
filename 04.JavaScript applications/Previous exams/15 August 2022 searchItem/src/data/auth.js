import { removeUser, setUser } from '../util.js';
import * as api from './api.js';

const endpoints = {
  register: '/users/register',
  logout: '/users/logout',
  login: '/users/login',
};

export async function register(email, password) {
  const user = await api.post(endpoints.register, { email, password });
  setUser(user);
}

export async function logout() {
  await api.get(endpoints.logout);
  removeUser();
}

export async function login(email, password) {
  const user = await api.post(endpoints.login, { email, password });
  setUser(user);
}
