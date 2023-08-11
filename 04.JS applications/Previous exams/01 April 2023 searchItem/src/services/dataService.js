import { del, get, post, put } from './apiService.js';

export async function getAllFruits() {
  const data = await get('/data/fruits?sortBy=_createdOn%20desc');
  return data;
}

export async function getFruitById(id) {
  const data = await get('/data/fruits/' + id);
  return data;
}

export async function deleteFruitById(id) {
  await del('/data/fruits/' + id);
}

export async function createFruit(dataObj) {
  await post('/data/fruits', dataObj);
}

export async function editFruitById(id, dataObj) {
  await put('/data/fruits/' + id, dataObj);
}

export async function searchFruits(searchText) {
  const query = encodeURIComponent(`name LIKE "${searchText}"`);
  const data = get('/data/fruits?where=' + query);
  return data;
}
