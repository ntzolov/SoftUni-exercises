function createElement(tagName, textContent, attributes, children = []) {

  const element = document.createElement(tagName);

  const PARAMS = {
    class: (value) => element.classList.add(value),
    id: (value) => (element.id = value),
    onclick: (value) => element.addEventListener('click', value),
    disabled: () => element.setAttribute('disabled', ''),
    src: (value) => element.setAttribute('src', value),
  };

  if (textContent) {
    element.textContent = textContent;
  }

  if (attributes) {
    Object.entries(attributes).forEach(([param, value]) =>
      PARAMS[param](value)
    );
  }

  if (children.length == 0) {
    return element;
  }

  children.forEach((c) => element.appendChild(c));

  return element;
}

// Пример за използване:
// const divContainer = createElement(
//   'div',
//   null,
//   { class: 'container', onclick: onRepair },
//   [
//     createElement('h2', `Product type for repair: ${productType}`),
//     createElement('h3', `Client information: ${clientName}, ${clientPhone}`),
//     createElement('h4', `Description of the problem: ${description}`),
//     createElement('button', 'Start repair', { class: 'start-btn' }),
//     createElement('button', 'Finish repair', {
//       class: 'finish-btn',
//       disabled: true,
//     }),
//   ]
// );
