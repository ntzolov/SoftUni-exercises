import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteFactById, getFactById } from '../data/facts.js';
import { addLike, getTotalLikes, userLikes } from '../data/likes.js';
import { getUser } from '../util.js';

const detailsTemplate = (onLike, onDelete, fact, userData, isOwner, totalLikes, isLiked) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${fact.imageUrl} alt="example1" />
      <p id="details-category">${fact.category}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p id="description">${fact.description}</p>
          <p id="more-info">${fact.moreInfo}</p>
        </div>

        <h3>
          Likes:
          <span id="likes">${totalLikes}</span>
        </h3>

        <div id="action-buttons">
          ${isOwner
            ? html`
                <a href="/edit/${fact._id}" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" @click=${onDelete} id="delete-btn">Delete</a>
              `
            : userData && !isLiked
            ? html`
                <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>
              `
            : null}
        </div>
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const factId = ctx.params.id;
  const fact = await getFactById(factId);
  const userData = getUser();
  const totalLikes = await getTotalLikes(factId);

  let isOwner;
  let isLiked;
  if (userData) {
    isOwner = userData._id === fact._ownerId;
    const isUserLiked = await userLikes(factId, userData._id);
    isLiked = isUserLiked === 0 ? false : true;
  }

  ctx.render(detailsTemplate(onLike, onDelete, fact, userData, isOwner, totalLikes, isLiked));

  async function onDelete() {
    const confirmation = confirm('Are you sure you want to delete this fact?');

    if (confirmation) {
      await deleteFactById(factId);
      ctx.page.redirect('/dashboard');
    }
  }

  async function onLike() {
    await addLike(factId);
    ctx.page.redirect('/details/' + factId);
  }
}
