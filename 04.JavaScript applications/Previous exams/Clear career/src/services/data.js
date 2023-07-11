import { del, get, post, put } from './api.js';

export function getAllOffers() {
  const data = get('/data/offers?sortBy=_createdOn%20desc');
  return data;
}

export async function createOffer(data) {
  await post('/data/offers', data);
}

export async function getOfferById(id) {
  const data = await get('/data/offers/' + id);
  return data;
}

export async function deleteOfferById(id) {
  await del('/data/offers/' + id);
}

export async function editOfferById(id, data) {
  await put('/data/offers/' + id, data);
}
