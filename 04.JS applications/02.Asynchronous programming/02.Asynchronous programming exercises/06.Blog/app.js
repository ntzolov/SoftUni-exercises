function attachEvents() {
  document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
  document
    .getElementById('btnViewPost')
    .addEventListener('click', loadComments);
}
// Logic for loading the posts
async function loadPosts() {
  const selectMenu = document.getElementById('posts');
  const responsePosts = await fetch(
    'http://localhost:3030/jsonstore/blog/posts'
  );
  const dataPosts = await responsePosts.json();

  selectMenu.innerHTML = '';
  Object.values(dataPosts).forEach((el) => {
    const option = document.createElement('option');
    option.value = el.id;
    option.textContent = el.title;
    selectMenu.appendChild(option);
  });
}
//Logic for loading the comments
async function loadComments() {
  const selectMenu = document.getElementById('posts');
  const urlPosts = 'http://localhost:3030/jsonstore/blog/posts';
  const urlComments = 'http://localhost:3030/jsonstore/blog/comments';

  const responsePosts = await fetch(urlPosts);
  const dataPosts = await responsePosts.json();
  const postID = selectMenu.value;

  const currPost = Object.values(dataPosts).find((el) => el.id === postID);
  document.getElementById('post-title').textContent = currPost.title;
  document.getElementById('post-body').textContent = currPost.body;

  const responseComments = await fetch(urlComments);
  const dataComments = await responseComments.json();

  const ul = document.getElementById('post-comments');
  ul.innerHTML = '';
  const currComments = Object.values(dataComments).filter(
    (el) => el.id === postID
  );
  
  currComments.forEach((comment) => {
    const li = document.createElement('li');
    li.textContent = comment.text;
    li.id = comment.id;
    ul.appendChild(li);
  });
}

attachEvents();
