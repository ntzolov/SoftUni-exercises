import * as request from './api.js';

export async function createIdea(data) {
  await request.post('/data/ideas', data);
}

export async function getAllIdeas() {
  const allIdeas = await request.get('/data/ideas?select=_id%2Ctitle%2Cimg&sortBy=_createdOn%20desc');
  return allIdeas;
}

export async function getIdeaById(id) {
  const idea = await request.get('/data/ideas/' + id);
  return idea;
}

export async function deleteIdeaById(id) {
  await request.del('/data/ideas/' + id);
}
