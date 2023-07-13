export function setUser(userData) {
  localStorage.setItem('user', JSON.stringify(userData));
}

export function getUser() {
  return JSON.parse(localStorage.getItem('user'));
}

export function removeUser() {
  localStorage.removeItem('user');
}

