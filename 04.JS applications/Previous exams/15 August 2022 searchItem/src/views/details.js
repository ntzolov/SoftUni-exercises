import { html } from '../../node_modules/lit-html/lit-html.js';
import { getShoeById } from '../data/shoes.js';
import { getUser } from '../util.js';

const detailsTemplate = (shoe, isOwner) => html`
  <section id="details">
    <div id="details-wrapper">
      <p id="details-title">Shoe Details</p>
      <div id="img-wrapper">
        <img src=${shoe.imageUrl} alt="example1" />
      </div>
      <div id="info-wrapper">
        <p>
          Brand:
          <span id="details-brand">${shoe.brand}</span>
        </p>
        <p>
          Model:
          <span id="details-model">${shoe.model}</span>
        </p>
        <p>
          Release date:
          <span id="details-release">${shoe.release}</span>
        </p>
        <p>
          Designer:
          <span id="details-designer">${shoe.designer}</span>
        </p>
        <p>
          Value:
          <span id="details-value">${shoe.value}</span>
        </p>
      </div>

      ${isOwner
        ? html`
            <div id="action-buttons">
              <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
              <a href="/delete/${shoe._id}" id="delete-btn">Delete</a>
            </div>
          `
        : null}
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const shoeId = ctx.params.id;
  const shoe = await getShoeById(shoeId);
  const userData = getUser();

  let isOwner;
  if (userData) {
    isOwner = userData._id === shoe._ownerId;
  }

  ctx.render(detailsTemplate(shoe, isOwner));
}
