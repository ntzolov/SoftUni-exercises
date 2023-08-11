import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { logout } from './data/auth.js';
import { getUser } from './util.js';
import { catalogView } from './views/catalogView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';
import { homeView } from './views/homeView.js';
import { layoutTemplate } from './views/layout.js';
import { loginView } from './views/loginView.js';
import { registerView } from './views/registerView.js';

const root = document.querySelector('body');

page(decorateContext);
page('html.index', '/');
page('/', homeView);
page('/login', loginView);
page('/logout', logoutAction);
page('/register', registerView);
page('/catalog', catalogView);
page('/details/:id', detailsView);
page('/create', createView);
page('/details/:id/edit', editView);

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
  await logout();
  ctx.page.redirect('/');
}
