import { del, get, post, put } from './api.js';

export async function getAllGames() {
  return await get('/data/games?sortBy=_createdOn%20desc');
}

export async function createGame(dataObj) {
  await post('/data/games', dataObj);
}

export async function getGameById(gameId) {
  return await get('/data/games/' + gameId);
}

export async function deleteGameById(gameId) {
  await del('/data/games/' + gameId);
}

export async function editGameById(gameId, dataObj) {
  await put('/data/games/' + gameId, dataObj);
}
