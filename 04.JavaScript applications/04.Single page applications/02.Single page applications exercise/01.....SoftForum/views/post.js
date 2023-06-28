export async function renderPost(id) {
  const divForm = document.getElementsByClassName('new-topic-border')[0];
  const divPosts = document.getElementsByClassName('topic-title')[0];
  const divMain = document.querySelector('main');

  divForm.style.display = 'none';
  divPosts.style.display = 'none';

  const response = await fetch('http://localhost:3030/jsonstore/collections/myboard/posts/' + id);
  const post = await response.json();

  const divComment = document.createElement('div');
  divComment.classList.add('comment');
  const divHeader = document.createElement('div');
  divHeader.classList.add('header');
  divHeader.innerHTML = `
  <img src="./static/profile.png" alt="avatar">
  <p><span>${post.username}</span> posted on <time>${post.date}</time></p>

  <p class="post-content">${post.postText}</p>
  `;

  divComment.appendChild(divHeader);
  divMain.appendChild(divComment);
}
