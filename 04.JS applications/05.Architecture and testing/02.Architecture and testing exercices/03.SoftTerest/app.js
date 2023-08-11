import * as request from './api/api.js';
import { initializer } from './api/router.js';
import { catalogView } from './api/views/catalog.js';
import { createView } from './api/views/create.js';
import { detailsView } from './api/views/details.js';
import { homeView } from './api/views/home.js';
import { loginView } from './api/views/login.js';
import { registerView } from './api/views/register.js';

document.getElementById('default').remove();

async function logout() {
  const user = await request.get('/users/logout');
  localStorage.removeItem('user');
  router.goTo('/');
  router.updateNav();
}

const links = {
  '/': homeView,
  '/catalog': catalogView,
  '/create': createView,
  '/login': loginView,
  '/register': registerView,
  '/logout': logout,
  '/details': detailsView,
  // TO DO: LOGOUT IMPLEMENTATION
};

const router = initializer(links);
router.goTo('/');
router.updateNav();
