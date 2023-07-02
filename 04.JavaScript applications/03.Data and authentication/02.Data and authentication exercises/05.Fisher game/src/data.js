import * as request from './api.js';

export async function getCatches() {
  const catches = await request.get('/data/catches');
  return catches;
}
