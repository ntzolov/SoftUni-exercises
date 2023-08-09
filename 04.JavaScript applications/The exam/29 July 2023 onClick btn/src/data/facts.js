import { del, get, post, put } from './api.js';

export async function getAllFacts() {
  return await get('/data/facts?sortBy=_createdOn%20desc');
}

export async function getFactById(factId) {
  return await get('/data/facts/' + factId);
}

export async function createFact(factObj) {
  await post('/data/facts', factObj);
}

export async function editFactById(factId, factObj) {
  await put('/data/facts/' + factId, factObj);
}

export async function deleteFactById(factId) {
  await del('/data/facts/' + factId);
}
