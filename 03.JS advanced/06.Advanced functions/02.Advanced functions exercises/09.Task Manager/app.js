function solve() {
  const btnAdd = document.getElementById('add');

  btnAdd.addEventListener('click', addItem);

  function addItem(e) {
    e.preventDefault();
    const task = document.getElementById('task');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    if (task.value && description.value && date.value) {
      const section = document.querySelectorAll('section')[1];
      const mainDiv = section.querySelectorAll('div')[1];
      mainDiv.appendChild(
        createElement('article', null, {}, [
          createElement('h3', task.value, {}, []),
          createElement('p', `Description: ${description.value}`, {}, []),
          createElement('p', `Due Date: ${date.value}`, {}, []),
          createElement('div', null, { class: 'flex' }, [
            createElement(
              'button',
              'Start',
              { class: 'green', onclick: start },
              []
            ),
            createElement(
              'button',
              'Delete',
              { class: 'red', onclick: del },
              []
            ),
          ]),
        ])
      );
    }

    task.value = '';
    description.value = '';
    date.value = '';
  }

  function start(e) {
    e.preventDefault();
    const article = e.target.parentElement.parentElement;
    const task = article.querySelector('h3').textContent;
    const description = article.querySelectorAll('p')[0].textContent;
    const date = article.querySelectorAll('p')[1].textContent;
    article.remove();

    const inProgress = document.getElementById('in-progress');
    inProgress.appendChild(
      createElement('article', null, {}, [
        createElement('h3', task, {}, []),
        createElement('p', description, {}, []),
        createElement('p', date, {}, []),
        createElement('div', null, { class: 'flex' }, [
          createElement('button', 'Delete', { class: 'red', onclick: del }, []),
          createElement(
            'button',
            'Finish',
            { class: 'orange', onclick: finish },
            []
          ),
        ]),
      ])
    );
  }

  function del(e) {
    e.preventDefault();
    e.target.parentElement.parentElement.remove();
  }

  function finish(e) {

    const article = e.target.parentElement.parentElement;
    console.log(article);
    const task = article.querySelector('h3').textContent;
    const description = article.querySelectorAll('p')[0].textContent;
    const date = article.querySelectorAll('p')[1].textContent;
    article.remove();

    const mainDiv = document
      .querySelectorAll('section')[3]
      .querySelectorAll('div')[1];

    mainDiv.appendChild(
      createElement('article', null, {}, [
        createElement('h3', task, {}, []),
        createElement('p', description, {}, []),
        createElement('p', date, {}, []),
      ])
    );
  }

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
}
