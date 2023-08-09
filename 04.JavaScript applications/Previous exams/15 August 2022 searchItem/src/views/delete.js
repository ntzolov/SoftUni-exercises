import { deleteShoeById } from '../data/shoes.js';

export async function deleteView(ctx) {
  const shoeId = ctx.params.id;
  await deleteShoeById(shoeId);
  ctx.page.redirect('/dashboard');
}
