import { request } from '../data.js';
import { renderComments } from './comments.js';

export async function renderPost(id) {
  debugger;
  const divForm = document.getElementsByClassName('new-topic-border')[0];
  const divPosts = document.getElementsByClassName('topic-title')[0];
  const divMain = document.querySelector('main');

  divForm.style.display = 'none';
  divPosts.style.display = 'none';

  const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
  const post = await response.json();

  // Render Current Post
  const divComment = document.createElement('div');
  divComment.classList.add('comment');
  divComment.id = 'div-comment';
  const divHeader = document.createElement('div');
  divHeader.classList.add('header');
  divHeader.innerHTML = `
    <img src="./static/profile.png" alt="avatar">
    <p><span>${post.username}</span> posted on <time>${post.date}</time></p>
  
    <p class="post-content">${post.postText}</p>
    `;

  divComment.appendChild(divHeader);
  divMain.appendChild(divComment);

  // Render Comments
  renderComments();

  // Render write comment section
  const divFragment = document.createDocumentFragment();
  const divComments = document.createElement('div');
  divComments.classList.add('answer-comment');
  divComments.innerHTML = `
  <p><span>currentUser</span> comment:</p>
              <div class="answer">
                  <form id="form-comment">
                      <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
                      <div>
                          <label for="username">Username <span class="red">*</span></label>
                          <input type="text" name="username" id="username">
                      </div>
                      <button id="post-comment">Post</button>
                  </form>
              </div>
  `;

  document.querySelector('main').appendChild(divComments);

  const btnComment = document.getElementById('post-comment');
  btnComment.addEventListener('click', createComment);
}

async function createComment(e) {
  e.preventDefault();

  const form = document.getElementById('form-comment');

  const postText = form.querySelector('#comment').value;
  const username = form.querySelector('#username').value;

  const createComment = await request('POST', 'http://localhost:3030/jsonstore/collections/myboard/comments', {
    postText,
    username,
    date: new Date(),
    postId: localStorage.getItem('id'),
  });

  document.querySelectorAll('.user-comment').forEach((el) => el.remove());
  renderComments();
  form.reset();
}
