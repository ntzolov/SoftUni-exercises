import { del, get, post, put } from './api.js';

export async function getAllItems() {
  return await get('/data/posts?sortBy=_createdOn%20desc');
}

export async function createItem(itemObj) {
  await post('/data/posts', itemObj);
}

export async function editItemById(itemId, itemObj) {
  await put('/data/posts/' + itemId, itemObj);
}

export async function getItemById(itemId) {
  return await get('/data/posts/' + itemId);
}

export async function deleteItemById(itemId) {
  await del('/data/posts/' + itemId);
}

export async function getOnlyUserItems(userId) {
  return await get(`/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);
}
