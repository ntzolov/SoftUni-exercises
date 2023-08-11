import { html } from '../../node_modules/lit-html/lit-html.js';
import { editGameById, getGameById } from '../data/games.js';

const editTemplate = (game, onEdit) => html`
  <section id="edit-page" class="auth">
    <form id="edit" @submit=${onEdit}>
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" .value=${game.title} id="title" name="title" value="" />

        <label for="category">Category:</label>
        <input type="text" .value=${game.category} id="category" name="category" value="" />

        <label for="levels">MaxLevel:</label>
        <input type="number" .value=${game.maxLevel} id="maxLevel" name="maxLevel" min="1" value="" />

        <label for="game-img">Image:</label>
        <input type="text" .value=${game.imageUrl} id="imageUrl" name="imageUrl" value="" />

        <label for="summary">Summary:</label>
        <textarea name="summary" .value=${game.summary} id="summary"></textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>
`;

export async function editView(ctx) {
  const gameId = ctx.params.id;
  const game = await getGameById(gameId);
  ctx.render(editTemplate(game, onEdit));

  async function onEdit(e) {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(document.querySelector('form')));
    const { title, category, maxLevel, imageUrl, summary } = data;

    if ([title, category, maxLevel, imageUrl, summary].some((el) => el === '')) {
      return alert('All fields are required!');
    }

    await editGameById(gameId, { title, category, maxLevel, imageUrl, summary });
    ctx.page.redirect(`/details/${gameId}`);
  }
}
