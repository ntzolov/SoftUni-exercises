import { html } from '../lib.js';
import { editFruitById } from '../services/dataService.js';

const editTemplate = (fruit, editFruit) => html`
  <section id="edit">
    <div class="form" @submit=${editFruit}>
      <h2>Edit Fruit</h2>
      <form class="edit-form">
        <input type="text" name="name" id="name" value=${fruit.name} placeholder="Fruit Name" />
        <input type="text" name="imageUrl" id="Fruit-image" value=${fruit.imageUrl} placeholder="Fruit Image URL" />
        <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50">
${fruit.description}</textarea
        >
        <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50">${fruit.nutrition}</textarea>
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export function editView(ctx, fruit) {
  ctx.render(editTemplate(fruit, editFruit));

  async function editFruit(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const name = formData.get('name');
    const imageUrl = formData.get('imageUrl');
    const description = formData.get('description');
    const nutrition = formData.get('nutrition');
    const id = ctx.params.id;
    const body = { name, imageUrl, description, nutrition };

    const fruit = await editFruitById(id, body);
    ctx.page.redirect('/dashboard');
  }
}
