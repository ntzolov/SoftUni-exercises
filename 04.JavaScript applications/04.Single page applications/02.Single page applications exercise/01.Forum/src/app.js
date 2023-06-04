import { showPosts } from './home.js';
import { createPost } from './home.js';

showPosts();
const home = document.querySelector('header a');
home.addEventListener('click', showPosts);

document.getElementsByTagName('button')[0].addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementsByTagName('form')[0].reset();
});

document
  .getElementsByClassName('public')[0]
  .addEventListener('click', createPost);
