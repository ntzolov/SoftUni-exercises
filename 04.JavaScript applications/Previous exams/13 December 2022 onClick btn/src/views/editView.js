import { html } from '../../node_modules/lit-html/lit-html.js';
import { editProductById, getProductById } from '../data/products.js';

const editTemplate = (product, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Product</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" .value=${product.name} name="name" id="name" placeholder="Product Name" />
        <input type="text" .value=${product.imageUrl} name="imageUrl" id="product-image" placeholder="Product Image" />
        <input type="text" .value=${product.category} name="category" id="product-category" placeholder="Category" />
        <textarea
          id="product-description"
          .value=${product.description}
          name="description"
          placeholder="Description"
          rows="5"
          cols="50"></textarea>

        <input type="text" .value=${product.price} name="price" id="product-price" placeholder="Price" />
        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const productId = ctx.params.id;
  const product = await getProductById(productId);
  ctx.render(editTemplate(product, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(document.querySelector('form')));
    const { name, imageUrl, category, description, price } = data;

    if ([name, imageUrl, category, description, price].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    await editProductById(productId, { name, imageUrl, category, description, price });
    ctx.page.redirect(`/details/${productId}`);
  }
}
