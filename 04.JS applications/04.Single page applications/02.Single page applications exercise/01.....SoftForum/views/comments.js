export async function renderComments() {
  const responseComments = await fetch('http://localhost:3030/jsonstore/collections/myboard/comments');
  const comments = await responseComments.json();


  Object.values(comments).forEach((comment) => {
    if (comment.postId === localStorage.getItem('id')) {
      const divComment = document.createElement('div');
      divComment.classList.add('user-comment');
      divComment.innerHTML = `
      <div class="topic-name-wrapper">
            <div class="topic-name">
                <p><strong>${comment.username}</strong> commented on <time>${comment.date}</time></p>
                <div class="post-content">
                    <p>${comment.postText}</p>
                </div>
            </div>
        </div>
      `;

      document.getElementById('div-comment').appendChild(divComment);
    }
  });
}
