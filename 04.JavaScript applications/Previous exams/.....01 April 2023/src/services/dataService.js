import { del, get, put } from './apiService.js';

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

export async function editFruitById(id, body) {
  const data = await put('/data/fruits/' + id, body);
  return data;
}
