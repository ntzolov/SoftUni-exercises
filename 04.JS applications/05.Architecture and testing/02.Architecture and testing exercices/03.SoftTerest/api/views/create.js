import { createIdea } from '../data.js';

const section = document.getElementById('create-view');
const form = section.querySelector('form');
form.addEventListener('submit', onSubmit);

let context = null;
export function createView(ctx) {
  ctx.showSection(section);
  context = ctx;
}

async function onSubmit(e) {
  e.preventDefault();

  const formData = new FormData(form);
  const title = formData.get('title');
  const description = formData.get('description');
  const img = formData.get('imageURL');

  if (title.length < 6) {
    return alert('The title should be at least 6 characters long');
  }

  if (description.length < 10) {
    return alert('The description should be at least 10 characters long');
  }

  if (img.length < 5) {
    return alert('The image should be at least 5 characters long');
  }

  await createIdea({ title, description, img });

  form.reset();
  context.goTo('/catalog');
}
