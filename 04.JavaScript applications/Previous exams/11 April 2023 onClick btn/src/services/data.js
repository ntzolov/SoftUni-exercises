import { del, get, post, put } from './api.js';

export async function getAllEvents() {
  return await get('/data/events?sortBy=_createdOn%20desc');
}

export async function createEvent(dataObj) {
  await post('/data/events', dataObj);
}

export async function getEventById(id) {
  return await get('/data/events/' + id);
}

export async function editEventById(id, dataObj) {
  await put('/data/events/' + id, dataObj);
}

export async function deleteEventById(id) {
  await del('/data/events/' + id);
}
