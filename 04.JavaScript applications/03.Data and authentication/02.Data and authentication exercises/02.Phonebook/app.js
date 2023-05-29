// It works but it gives one wrong test.....
attachEvents();

function attachEvents() {
  document.getElementById('btnLoad').addEventListener('click', loadContacts);
  document.getElementById('btnCreate').addEventListener('click', createContact);
}

async function loadContacts() {
  const ul = document.getElementById('phonebook');
  ul.innerHTML = '';
  const url = 'http://localhost:3030/jsonstore/phonebook';
  const response = await fetch(url);
  const data = await response.json();

  Object.values(data).forEach((obj) => {
    const li = document.createElement('li');
    li.textContent = `${obj.person}: ${obj.phone}`;

    const btnDelete = document.createElement('button');
    btnDelete.textContent = 'Delete';
    btnDelete.dataset.id = obj._id;
    btnDelete.addEventListener('click', deletePhone);

    li.appendChild(btnDelete);
    ul.appendChild(li);
  });
}

async function createContact() {
  const person = document.getElementById('person');
  const phone = document.getElementById('phone');
  const newContact = {
    person: person.value,
    phone: phone.value,
  };

  person.value = '';
  phone.value = '';

  const url = 'http://localhost:3030/jsonstore/phonebook';
  const options = {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(newContact),
  };

  const response = await fetch(url, options);
  loadContacts();
}

async function deletePhone(e) {
  const id = e.target.dataset.id;
  const url = 'http://localhost:3030/jsonstore/phonebook/' + id;
  const options = {
    method: 'delete',
  };

  const response = await fetch(url, options);
  e.target.parentElement.remove()
}
