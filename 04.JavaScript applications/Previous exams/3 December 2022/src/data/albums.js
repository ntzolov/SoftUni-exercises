import { del, get, post, put } from './api.js';

export async function getAllAlbums() {
  return await get('/data/albums?sortBy=_createdOn%20desc');
}

export async function createAlbum(albumObj) {
  await post('/data/albums', albumObj);
}

export async function getAlbumById(albumId) {
  return await get('/data/albums/' + albumId);
}

export async function editAlbumById(albumId, albumObj) {
  await put('/data/albums/' + albumId, albumObj);
}

export async function deleteAlbumById(albumId) {
  await del('/data/albums/' + albumId);
}
