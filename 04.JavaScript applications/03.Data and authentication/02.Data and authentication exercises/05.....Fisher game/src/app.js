const userData = JSON.parse(localStorage.getItem('userData'));

const buttons = Array.from(document.querySelectorAll('#catches button'));
for (const button of buttons) {
  if (!userData || button.dataset.id !== userData._id) {
    button.disabled = true;
  }
}

if (userData) {
  document.getElementById('guest').style.display = 'none';
  document.getElementsByClassName(
    'email'
  )[0].textContent = `Welcome, ${userData.email}`;
  document.querySelector('#addForm .add').disabled = false;
} else {
  document.getElementById('user').style.display = 'none';
}

document.querySelector('.load').addEventListener('click', loadCatches);
document.getElementById('addForm').addEventListener('submit', addCatch);
document.getElementById('catches').addEventListener('click', buttonsDelegation);
document.getElementById('logout').addEventListener('click', logout);

async function buttonsDelegation(e) {
  if (e.target.textContent === 'delete') {
    const id = e.target.dataset.catchId;
    deleteCatch(id);
  } else if (e.target.textContent === 'update') {
    const currentCatchElement = e.target.parentElement;
    const id = e.target.dataset.catchId;
    updateCatch(id, currentCatchElement);
  }
}

async function deleteCatch(id) {
  const url = `http://localhost:3030/data/catches/${id}`;
  const res = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': userData.accessToken,
    },
  });
  loadCatches();
}

async function updateCatch(id, element) {
  const url = `http://localhost:3030/data/catches/${id}`;
  let [angler, weight, species, location, bait, captureTime] =
    element.querySelectorAll('input');

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Authorization': userData.accessToken,
    },
    body: JSON.stringify({
      angler: angler.value,
      weight: weight.value,
      species: species.value,
      location: location.value,
      bait: bait.value,
      captureTime: captureTime.value,
    }),
  });
  loadCatches();
}

async function loadCatches() {
  const url = 'http://localhost:3030/data/catches';
  const res = await fetch(url);
  const data = await res.json();

  document.getElementById('catches').replaceChildren(...data.map(createCatch));

  const buttons = Array.from(document.querySelectorAll('#catches button'));
  for (const button of buttons) {
    if (!userData || button.dataset.id !== userData._id) {
      button.disabled = true;
    }
  }
}

async function addCatch(e) {
  try {
    e.preventDefault();
    const url = 'http://localhost:3030/data/catches';
    const formData = new FormData(document.querySelector('#addForm'));
    for (const value of formData.values()) {
      if (!value) {
        throw new Error('Empty fields!');
      }
    }

    const dataObj = Object.fromEntries([...formData]);
    dataObj.weight = Number(dataObj.weight);
    dataObj.captureTime = Number(dataObj.captureTime);
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Authorization': userData.accessToken,
      },
      body: JSON.stringify(dataObj),
    });
    document.querySelector('#addForm').reset();
  } catch (error) {
    alert(error.message);
  }
}

async function logout() {
  const url = 'http://localhost:3030/users/logout';
  const res = await fetch(url, {
    headers: {
      'X-Authorization': userData.accessToken,
    },
  });

  localStorage.clear();
  document.getElementById('guest').style.display = 'block';
  window.location = './index.html';
}

function createCatch(data) {
  const currCatch = createElement(
    'div',
    { class: 'catch' },
    createElement('label', {}, 'Angler'),
    createElement('input', {
      class: 'angler',
      type: 'text',
      value: data.angler,
    }),
    createElement('label', {}, 'Weight'),
    createElement('input', {
      class: 'weight',
      type: 'text',
      value: data.weight,
    }),
    createElement('label', {}, 'Species'),
    createElement('input', {
      class: 'species',
      type: 'text',
      value: data.species,
    }),
    createElement('label', {}, 'Location'),
    createElement('input', {
      class: 'location',
      type: 'text',
      value: data.location,
    }),
    createElement('label', {}, 'Bait'),
    createElement('input', {
      class: 'bait',
      type: 'text',
      value: data.bait,
    }),
    createElement('label', {}, 'Capture Time'),
    createElement('input', {
      class: 'captureTime',
      type: 'text',
      value: data.captureTime,
    }),
    createElement(
      'button',
      { class: 'update', id: data._ownerId, catchId: data._id },
      'update'
    ),
    createElement(
      'button',
      { class: 'delete', id: data._ownerId, catchId: data._id },
      'delete'
    )
  );
  return currCatch;
}

function createElement(tag, attributes, ...content) {
  const element = document.createElement(tag);

  for (const attr in attributes) {
    if (attr === 'class') {
      element.classList.add(attributes[attr]);
    } else if (attr === 'id') {
      element.dataset.id = attributes[attr];
    } else if (attr === 'catchId') {
      element.dataset.catchId = attributes[attr];
    } else {
      element[attr] = attributes[attr];
    }
  }

  for (let item of content) {
    if (typeof item === 'string' || typeof item === 'number') {
      item = document.createTextNode(item);
    }
    element.appendChild(item);
  }

  return element;
}
