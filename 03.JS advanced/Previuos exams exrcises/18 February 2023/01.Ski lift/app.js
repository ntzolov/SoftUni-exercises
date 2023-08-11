window.addEventListener('load', solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const peopleCount = document.getElementById('people-count');
  const fromDate = document.getElementById('from-date');
  const daysCount = document.getElementById('days-count');

  const fields = {};

  document.getElementById('next-btn').addEventListener('click', nextStep);

  function nextStep(e) {
    e.preventDefault();

    fields.firstName = firstName.value;
    fields.lastName = lastName.value;
    fields.peopleCount = peopleCount.value;
    fields.fromDate = fromDate.value;
    fields.daysCount = daysCount.value;

    console.log(fields);

    for (const field in fields) {
      if (fields[field] === '') {
        return alert('There is an empty field!');
      }
    }

    document.getElementById('next-btn').disabled = true;

    const ul = document.querySelector('#info-ticket ul');
    const li = createEl('li', '', { class: 'ticket' });
    ul.appendChild(li);
    const article = createEl('article', '', {});
    const h3 = createEl(
      'h3',
      `Name: ${fields.firstName} ${fields.lastName}`,
      {}
    );
    const pDate = createEl('p', `From date: ${fields.fromDate}`, {});
    const pDays = createEl('p', `For ${fields.daysCount} days`, {});
    const pPeople = createEl('p', `For ${fields.peopleCount} people`);
    article.appendChild(h3);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);
    li.appendChild(article);

    li.appendChild(createEl('button', 'Edit', { class: 'edit-btn' }));
    li.appendChild(createEl('button', 'Continue', { class: 'continue-btn' }));

    document
      .getElementsByClassName('edit-btn')[0]
      .addEventListener('click', edit);
    document
      .getElementsByClassName('continue-btn')[0]
      .addEventListener('click', finalStep);

    firstName.value = '';
    lastName.value = '';
    peopleCount.value = '';
    fromDate.value = '';
    daysCount.value = '';
  }

  function edit(e) {
    e.preventDefault();

    firstName.value = fields.firstName;
    lastName.value = fields.lastName;
    peopleCount.value = fields.peopleCount;
    fromDate.value = fields.fromDate;
    daysCount.value = fields.daysCount;

    document.getElementsByClassName('ticket')[0].remove();
    document.getElementById('next-btn').disabled = false;
  }

  function finalStep(e) {
    e.preventDefault();
    document.getElementsByClassName('ticket')[0].remove();

    const ul = document.querySelector('#confirm-ticket-section ul');
    const li = createEl('li', '', { class: 'ticket' });
    ul.appendChild(li);
    const article = createEl('article', '', {});
    const h3 = createEl(
      'h3',
      `Name: ${fields.firstName} ${fields.lastName}`,
      {}
    );
    const pDate = createEl('p', `From date: ${fields.fromDate}`, {});
    const pDays = createEl('p', `For ${fields.daysCount} days`, {});
    const pPeople = createEl('p', `For ${fields.peopleCount} people`);
    article.appendChild(h3);
    article.appendChild(pDate);
    article.appendChild(pDays);
    article.appendChild(pPeople);
    li.appendChild(article);

    li.appendChild(createEl('button', 'Confirm', { class: 'confirm-btn' }));
    li.appendChild(createEl('button', 'Cancel', { class: 'cancel-btn' }));

    document
      .getElementsByClassName('confirm-btn')[0]
      .addEventListener('click', confirm);
    document
      .getElementsByClassName('cancel-btn')[0]
      .addEventListener('click', cancel);
  }
  function confirm() {
    document.getElementById('main').remove();
    const h1 = createEl('h1', 'Thank you, have a nice day!', {
      id: 'thank-you',
    });
    const btn = createEl('button', 'Back', { id: 'back-btn' });
    btn.addEventListener('click', reload);

    const body = document.getElementById('body');
    body.appendChild(h1);
    body.appendChild(btn);
  }

  function cancel() {
    document.getElementsByClassName('ticket')[0].remove();
    document.getElementById('next-btn').disabled = false;
  }

  function reload() {
    location.reload();
  }

  function createEl(tag, content, attributes) {
    const element = document.createElement(tag);

    if (content) {
      element.textContent = content;
    }
    if (attributes) {
      for (const attr in attributes) {
        if (attr === 'class') {
          element.classList.add(attributes[attr]);
        } else {
          element[attr] = attributes[attr];
        }
      }
    }

    return element;
  }
}
