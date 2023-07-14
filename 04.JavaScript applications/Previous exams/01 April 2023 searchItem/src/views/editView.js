import { html } from '../../node_modules/lit-html/lit-html.js';
import { editFruitById, getFruitById } from '../services/dataService.js';

const editTemplate = (fruit, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Fruit</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" .value=${fruit.name} name="name" id="name" placeholder="Fruit Name" />
        <input type="text" .value=${fruit.imageUrl} name="imageUrl" id="Fruit-image" placeholder="Fruit Image URL" />
        <textarea
          id="fruit-description"
          .value=${fruit.description}
          name="description"
          placeholder="Description"
          rows="10"
          cols="50"></textarea>
        <textarea
          id="fruit-nutrition"
          .value=${fruit.nutrition}
          name="nutrition"
          placeholder="Nutrition"
          rows="10"
          cols="50"></textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const fruit = await getFruitById(id);

  ctx.render(editTemplate(fruit, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

    if (name === '' || imageUrl === '' || description === '' || nutrition === '') {
      return alert('All fields are required!');
    }

    await editFruitById(id, { name, imageUrl, description, nutrition });
    ctx.page.redirect('/details/' + id)
  }
}
