import { logout } from '../services/authService.js';

export async function logoutView(ctx) {
  await logout();
  ctx.updateNav();
  ctx.page.redirect('/');
}
