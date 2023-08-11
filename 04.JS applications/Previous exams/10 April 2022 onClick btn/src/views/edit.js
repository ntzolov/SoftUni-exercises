import { html } from '../../node_modules/lit-html/lit-html.js';
import { editItemById, getItemById } from '../data/items.js';
import { getFormData } from '../util.js';

const editTemplate = (item, onEdit) => html`
  <section id="edit-page" class="auth">
    <form id="edit" @submit=${onEdit}>
      <h1 class="title">Edit Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" .value=${item.title} name="title" id="title" value="" />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs</label>
        <input type="text" .value=${item.description} name="description" id="description" value="" />
      </article>

      <article class="input-group">
        <label for="imageUrl">Needed materials image</label>
        <input type="text" .value=${item.imageUrl} name="imageUrl" id="imageUrl" value="" />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" .value=${item.address} name="address" id="address" value="" />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" .value=${item.phone} name="phone" id="phone" value="" />
      </article>

      <input type="submit" class="btn submit" value="Edit Post" />
    </form>
  </section>
  F
`;

export async function editView(ctx) {
  const itemId = ctx.params.id;
  const item = await getItemById(itemId);
  console.log(item);
  ctx.render(editTemplate(item, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    try {
      const { title, description, imageUrl, address, phone } = getFormData();

      await editItemById(itemId, { title, description, imageUrl, address, phone });
      ctx.page.redirect('/');
    } catch (error) {
      return alert(error.message);
    }
  }
}
