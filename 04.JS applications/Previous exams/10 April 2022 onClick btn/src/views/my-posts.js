import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOnlyUserItems } from '../data/items.js';
import { getUser } from '../util.js';

const itemCard = (item) => html`
  <div class="post">
    <h2 class="post-title">${item.title}</h2>
    <img class="post-image" src=${item.imageUrl} alt="Material Image" />
    <div class="btn-wrapper">
      <a href="/details/${item._id}" class="details-btn btn">Details</a>
    </div>
  </div>
`;

const myPostsTemplate = (items) => html`
<div class="my-posts">
  ${
    items.length === 0
      ? html`
          <h1 class="title no-posts-title">You have no posts yet!</h1>
        `
      : html`
          ${items.map((item) => itemCard(item))}
        `
  }
            
        </section>
`;

export async function myPostsView(ctx) {
  const userData = getUser();
  const items = await getOnlyUserItems(userData._id);
  console.log(items);

  ctx.render(myPostsTemplate(items));
}
