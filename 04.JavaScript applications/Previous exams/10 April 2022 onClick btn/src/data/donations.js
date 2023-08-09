import { get, post } from './api.js';

export async function makeDonation(postId) {
  await post('/data/donations', { postId });
}

export async function getTotalDonations(postId) {
  return await get(`/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`);
}

export async function isUserDonated(postId, userId) {
  return await get(`/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
