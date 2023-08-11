import { deleteIdeaById, getIdeaById } from '../data.js';

const section = document.getElementById('details-view');

let context = null;
export async function detailsView(ctx, id) {
  context = ctx;
  const idea = await getIdeaById(id);
  ctx.showSection(section);

  const userData = JSON.parse(localStorage.getItem('user'));
  const isOwner = userData && userData._id === idea._ownerId;

  section.innerHTML = createHTML(idea, isOwner);
  if (isOwner) {
    section.querySelector('a').addEventListener('click', async (e) => {
      e.preventDefault();
      await deleteIdeaById(idea._id);
      context.goTo('/catalog');
    });
  }

  function createHTML(idea, isOwner) {
    let html = `
    <img class="det-img" src="${idea.img}" />
    <div class="desc">
        <h2 class="display-5">${idea.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${idea.description}</p>
    </div>
    `;

    if (isOwner) {
      html += `
      <div class="text-center">
      <a class="btn detb" href="">Delete</a>
  </div>
      `;
    }

    return html;
  }
}
