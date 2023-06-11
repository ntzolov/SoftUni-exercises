window.addEventListener('load', solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const dateIn = document.getElementById('date-in');
  const dateOut = document.getElementById('date-out');
  const guestsNumber = document.getElementById('people-count');

  const btnNext = document.getElementById('next-btn');
  btnNext.addEventListener('click', next);

  const data = {};

  function next(e) {
    e.preventDefault();

    data.firstName = firstName.value;
    data.lastName = lastName.value;
    data.dateIn = dateIn.value;
    data.dateOut = dateOut.value;
    data.guestsNumber = guestsNumber.value;

    if (
      !firstName.value ||
      !lastName.value ||
      !dateIn.value ||
      !dateOut.value ||
      !guestsNumber.value
    ) {
      return;
    }

    const dateInToCompare = new Date(dateIn.value);
    const dateInToCompareToMilliseconds = dateInToCompare.getTime();
    const dateOutToCompare = new Date(dateOut.value);
    const dateOutToCompareToMilliseconds = dateOutToCompare.getTime();

    if (dateOutToCompareToMilliseconds - dateInToCompareToMilliseconds <= 0) {
      return;
    }

    const ul = document.querySelector('#info-reservations ul');
    ul.appendChild(
      createElement('li', '', { class: 'reservation-content' }, [
        createElement('article', '', {}, [
          createElement('h3', `Name: ${firstName.value} ${lastName.value}`),
          createElement('p', `From date: ${dateIn.value}`),
          createElement('p', `To date: ${dateOut.value}`),
          createElement('p', `For ${guestsNumber.value} people`),
        ]),
        createElement('button', 'Edit', { class: 'edit-btn', onclick: edit }),
        createElement('button', 'Continue', {
          class: 'continue-btn',
          onclick: cont,
        }),
      ])
    );

    btnNext.disabled = true;
    firstName.value = '';
    lastName.value = '';
    dateIn.value = '';
    dateOut.value = '';
    guestsNumber.value = '';
  }

  function edit(e) {
    e.preventDefault();

    firstName.value = data.firstName;
    lastName.value = data.lastName;
    dateIn.value = data.dateIn;
    dateOut.value = data.dateOut;
    guestsNumber.value = data.guestsNumber;

    e.target.parentElement.remove();
    btnNext.disabled = false;
  }

  function cont(e) {
    e.preventDefault();
    e.target.parentElement.remove();

    const ul = document.querySelector('#confirm-reservations ul');
    ul.appendChild(
      createElement('li', '', { class: 'reservation-content' }, [
        createElement('article', '', {}, [
          createElement('h3', `Name: ${data.firstName} ${data.lastName}`),
          createElement('p', `From date: ${data.dateIn}`),
          createElement('p', `To date: ${data.dateOut}`),
          createElement('p', `For ${data.guestsNumber} people`),
        ]),
        createElement('button', 'Confirm', {
          class: 'confirm-btn',
          onclick: conf,
        }),
        createElement('button', 'Cancel', {
          class: 'cancel-btn',
          onclick: cancel,
        }),
      ])
    );
  }

  function conf(e) {
    e.preventDefault();
    e.target.parentElement.remove();

    btnNext.disabled = false;
    const h1 = document.getElementById('verification');
    h1.classList.add('reservation-confirmed');
    h1.textContent = 'Confirmed.';
  }

  function cancel(e) {
    e.preventDefault();
    e.target.parentElement.remove();

    btnNext.disabled = false;
    const h1 = document.getElementById('verification');
    h1.classList.add('reservation-cancelled');
    h1.textContent = 'Cancelled.';
  }

  function createElement(tagName, textContent, attributes, children = []) {
    const element = document.createElement(tagName);

    const PARAMS = {
      class: (value) => element.classList.add(value),
      id: (value) => (element.id = value),
      onclick: (value) => element.addEventListener('click', value),
      disabled: () => element.setAttribute('disabled', ''),
      src: (value) => element.setAttribute('src', value),
    };

    if (textContent) {
      element.textContent = textContent;
    }

    if (attributes) {
      Object.entries(attributes).forEach(([param, value]) =>
        PARAMS[param](value)
      );
    }

    if (children.length == 0) {
      return element;
    }

    children.forEach((c) => element.appendChild(c));

    return element;
  }
}
