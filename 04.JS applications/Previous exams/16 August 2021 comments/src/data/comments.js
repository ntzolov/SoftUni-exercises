import { del, get, post, put } from './api.js';

export async function getAllComments(gameId) {
  return await get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export async function createComment(gameId, comment) {
  await post('/data/comments', { gameId, comment });
}
