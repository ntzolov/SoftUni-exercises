import { get, post } from './api.js';

export async function addLike(factId) {
  await post('/data/likes', { factId });
}

export async function getTotalLikes(factId) {
  return await get(`/data/likes?where=factId%3D%22${factId}%22&distinct=_ownerId&count`);
}

export async function userLikes(factId, userId) {
  return await get(`/data/likes?where=factId%3D%22${factId}%22%20and%20_ownerId%3D%22${userId}%22&count`);
}
