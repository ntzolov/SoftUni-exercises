import { html } from '../../node_modules/lit-html/lit-html.js';
import { createComment, getAllComments } from '../data/comments.js';
import { deleteGameById, getGameById } from '../data/games.js';
import { getUser } from '../util.js';

const commentTemplate = (comment) => html`
  <li class="comment">
    <p>${comment.comment}</p>
  </li>
`;

const detailsTemplate = (game, onDelete, onAddComment, userData, isOwner, comments) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${game.imageUrl} />
        <h1>${game.title}</h1>
        <span class="levels">MaxLevel: ${game.maxLevel}</span>
        <p class="type">${game.category}</p>
      </div>

      <p class="text">${game.summary}</p>

      <div class="details-comments">
        <h2>Comments:</h2>
        ${comments.length > 0
          ? html`
              <ul>
                ${comments.map((comment) => commentTemplate(comment))}
              </ul>
            `
          : html`
              <p class="no-comment">No comments.</p>
            `}
      </div>

      ${isOwner
        ? html`
            <div class="buttons">
              <a href="/details/${game._id}/edit" class="button">Edit</a>
              <a href="javascript:void(0)" @click=${onDelete} class="button">Delete</a>
            </div>
          `
        : null}
    </div>

    ${userData && !isOwner
      ? html`
          <article class="create-comment">
            <label>Add new comment:</label>
            <form class="form" @submit=${onAddComment}>
              <textarea name="comment" placeholder="Comment......"></textarea>
              <input class="btn submit" type="submit" value="Add Comment" />
            </form>
          </article>
        `
      : null}
  </section>
`;

export async function detailsView(ctx) {
  const gameId = ctx.params.id;
  const game = await getGameById(gameId);
  const userData = getUser();

  let isOwner;
  if (userData) {
    isOwner = game._ownerId === userData._id;
  }

  const comments = await getAllComments(gameId);

  ctx.render(detailsTemplate(game, onDelete, onAddComment, userData, isOwner, comments));

  async function onDelete() {
    await deleteGameById(gameId);
    ctx.page.redirect('/');
  }

  async function onAddComment(e) {
    e.preventDefault();

    const { comment } = Object.fromEntries(new FormData(document.querySelector('form')));

    if (comment === '') {
      return alert('Write your comment!');
    }

    await createComment(gameId, comment);
    ctx.page.redirect(`/details/${gameId}`);
  }
}
