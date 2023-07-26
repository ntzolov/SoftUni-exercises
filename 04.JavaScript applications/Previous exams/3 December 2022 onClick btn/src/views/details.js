import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAlbumById } from '../data/albums.js';
import { addLike, getTotalLikes, isUserLiked } from '../data/likes.js';
import { getUser } from '../util.js';

const detailsTemplate = (album, isOwner, userData, totalLikes, isLiked, onLike) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Album Details</p>
      <div id="img-wrapper">
        <img src=${album.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>
          <strong>Band:</strong>
          <span id="details-singer">${album.singer}</span>
        </p>
        <p>
          <strong>Album name:</strong>
          <span id="details-album">${album.album}</span>
        </p>
        <p>
          <strong>Release date:</strong>
          <span id="details-release">${album.release}</span>
        </p>
        <p>
          <strong>Label:</strong>
          <span id="details-label">${album.label}</span>
        </p>
        <p>
          <strong>Sales:</strong>
          <span id="details-sales">${album.sales}</span>
        </p>
      </div>
      <div id="likes">
        Likes:
        <span id="likes-count">${totalLikes}</span>
      </div>
      <div id="action-buttons">
        ${userData && !isLiked && !isOwner
          ? html`
              <a href="javascript:void(0)" @click=${onLike} id="like-btn">Like</a>
            `
          : null}
        ${isOwner
          ? html`
              <a href="/edit/${album._id}" id="edit-btn">Edit</a>
              <a href="/delete/${album._id}" id="delete-btn">Delete</a>
            `
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const albumId = ctx.params.id;
  const album = await getAlbumById(albumId);
  const userData = getUser();
  const totalLikes = await getTotalLikes(albumId);

  let isOwner;
  let isLiked;
  if (userData) {
    isOwner = album._ownerId === userData._id;
    const isLikedGetter = await isUserLiked(albumId, userData._id);
    isLiked = isLikedGetter === 0 ? false : true;
  }

  ctx.render(detailsTemplate(album, isOwner, userData, totalLikes, isLiked, onLike));

  async function onLike() {
    await addLike({ albumId });
    ctx.page.redirect('/details/' + albumId);
  }
}
