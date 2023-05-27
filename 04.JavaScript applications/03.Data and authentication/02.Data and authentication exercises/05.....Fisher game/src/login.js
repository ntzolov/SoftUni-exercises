addEvents();

document.getElementById('user').style.display = 'none';
document.getElementById('home').classList.remove('active');
document.getElementById('login').classList.add('active');
document.getElementById('register').classList.remove('active');

function addEvents() {
  document.querySelector('form').addEventListener('submit', checkUser);
}

function getCredentials() {
  const form = document.querySelector('form');
  const credentialsObject = Object.fromEntries([...new FormData(form)]);
  return credentialsObject;
}

async function checkUser(e) {
  try {
    e.preventDefault();
    const url = 'http://localhost:3030/users/login';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(getCredentials()),
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }
    const data = await res.json();
    localStorage.setItem('userData', JSON.stringify(data));

    window.location = './index.html';
  } catch (error) {
    alert(error.message);
  }
}
