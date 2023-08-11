import { html } from '../../node_modules/lit-html/lit-html.js';
import { editShoeById, getShoeById } from '../data/shoes.js';
import { getFormData } from '../util.js';

const editTemplate = (onEdit, shoe) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit item</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" .value=${shoe.brand} name="brand" id="shoe-brand" placeholder="Brand" />
        <input type="text" .value=${shoe.model} name="model" id="shoe-model" placeholder="Model" />
        <input type="text" .value=${shoe.imageUrl} name="imageUrl" id="shoe-img" placeholder="Image url" />
        <input type="text" .value=${shoe.release} name="release" id="shoe-release" placeholder="Release date" />
        <input type="text" .value=${shoe.designer} name="designer" id="shoe-designer" placeholder="Designer" />
        <input type="text" .value=${shoe.value} name="value" id="shoe-value" placeholder="Value" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
  F
`;

export async function editView(ctx) {
  const shoeId = ctx.params.id;
  const shoe = await getShoeById(shoeId);

  ctx.render(editTemplate(onEdit, shoe));

  async function onEdit(e) {
    e.preventDefault();

    try {
      const shoeObj = getFormData();
      await editShoeById(shoeId, shoeObj);
      ctx.page.redirect('/details/' + shoeId);
    } catch (error) {
      return alert(error.message);
    }
  }
}
