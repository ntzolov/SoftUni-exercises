// TODO check endpoints and user object
import { removeUser, setUser } from '../util.js';
import { get, post } from './api.js';

const endpoints = {
  register: '/users/register',
  login: '/users/login',
  logout: '/users/logout',
};

export async function register(email, password) {
  const user = await post(endpoints.register, { email, password });
  setUser(user);
}

export async function login(email, password) {
  const user = await post(endpoints.login, { email, password });
  setUser(user);
}

export async function logout() {
  await get(endpoints.logout);
  removeUser();
}
