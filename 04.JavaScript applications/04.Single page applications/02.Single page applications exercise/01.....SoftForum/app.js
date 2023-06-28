import { renderHome } from './views/home.js';
import { renderPost } from './views/post.js';

const btnPost = document.getElementsByClassName('public')[0];
const btnCancel = document.getElementsByClassName('cancel')[0];

btnPost.addEventListener('click', createPost);

async function createPost(e) {
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

  const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      topicName,
      username,
      postText,
      date,
    }),
  });

  form.reset();
  renderHome();
}

btnCancel.addEventListener('click', resetForm);

function resetForm(e) {
  e.preventDefault();
  const postDiv = document.getElementsByClassName('new-topic-border')[0];
  const form = postDiv.querySelector('form');
  form.reset();
}

renderHome();

const divTopics = document.getElementsByClassName('topic-title')[0];
divTopics.addEventListener('click', getComments);

function getComments(e) {
  if (e.target.tagName === 'H2') {
    const id = e.target.parentElement.dataset.id;

    debugger
    renderPost(id);
  }
}
