import { logout } from '../services/auth.js';

export async function logoutView(ctx) {
  await logout();
  ctx.page.redirect('/dashboard');
}
