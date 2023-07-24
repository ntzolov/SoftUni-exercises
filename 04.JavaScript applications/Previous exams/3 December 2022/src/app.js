import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './data/auth.js';
import { getUser } from './util.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashboard.js';
import { deleteView } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { layoutTemplate } from './views/layout.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';

const root = document.querySelector('body');

page(decorateContext);
page('html.index', '/');
page('/', homeView);
page('/login', loginView);
page('/register', registerView);
page('/logout', logoutAction);
page('/dashboard', dashboardView);
page('/add', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);
page('/delete/:id', deleteView);

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}

function renderView(content) {
  const userData = getUser();
  render(layoutTemplate(userData, content), root);
}

async function logoutAction(ctx) {
  debugger
  await logout();
  ctx.page.redirect('/dashboard');
}
