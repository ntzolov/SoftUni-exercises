import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteFruitById, getFruitById } from '../services/dataService.js';
import { getUser } from '../util.js';

const detailsTemplate = (fruit, isOwner, deleteFruit, editFruit) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${fruit.imageUrl} alt=${fruit.name} />
      <p id="details-title">${fruit.name}</p>
      <div id="info-wrapper">
        <div id="details-description">
          <p>${fruit.description}</p>
          <p id="nutrition">Nutrition</p>
          <p id="details-nutrition">${fruit.nutrition}</p>
        </div>
        ${isOwner
          ? html`
              <div id="action-buttons">
                <a href="/details/${fruit._id}/edit" id="edit-btn">Edit</a>
                <a href="javascript:void(0)" id="delete-btn" @click=${deleteFruit}>Delete</a>
              </div>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const userData = getUser();
  const fruit = await getFruitById(id);

  let isOwner;
  if (userData) {
    isOwner = userData._id === fruit._ownerId;
  }

  ctx.render(detailsTemplate(fruit, isOwner, deleteFruit, editFruit));

  async function deleteFruit(e) {
    await deleteFruitById(id);
    ctx.page.redirect('/dashboard');
  }

  async function editFruit(e) {}
}
