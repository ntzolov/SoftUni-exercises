import { html } from '../../node_modules/lit-html/lit-html.js';
import { editOfferById, getOfferById } from '../services/data.js';

const editTemplate = (offer, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Offer</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input type="text" name="title" id="job-title" value=${offer.title} placeholder="Title" />
        <input type="text" name="imageUrl" id="job-logo" value=${offer.imageUrl} placeholder="Company logo url" />
        <input type="text" name="category" id="job-category" value=${offer.category} placeholder="Category" />
        <textarea id="job-description" name="description" placeholder="Description" rows="4" cols="50">
${offer.description}</textarea
        >
        <textarea id="job-requirements" name="requirements" placeholder="Requirements" rows="4" cols="50">
${offer.requirements}</textarea
        >
        <input type="text" name="salary" id="job-salary" value=${offer.salary} placeholder="Salary" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const id = ctx.params.id;
  const offer = await getOfferById(id);

  ctx.render(editTemplate(offer, onSubmit));

  async function onSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const title = formData.get('title');
    const imageUrl = formData.get('imageUrl');
    const category = formData.get('category');
    const description = formData.get('description');
    const requirements = formData.get('requirements');
    const salary = formData.get('salary');

    if (title === '' || imageUrl === '' || category === '' || description === '' || requirements === '' || salary === '') {
      return alert('All fields required!');
    }

    await editOfferById(id, { title, imageUrl, category, description, requirements, salary });
    ctx.page.redirect('/details/' + id);
  }
}
