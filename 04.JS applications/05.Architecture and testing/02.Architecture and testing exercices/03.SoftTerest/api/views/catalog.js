import { getAllIdeas } from '../data.js';

const section = document.getElementById('dashboard-holder');
section.addEventListener('click', onDetails);

let context = null;
export async function catalogView(ctx) {
  section.innerHTML = '';
  context = ctx;
  const allIdeas = await getAllIdeas();

  if (allIdeas.length > 0) {
    allIdeas.forEach((idea) => {
      const div = document.createElement('div');
      div.classList.add('card', 'overflow-hidden', 'current-card', 'details');
      div.style.height = '18rem';
      div.style.width = '20rem';
      div.innerHTML = `
    <div class="card-body">
      <p class="card-text">${idea.title}</p>
    </div>
    <img class="card-image" src="${idea.img}" alt="Card image cap">
    <a data-id="${idea._id}" class="btn" href="">Details</a>
    `;

      section.appendChild(div);
    });
  } else {
    const div = document.createElement('div');
    div.classList.add('card', 'overflow-hidden', 'current-card', 'details');
    div.style.height = '18rem';
    div.style.width = '20rem';
    div.innerHTML = `<h1>No ideas yet! Be the first one :)</h1>`;
  }

  ctx.showSection(section);
}

function onDetails(e) {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const id = e.target.dataset.id;
    context.goTo('/details', id);
  }
}
