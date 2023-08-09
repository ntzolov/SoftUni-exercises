import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFact } from '../data/facts.js';
import { getFormData } from '../util.js';

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Add Fact</h2>
      <form class="create-form" @submit=${onCreate}>
        <input type="text" name="category" id="category" placeholder="Category" />
        <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
        <textarea id="description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
        <textarea id="additional-info" name="additional-info" placeholder="Additional Info" rows="10" cols="50"></textarea>
        <button type="submit">Add Fact</button>
      </form>
    </div>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    try {
      const data = getFormData();
      const category = data.category;
      const imageUrl = data['image-url'];
      const description = data.description;
      const moreInfo = data['additional-info'];

      await createFact({ category, imageUrl, description, moreInfo });
      ctx.page.redirect('/dashboard');
    } catch (error) {}
  }
}
