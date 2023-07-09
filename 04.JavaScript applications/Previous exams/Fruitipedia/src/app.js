import { page } from './lib.js';
import { updateNavMiddleware } from './middlewares/navigationMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { dashboardView } from './views/dashboardView.js';
import { detailsView } from './views/detailsView.js';
import { homeView } from './views/homeView.js';
import { loginView } from './views/loginView.js';
import { logoutView } from './views/logoutView.js';
import { registerView } from './views/registerView.js';

page(updateNavMiddleware);
page(renderMiddleware);
page('/', homeView);
page('/register', registerView);
page('/logout', logoutView);
page('/login', loginView);
page('/dashboard', dashboardView);
page('/details/:id', detailsView);

page.start();
page('/');
