import { html } from '../../node_modules/lit-html/lit-html.js';
import { deleteAlbumById } from '../data/albums.js';

export async function deleteView(ctx) {
  const albumId = ctx.params.id;
  await deleteAlbumById(albumId);
  ctx.page.redirect('/dashboard');
}
