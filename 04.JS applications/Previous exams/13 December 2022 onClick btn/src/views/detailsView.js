import { html } from '../../node_modules/lit-html/lit-html.js';
import { addBuy, getTotalBuys, isUserBought } from '../data/buys.js';
import { deleteProductById, getProductById } from '../data/products.js';
import { getUser } from '../util.js';

const detailsTemplate = (product, userData, isOwner, onDelete, onBuy) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src=${product.imageUrl} alt="example1" />
      <p id="details-title">${product.name}</p>
      <p id="details-category">
        Category:
        <span id="categories">${product.category}</span>
      </p>
      <p id="details-price">
        Price:
        <span id="price-number">${product.price}</span>
        $
      </p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>
            Bought:
            <span id="buys">${product.buysCount}</span>
            times.
          </h4>
          <span>${product.description}</span>
        </div>
      </div>

      <div id="action-buttons">
        ${userData && isOwner
          ? html`
              <a href="/details/${product._id}/edit" id="edit-btn">Edit</a>
              <a href="javascript:void(0)" id="delete-btn" @click=${onDelete}>Delete</a>

              <!--Bonus - Only for logged-in users ( not authors )-->
            `
          : userData && !product.isBought
          ? html`
              <a href="javascript:void(0)" @click=${onBuy} id="buy-btn">Buy</a>
            `
          : null}
      </div>
    </div>
  </section>
`;

export async function detailsView(ctx) {
  const productId = ctx.params.id;
  const product = await getProductById(productId);
  const userData = getUser();

  let isOwner;
  if (userData) {
    isOwner = product._ownerId === userData._id;
    const isBought = Number(await isUserBought(productId, userData._id));
    product.isBought = isBought === 0 ? false : true;
  }
  
  product.buysCount = await getTotalBuys(productId);
  ctx.render(detailsTemplate(product, userData, isOwner, onDelete, onBuy));

  async function onDelete() {
    await deleteProductById(productId);
    ctx.page.redirect('/products');
  }

  async function onBuy() {
    await addBuy(productId);
    ctx.page.redirect('/details/' + productId);
  }
}
