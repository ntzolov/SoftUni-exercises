import { del, get, post, put } from './api.js';

export async function getAllShoes() {
  return await get('/data/shoes?sortBy=_createdOn%20desc');
}

export async function createShoe(shoeObj) {
  await post('/data/shoes', shoeObj);
}

export async function getShoeById(shoeId) {
  return await get('/data/shoes/' + shoeId);
}

export async function editShoeById(shoeId, shoeObj) {
  await put('/data/shoes/' + shoeId, shoeObj);
}

export async function deleteShoeById(shoeId) {
  await del('/data/shoes/' + shoeId);
}

export async function searchShoes(searchText) {
  return await get(`/data/shoes?where=brand%20LIKE%20%22${searchText}%22`);
}
