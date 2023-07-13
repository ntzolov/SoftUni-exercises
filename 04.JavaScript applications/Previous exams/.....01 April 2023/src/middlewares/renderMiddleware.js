import { render } from '../../node_modules/lit-html/lit-html.js';

const mainElement = document.querySelector('main');
const renderView = (template) => {
  render(template, mainElement);
};

export function renderMiddleware(ctx, next) {
  ctx.render = renderView;

  next();
}
