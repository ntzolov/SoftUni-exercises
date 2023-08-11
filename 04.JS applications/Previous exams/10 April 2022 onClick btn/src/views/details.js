import { html } from '../../node_modules/lit-html/lit-html.js';
import { getTotalDonations, isUserDonated, makeDonation } from '../data/donations.js';
import { deleteItemById, getItemById } from '../data/items.js';
import { getUser } from '../util.js';

const detailsTemplate = (onDonate, onDelete, item, userData, isOwner, totalDonations, isUserDonate) => html`
  <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img src=${item.imageUrl} alt="Material Image" class="post-image" />
        </div>
        <div class="info">
          <h2 class="title post-title">${item.title}</h2>
          <p class="post-description">Description: ${item.description}</p>
          <p class="post-address">Address: ${item.address}</p>
          <p class="post-number">Phone number: ${item.phone}</p>
          <p class="donate-Item">Donate Materials: ${totalDonations}</p>

          <div class="btns">
            ${isOwner
              ? html`
                  <a href="/edit/${item._id}" class="edit-btn btn">Edit</a>
                  <a href="javascript:void(0)" @click=${onDelete} class="delete-btn btn">Delete</a>
                `
              : userData && !isUserDonate
              ? html`
                  <a href="javascript:void(0)" @click=${onDonate} class="donate-btn btn">Donate</a>
                `
              : null}
          </div>
        </div>
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const userData = getUser();
  const itemId = ctx.params.id;
  const postId = itemId;
  const item = await getItemById(itemId);
  const totalDonations = await getTotalDonations(postId);

  let isOwner;
  let isUserDonate;
  if (userData) {
    isOwner = userData._id === item._ownerId;
    const getIsUserDonate = await isUserDonated(postId, userData._id);
    isUserDonate = getIsUserDonate === 0 ? false : true;
  }

  ctx.render(detailsTemplate(onDonate, onDelete, item, userData, isOwner, totalDonations, isUserDonate));

  async function onDonate() {
    await makeDonation(postId);
    ctx.page.redirect('/details/' + postId);
  }

  async function onDelete() {
    await deleteItemById(itemId);
    ctx.page.redirect('/');
  }
}
