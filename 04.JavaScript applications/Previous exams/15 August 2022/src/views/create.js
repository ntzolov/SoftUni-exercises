import { html } from '../../node_modules/lit-html/lit-html.js';
import { createShoe } from '../data/shoes.js';
import { getFormData } from '../util.js';

const createTemplpate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Add item</h2>
      <form class="create-form" @submit=${onCreate}>
        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
        <input type="text" name="model" id="shoe-model" placeholder="Model" />
        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
        <input type="text" name="release" id="shoe-release" placeholder="Release date" />
        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
        <input type="text" name="value" id="shoe-value" placeholder="Value" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplpate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    try {
      const shoeObj = getFormData();
      await createShoe(shoeObj);
      ctx.page.redirect('/dashboard');
    } catch (error) {
      return alert(error.message);
    }
  }
}
