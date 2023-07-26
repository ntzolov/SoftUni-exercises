import { html } from '../../node_modules/lit-html/lit-html.js';
import { createAlbum } from '../data/albums.js';

const createTemplate = (onCreate) => html`
  <section id="create">
    <div class="form">
      <h2>Add Album</h2>
      <form class="create-form" @submit=${onCreate}>
        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" name="album" id="album-album" placeholder="Album" />
        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" name="release" id="album-release" placeholder="Release date" />
        <input type="text" name="label" id="album-label" placeholder="Label" />
        <input type="text" name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export function createView(ctx) {
  ctx.render(createTemplate(onCreate));

  async function onCreate(e) {
    e.preventDefault();

    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(new FormData(document.querySelector('form')));

    if ([singer, album, imageUrl, release, label, sales].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    await createAlbum({ singer, album, imageUrl, release, label, sales });
    ctx.page.redirect('/dashboard');
  }
}
