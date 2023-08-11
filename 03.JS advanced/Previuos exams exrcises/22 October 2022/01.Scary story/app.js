window.addEventListener('load', solve);

function solve() {
  const firstName = document.getElementById('first-name');
  const lastName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const storyTitle = document.getElementById('story-title');
  const genre = document.getElementById('genre');
  const story = document.getElementById('story');

  const btnPublish = document.getElementById('form-btn');
  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
      firstName: firstName.value,
      lastName: lastName.value,
      age: age.value,
      storyTitle: storyTitle.value,
      genre: genre.value,
      story: story.value,
    };

    for (const key in data) {
      if (data[key] === '') {
        return;
      }
    }

    const ul = document.getElementById('preview-list');
    const li = document.createElement('li');
    li.classList.add('story-info');
    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = `Name: ${firstName.value} ${lastName.value}`;
    const pAge = document.createElement('p');
    pAge.textContent = `Age: ${age.value}`;
    const pTitle = document.createElement('p');
    pTitle.textContent = `Title: ${storyTitle.value}`;
    const pGenre = document.createElement('p');
    pGenre.textContent = `Genre: ${genre.value}`;
    const pStory = document.createElement('p');
    pStory.textContent = story.value;

    article.appendChild(h4);
    article.appendChild(pAge);
    article.appendChild(pTitle);
    article.appendChild(pGenre);
    article.appendChild(pStory);

    const btnSave = document.createElement('button');
    btnSave.classList.add('save-btn');
    btnSave.textContent = 'Save Story';
    btnSave.addEventListener('click', (e) => {
      e.preventDefault();

      const divMain = document.getElementById('main');
      const h1 = document.createElement('h1');
      h1.textContent = 'Your scary story is saved!';

      divMain.innerHTML = '';
      divMain.appendChild(h1);
    });

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.textContent = 'Edit Story';
    btnEdit.addEventListener('click', (e) => {
      e.preventDefault();

      firstName.value = data.firstName;
      lastName.value = data.lastName;
      age.value = data.age;
      storyTitle.value = data.storyTitle;
      genre.value = data.genre;
      story.value = data.story;

      btnPublish.disabled = false;
      e.target.parentElement.remove();
    });

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('delete-btn');
    btnDelete.textContent = 'Delete Story';
    btnDelete.addEventListener('click', (e) => {
      e.preventDefault();

      btnPublish.disabled = false;
      e.target.parentElement.remove();
    });

    li.appendChild(article);
    li.appendChild(btnSave);
    li.appendChild(btnEdit);
    li.appendChild(btnDelete);
    ul.appendChild(li);

    firstName.value = '';
    lastName.value = '';
    age.value = '';
    storyTitle.value = '';
    genre.value = '';
    story.value = '';

    btnPublish.disabled = true;
  });
}
