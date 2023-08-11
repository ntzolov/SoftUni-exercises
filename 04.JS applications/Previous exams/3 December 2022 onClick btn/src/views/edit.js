import { html } from '../../node_modules/lit-html/lit-html.js';
import { editAlbumById, getAlbumById } from '../data/albums.js';

const editTemplate = (album, onEdit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit Album</h2>
      <form class="edit-form" @submit=${onEdit}>
        <input type="text" .value=${album.singer} name="singer" id="album-singer" placeholder="Singer/Band" />
        <input type="text" .value=${album.album} name="album" id="album-album" placeholder="Album" />
        <input type="text" .value=${album.imageUrl} name="imageUrl" id="album-img" placeholder="Image url" />
        <input type="text" .value=${album.release} name="release" id="album-release" placeholder="Release date" />
        <input type="text" .value=${album.label} name="label" id="album-label" placeholder="Label" />
        <input type="text" .value=${album.sales} name="sales" id="album-sales" placeholder="Sales" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function editView(ctx) {
  const albumId = ctx.params.id;
  const album = await getAlbumById(albumId);

  ctx.render(editTemplate(album, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    const { singer, album, imageUrl, release, label, sales } = Object.fromEntries(new FormData(document.querySelector('form')));

    if ([singer, album, imageUrl, release, label, sales].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    await editAlbumById(albumId, { singer, album, imageUrl, release, label, sales });
    ctx.page.redirect('/dashboard');
  }
}
