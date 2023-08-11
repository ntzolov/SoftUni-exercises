import { request } from '../data.js';

export async function renderHome() {
  const posts = await request('GET', 'http://localhost:3030/jsonstore/collections/myboard/posts');

  const divPosts = document.getElementsByClassName('topic-title')[0];
  divPosts.innerHTML = '';

  for (let post in posts) {
    const currPost = posts[post];

    const divToAppend = document.createElement('div');
    divToAppend.classList.add('topic-container');
    divToAppend.innerHTML = `
    <div class="topic-name-wrapper">
      <div class="topic-name">
        <a href="#" class="normal" data-id="${currPost._id}">
          <h2>${currPost.topicName}</h2>
        </a>
        <div class="columns">
          <div>
            <p>Date: <time>${currPost.date}</time></p>
            <div class="nick-name">
              <p>Username: <span>${currPost.username}</span></p>
            </div>
          </div>


          </div>
        </div>
      </div>
    `;
    divPosts.appendChild(divToAppend);
  }
}
