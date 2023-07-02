import { del, post, put } from '../api.js';
import { getCatches } from '../data.js';

export async function loadCatches() {
  const divCatches = document.getElementById('catches');
  const userData = JSON.parse(localStorage.getItem('user'));
  const catches = await getCatches();
  divCatches.innerHTML = '';

  catches.forEach((el) => {
    const divCatch = document.createElement('div');
    divCatch.classList.add('catch');

    if (userData) {
      divCatch.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${el.angler}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>
    <label>Weight</label>
    <input type="text" class="weight" value="${el.weight}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>
    <label>Species</label>
    <input type="text" class="species" value="${el.species}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>
    <label>Location</label>
    <input type="text" class="location" value="${el.location}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>
    <label>Bait</label>
    <input type="text" class="bait" value="${el.bait}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${el.captureTime}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>
    <button class="update" data-id="${el._ownerId}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>Update</button>
    <button class="delete" data-id="${el._id}" ${el._ownerId === userData._id ? '' : 'disabled="true"'}>Delete</button>
    `;

      if (el._ownerId === userData._id) {
        const btnUpdate = divCatch.getElementsByTagName('button')[0];
        const btnDelete = divCatch.getElementsByTagName('button')[1];

        btnUpdate.addEventListener('click', updateCatch);
        btnDelete.addEventListener('click', deleteCatch);
      }
    } else {
      divCatch.innerHTML = `
    <label>Angler</label>
    <input type="text" class="angler" value="${el.angler}" disabled="true">
    <label>Weight</label>
    <input type="text" class="weight" value="${el.weight}" disabled="true">
    <label>Species</label>
    <input type="text" class="species" value="${el.species}" disabled="true">
    <label>Location</label>
    <input type="text" class="location" value="${el.location}" disabled="true">
    <label>Bait</label>
    <input type="text" class="bait" value="${el.bait}" disabled="true">
    <label>Capture Time</label>
    <input type="number" class="captureTime" value="${el.captureTime}" disabled="true}">
    <button class="update" data-id="${el._ownerId}" disabled="true">Update</button>
    <button class="delete" data-id="${el._id}" disabled="true">Delete</button>
    `;
    }

    divCatches.appendChild(divCatch);
  });
}

export async function addCatch(e) {
  e.preventDefault();

  const form = e.target;
  const formData = Object.fromEntries(new FormData(form));

  for (const el in formData) {
    if (formData[el] === '') {
      return alert('Empty fields!');
    }
  }

  const { angler, weight, species, location, bait, captureTime } = formData;
  await post('/data/catches', {
    angler,
    weight,
    species,
    location,
    bait,
    captureTime,
  });

  form.reset();
}

function updateCatch(e) {
  const divCatch = e.target.parentElement;
  const angler = divCatch.getElementsByTagName('input')[0].value;
  const weight = divCatch.getElementsByTagName('input')[1].value;
  const species = divCatch.getElementsByTagName('input')[2].value;
  const location = divCatch.getElementsByTagName('input')[3].value;
  const bait = divCatch.getElementsByTagName('input')[4].value;
  const captureTime = divCatch.getElementsByTagName('input')[5].value;
  const catchId = divCatch.getElementsByTagName('button')[1].dataset.id;

  if (angler === '' || weight === '' || species === '' || location === '' || bait === '' || captureTime === '') {
    return alert('Empty fields!');
  }

  put('/data/catches/' + catchId, {
    angler,
    weight,
    species,
    location,
    bait,
    captureTime,
  });
}

async function deleteCatch(e) {
  const catchId = e.target.dataset.id;

  await del('/data/catches/' + catchId);
  loadCatches();
}
