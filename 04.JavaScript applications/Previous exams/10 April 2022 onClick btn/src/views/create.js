import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../data/items.js';
import { getFormData } from '../util.js';

const createTemplate = (onCreate) => html`
  <section id="create-page" class="auth">
    <form id="create" @submit=${onCreate}>
      <h1 class="title">Create Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs</label>
        <input type="text" name="description" id="description" />
      </article>

      <article class="input-group">
        <label for="imageUrl">Needed materials image</label>
        <input type="text" name="imageUrl" id="imageUrl" />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" />
      </article>

      <input type="submit" class="btn submit" value="Create Post" />
    </form>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    try {
      const { title, description, imageUrl, address, phone } = getFormData();

      await createItem({ title, description, imageUrl, address, phone });
      ctx.page.redirect('/');
    } catch (error) {}
  }
}
