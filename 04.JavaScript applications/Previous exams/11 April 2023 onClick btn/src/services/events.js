import { get, post } from './api.js';

export async function addPeople(dataObj) {
  await post('/data/going', dataObj);
}

export async function getTotalPeople(eventId) {
  return await get(`/data/going?where=eventId%3D%22${eventId}%22&distinct=_ownerId&count`);
}

export async function isUserGoing(eventId, userId) {
  return await get(`/data/going?where=eventId%3D%22${eventId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}

