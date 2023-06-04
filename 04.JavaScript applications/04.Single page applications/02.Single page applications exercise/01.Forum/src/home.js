import { showComments } from './comments.js';

export async function createPost(e) {
  e.preventDefault();
  const form = document.getElementsByTagName('form')[0];
  const formData = new FormData(form);
  const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';

  try {
    formData.forEach((el) => {
      if (el === '') {
        throw new Error('You have to fill in all the inputs!');
      }
    });
    const { topicName, username, postText } = Object.fromEntries(
      formData.entries()
    );

    const res = await fetch(url, {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topicName,
        username,
        postText,
        dateCreated: new Date(),
      }),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error);
    }

    form.reset();
    showPosts();
  } catch (error) {
    alert(error.message);
  }
}

export async function showPosts() {
  const container = document.getElementsByClassName('container')[0];
  container.innerHTML = `<main>
  <div class="new-topic-border">
    <div class="header-background">
      <span>New Topic</span>
    </div>
    <form>
      <div class="new-topic-title">
        <label for="topicName">
          Title
          <span class="red">*</span>
        </label>
        <input type="text" name="topicName" id="topicName" />
      </div>
      <div class="new-topic-title">
        <label for="username">
          Username
          <span class="red">*</span>
        </label>
        <input type="text" name="username" id="username" />
      </div>
      <div class="new-topic-content">
        <label for="postText">
          Post
          <span class="red">*</span>
        </label>
        <textarea
          type="text"
          name="postText"
          id="postText"
          rows="8"
          class="height"></textarea>
      </div>
      <div class="new-topic-buttons">
        <button class="cancel">Cancel</button>
        <button class="public">Post</button>
      </div>
    </form>
  </div>

  <div class="topic-title">
    <!-- topic component  -->
    
  </div>
</main>`;

  const url = 'http://localhost:3030/jsonstore/collections/myboard/posts';
  const mainDiv = document.getElementsByClassName('topic-title')[0];

  const res = await fetch(url);
  try {
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error);
    }

    const data = await res.json();

    for (let post in data) {
      const divContainer = document.createElement('div');
      divContainer.classList.add('topic-container');
      divContainer.innerHTML = `<div class="topic-name-wrapper">
      <div class="topic-name">
        <a href="#" class="normal" data-id="${data[post]._id}">
          <h2>${data[post].topicName}</h2>
        </a>
        <div class="columns">
          <div>
            <p>
              Date:
              <time>${data[post].dateCreated}</time>
            </p>
            <div class="nick-name">
              <p>
                Username:
                <span>${data[post].username}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>`;
      mainDiv.appendChild(divContainer);
    }
    const posts = document.getElementsByClassName('normal');
    for (const post of posts) {
      post.addEventListener('click', showComments);
    }
  } catch (error) {
    alert(error.message);
  }
}
