export async function showComments(e) {
  e.preventDefault();
  const id = e.currentTarget.dataset.id;
  const divMain = document.getElementsByClassName('container')[0];
  const divTheme = document.createElement('div');
  divTheme.classList.add('theme-content');
  divMain.appendChild(divTheme);
  const postsURL = 'http://localhost:3030/jsonstore/collections/myboard/posts';
  const commentsURL =
    'http://localhost:3030/jsonstore/collections/myboard/comments';

  const res = await fetch(postsURL);
  const data = await res.json();

  for (const key in data) {
    if (key === id) {
      const divComment = document.createElement('div');
      divComment.classList.add('comment');
      divComment.innerHTML = `<div class="header">
      <img src="./static/profile.png" alt="avatar">
      <p><span>${data[key].username}</span> posted on <time>${data[key].dateCreated}</time></p>

      <p class="post-content">${data[key].postText}</p>
  </div>`;
      divTheme.appendChild(divComment);
    }
  }

  const resComments = await fetch(commentsURL);
  const dataComments = await resComments.json();

  for (let key in dataComments) {
    if (id === dataComments[key].postId) {
      const divComment = document.createElement('div');
      divComment.classList.add('user-comment');
      divComment.innerHTML = `<div class="topic-name-wrapper">
      <div class="topic-name">
          <p><strong>${dataComments[key].username}</strong> commented on <time>${dataComments[key].dateCreated}</time></p>
          <div class="post-content">
              <p>${dataComments[key].comment}</p>
          </div>
      </div>
  </div>`;
      divTheme.appendChild(divComment);
    }
  }

  const divAnswerComment = document.createElement('div');
  divAnswerComment.classList.add('answer-comment');
  divAnswerComment.innerHTML = `<p><span>currentUser</span> comment:</p>
  <div class="answer">
      <form>
          <textarea name="postText" id="comment" cols="30" rows="10"></textarea>
          <div>
              <label for="username">Username <span class="red">*</span></label>
              <input type="text" name="username" id="username2">
          </div>
          <button id="postReply">Post</button>
      </form>
  </div>`;

  divTheme.appendChild(divAnswerComment);

  const main = document.getElementsByTagName('main')[0];
  main.style.display = 'none';

  const btn = document.getElementById('postReply');
  btn.addEventListener('click', postReply);

  async function postReply(e) {
    e.preventDefault();

    const comment = document.getElementById('comment');
    const username = document.getElementById('username2');
    console.log(username.value);

    const res = await fetch(commentsURL, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        comment: comment.value,
        dateCreated: new Date(),
        postId: id,
      }),
    });

    comment.value = '';
    username.value = '';
  }
}
