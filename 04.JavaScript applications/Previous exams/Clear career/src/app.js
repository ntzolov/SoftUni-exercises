import { render } from '../node_modules/lit-html/lit-html.js';
import page from '../node_modules/page/page.mjs';
import { getUser } from './util.js';
import { layoutTemplate } from './views/layout.js';
import { homeView } from './views/homeView.js';
import { registerView } from './views/registerView.js';
import { logoutView } from './views/logoutView.js';
import { loginView } from './views/loginView.js';
import { dashboardView } from './views/dashboardView.js';
import { createView } from './views/createView.js';
import { detailsView } from './views/detailsView.js';
import { editView } from './views/editView.js';

const root = document.querySelector('body');

page(decorateContext);
page('index.html', '/');
page('/', homeView);
page('/register', registerView);
page('/logout', logoutView);
page('/login', loginView);
page('/dashboard', dashboardView);
page('/create', createView);
page('/details/:id', detailsView);
page('/edit/:id', editView);

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
