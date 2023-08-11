import { get, post } from './api.js';

export async function addApplication(dataObj) {
  await post('/data/applications', dataObj);
}

export async function getTotalApplications(offerId) {
  return await get(`/data/applications?where=offerId%3D%22${offerId}%22&distinct=_ownerId&count`);
}

export async function isUserApplied(offerId, userId) {
  return await get(`/data/applications?where=offerId%3D%22${offerId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
