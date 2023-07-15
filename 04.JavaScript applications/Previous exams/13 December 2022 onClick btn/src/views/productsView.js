import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllProducts } from '../data/products.js';

const productTemplate = (product) => html`
  <div class="product">
    <img src=${product.imageUrl} alt="example1" />
    <p class="title">${product.name}</p>
    <p>
      <strong>Price:</strong>
      <span class="price">${product.price}</span>
      $
    </p>
    <a class="details-btn" href="/details/${product._id}">Details</a>
  </div>
`;

const productsTemplate = (products) => html`
  <h2>Products</h2>
  ${products.length > 0
    ? html`
        <section id="dashboard">${products.map((product) => productTemplate(product))}</section>
      `
    : html`
        <h2>No products yet.</h2>
      `}

  <!-- Display an h2 if there are no posts -->
`;

export async function productsView(ctx) {
  const products = await getAllProducts();
  ctx.render(productsTemplate(products));
}
