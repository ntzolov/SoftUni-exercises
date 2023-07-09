import { getUser } from '../util.js';

const guestNav = document.querySelector('.guest');
const userNav = document.querySelector('.user');

function updateNav() {

  const user = getUser();
  if (user) {
    userNav.style.display = 'inline-block';
    guestNav.style.display = 'none';
  } else {
    userNav.style.display = 'none';
    guestNav.style.display = 'inline-block';
  }
}

export function updateNavMiddleware(ctx, next) {
  ctx.updateNav = updateNav;

  next();
}
