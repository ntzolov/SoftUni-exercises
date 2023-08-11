import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllItems } from '../data/items.js';

const itemCard = (item) => html`
  <div class="post">
    <h2 class="post-title">${item.title}</h2>
    <img class="post-image" src=${item.imageUrl} alt="Material Image" />
    <div class="btn-wrapper">
      <a href="/details/${item._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

const homeTemplate = (items) => html`
  <section id="dashboard-page">
    <h1 class="title">All Posts</h1>

    ${items.length === 0
      ? html`
          <h1 class="title no-posts-title">No posts yet!</h1>
        `
      : html`
          <div class="all-posts">${items.map((item) => itemCard(item))}</div>
        `}
  </section>
`;

export async function homeView(ctx) {
  const items = await getAllItems();

  ctx.render(homeTemplate(items));
}
