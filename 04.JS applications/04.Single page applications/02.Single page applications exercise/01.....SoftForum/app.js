// 75/100

import { renderHome } from './views/home.js';
import { createPost, resetForm, getComments } from './utils.js';

renderHome();

const btnPost = document.getElementsByClassName('public')[0];
const btnCancel = document.getElementsByClassName('cancel')[0];
document.getElementById('btn-home').addEventListener('click', () => location.reload());

btnPost.addEventListener('click', createPost);
btnCancel.addEventListener('click', resetForm);

const divTopics = document.getElementsByClassName('topic-title')[0];
divTopics.addEventListener('click', getComments);
