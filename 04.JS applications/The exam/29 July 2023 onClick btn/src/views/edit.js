import { html } from '../../node_modules/lit-html/lit-html.js';
import { editFactById, getFactById } from '../data/facts.js';
import { getFormData } from '../util.js';

const editTemplate = (fact, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fact</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" .value=${fact.category} name="category" id="category" placeholder="Category" />
        <input type="text" .value=${fact.imageUrl} name="image-url" id="image-url" placeholder="Image URL" />
        <textarea
          id="description"
          .value=${fact.description}
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"></textarea>
        <textarea
          id="additional-info"
          .value=${fact.moreInfo}
          name="additional-info"
          placeholder="Additional Info"
          rows="10"
          cols="50"></textarea>
        <button type="submit">Post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const factId = ctx.params.id;
  const fact = await getFactById(factId);

  ctx.render(editTemplate(fact, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    try {
      const data = getFormData();
      const category = data.category;
      const imageUrl = data['image-url'];
      const description = data.description;
      const moreInfo = data['additional-info'];

      await editFactById(factId, { category, imageUrl, description, moreInfo });
      ctx.page.redirect('/details/' + factId);
    } catch (error) {
      return alert(error.message);
    }
  }
}
