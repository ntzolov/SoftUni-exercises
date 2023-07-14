import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './services/authService.js';
import { getUser } from './util.js';
import { createView } from './views/createView.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { layout } from './views/layout.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';
import { searchView } from './views/searchView.js';

const root = document.querySelector('body');

page(decorateContext);
page('html.index', '/');
page('/', homeView);
page('/register', registerView);
page('/logout', logoutAction);
page('/login', loginView);
page('/dashboard', dashboardView);
page('/details/:id', detailsView);
page('/add-fruit', createView);
page('/details/:id/edit', editView);
page('/search', searchView);

page.start();

function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}

function renderView(content) {
  const userData = getUser();
  render(layout(userData, content), root);
}

async function logoutAction(ctx) {
  await logout();
  ctx.page.redirect('/');
}
