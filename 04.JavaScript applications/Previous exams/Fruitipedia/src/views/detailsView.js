import { html, nothing } from '../lib.js';
import { deleteFruitById, getFruitById } from '../services/dataService.js';
import { getUser } from '../util.js';
import { editView } from './editView.js';

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
                <a href="" id="edit-btn" @click=${editFruit}>Edit</a>
                <a href="" id="delete-btn" @click=${deleteFruit}>Delete</a>
              </div>
            `
          : nothing}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const id = ctx.params.id;
  const user = getUser();
  const fruit = await getFruitById(id);

  let isOwner = null;
  if (user) {
    if (user._id === fruit._ownerId) {
      isOwner = true;
    } else {
      isOwner = false;
    }
  }

  ctx.updateNav();
  ctx.render(detailsTemplate(fruit, isOwner, deleteFruit, editFruit));

  async function deleteFruit(e) {
    debugger
    const id = ctx.params.id;
    await deleteFruitById(id);
    ctx.page.redirect('/dashboard');
  }

  async function editFruit(e) {
    const id = ctx.params.id;
    const fruit = await getFruitById(id);

    editView(ctx, fruit);
  }
}
