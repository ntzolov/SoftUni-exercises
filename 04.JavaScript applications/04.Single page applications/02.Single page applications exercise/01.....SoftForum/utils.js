import { renderHome } from './views/home.js';
import { renderPost } from './views/post.js';
import { renderComments } from './views/comments.js';
import { request } from './data.js';

export async function createPost(e) {
  e.preventDefault();
  const postDiv = document.getElementsByClassName('new-topic-border')[0];
  const form = postDiv.querySelector('form');

  const formData = new FormData(form);
  const topicName = formData.get('topicName');
  const username = formData.get('username');
  const postText = formData.get('postText');
  const date = new Date();

  if (topicName !== '' && ((username !== '') !== postText) !== '') {
  }

  const sendPost = await request('POST', 'http://localhost:3030/jsonstore/collections/myboard/posts', {
    topicName,
    username,
    postText,
    date,
  });

  form.reset();
  renderHome();
}

export function resetForm(e) {
  e.preventDefault();
  const postDiv = document.getElementsByClassName('new-topic-border')[0];
  const form = postDiv.querySelector('form');
  form.reset();
}

export function getComments(e) {
  if (e.target.tagName === 'H2') {
    const id = e.target.parentElement.dataset.id;
    localStorage.setItem('id', id);

    renderPost(id);
  }
}
