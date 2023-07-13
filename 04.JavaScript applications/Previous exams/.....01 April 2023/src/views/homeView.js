import { html } from '../lib.js';

const homeTemplate = (content) => html`
  <section id="home">
    <h1>Learn more about your favorite fruits</h1>
    <img src="./images/pexels-pixabay-161559-dImkWBDHz-transformed (1).png" alt="home" />
  </section>
`;

export function homeView(ctx) {
  ctx.updateNav();
  ctx.render(homeTemplate());
}
