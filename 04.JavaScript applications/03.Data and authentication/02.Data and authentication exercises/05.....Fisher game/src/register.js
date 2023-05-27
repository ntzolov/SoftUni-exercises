addEvents();

function addEvents() {
  document.querySelector('form').addEventListener('submit', register);
  document.getElementById('logout').style.display = 'none';
  document.getElementById('home').classList.remove('active');
  document.getElementById('login').classList.remove('active');
  document.getElementById('register').classList.add('active');
}

async function register(e) {
  try {
    e.preventDefault();
    const formData = new FormData(document.querySelector('form'));

    for (const value of formData.values()) {
      if (value === '') {
        document.querySelector('form').reset();
        throw new Error('You have to fill all the fields!');
      }
    }

    const email = formData.get('email');
    const password = formData.get('password');
    const rePass = formData.get('rePass');

    if (password !== rePass) {
      document.querySelector('form').reset();
      throw new Error("Passwords doesn't match!");
    }

    const url = 'http://localhost:3030/users/register';
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        rePass,
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message);
    }

    const data = await res.json();
    localStorage.setItem('userData', JSON.stringify(data));

    document.querySelector('form').reset();
    window.location = './index.html';
  } catch (error) {
    alert(error.message);
  }
}
