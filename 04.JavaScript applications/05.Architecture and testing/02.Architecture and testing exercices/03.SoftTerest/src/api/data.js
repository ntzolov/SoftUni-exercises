import * as req from './request.js';

const endPoints = {
  register: 'users/register',
  logout: 'users/logout',
  login: 'users/login',
};

const userData = JSON.parse(localStorage.getItem('userData'));

export async function register(email, password) {
  try {
    const data = { email, password };
    const response = await req.post(endPoints.register, data);

    if (!response.ok) {
      const error = response.json();
      throw new Error(error.message);
    }

    localStorage.setItem('userData', JSON.stringify(response));
    return response;
  } catch (error) {
    alert(error);
  }
}

export async function login(email, password) {
  try {
    const data = { email, password };
    const response = await req.post(endPoints.login, data);

    localStorage.setItem('userData', JSON.stringify(response));
    return response;
  } catch (error) {
    alert(error);
  }
}

export async function logout() {
  const data = { email: userData.email, password: userData.password };
  const response = await req.get(endPoints.logout);

  localStorage.clear();
}
