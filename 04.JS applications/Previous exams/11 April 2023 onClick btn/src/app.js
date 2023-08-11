import page from '../node_modules/page/page.mjs';
import { getUser } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { render } from '../node_modules/lit-html/lit-html.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logout } from './services/auth.js';
import { registerView } from './views/registerView.js';
import { dashboardView } from './views/dashboardView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

const root = document.querySelector('body');

page(decorateContext);
page('index.html', '/');
page('/', homeView);
page('/login', loginView);
page('/logout', logoutAction);
page('/register', registerView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/details/:id', detailsView);
page('/details/:id/edit', editView);

page.start();

// TODO add dependencies
function decorateContext(ctx, next) {
  ctx.render = renderView;

  next();
}

function renderView(content) {
  const userData = getUser();
  render(layoutTemplate(userData, content), root);
}

async function logoutAction(ctx) {
  await logout();
  ctx.page.redirect('/');
}
