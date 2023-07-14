import { html } from '../../node_modules/lit-html/lit-html.js';
import { createFruit } from '../services/dataService.js';

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Add Fruit</h2>
      <form class="create-form" @submit=${onCreate}>
        <input type="text" name="name" id="name" placeholder="Fruit Name" />
        <input type="text" name="imageUrl" id="Fruit-image" placeholder="Fruit Image" />
        <textarea id="fruit-description" name="description" placeholder="Description" rows="10" cols="50"></textarea>
        <textarea id="fruit-nutrition" name="nutrition" placeholder="Nutrition" rows="10" cols="50"></textarea>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    const formData = new FormData(document.querySelector('form'));
    const { name, imageUrl, description, nutrition } = Object.fromEntries(formData);

    if (name === '' || imageUrl === '' || description === '' || nutrition === '') {
      return alert('All fields are required!');
    }

    createFruit({ name, imageUrl, description, nutrition });
    ctx.page.redirect('/dashboard');
  }
}
