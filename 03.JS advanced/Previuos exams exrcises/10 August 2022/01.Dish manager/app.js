window.addEventListener('load', solve);

function solve() {
  const fName = document.getElementById('first-name');
  const lName = document.getElementById('last-name');
  const age = document.getElementById('age');
  const gender = document.getElementById('genderSelect');
  const task = document.getElementById('task');

  const btnSubmit = document.getElementById('form-btn');
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
      fName: fName.value,
      lName: lName.value,
      age: age.value,
      gender: gender.value,
      task: task.value,
    };

    for (const input in data) {
      if (data[input] === '') {
        return;
      }
    }

    fName.value = '';
    lName.value = '';
    age.value = '';
    gender.value = '';
    task.value = '';

    const counter = document.getElementById('progress-count');
    let numberOfCounter = Number(counter.textContent);
    numberOfCounter++;
    counter.textContent = numberOfCounter;

    const ul = document.getElementById('in-progress');
    const li = document.createElement('li');
    li.classList.add('each-line');
    const article = document.createElement('article');
    const h4 = document.createElement('h4');
    h4.textContent = `${data.fName} ${data.lName}`;
    const pGenderAge = document.createElement('p');
    pGenderAge.textContent = `${data.gender}, ${data.age}`;
    const pDescription = document.createElement('p');
    pDescription.textContent = `Dish description: ${data.task}`;

    article.appendChild(h4);
    article.appendChild(pGenderAge);
    article.appendChild(pDescription);

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.textContent = 'Edit';
    btnEdit.addEventListener('click', (e) => {
      e.preventDefault();

      fName.value = data.fName;
      lName.value = data.lName;
      age.value = data.age;
      gender.value = data.gender;
      task.value = data.task;

      const counter = document.getElementById('progress-count');
      let numberOfCounter = Number(counter.textContent);
      numberOfCounter--;
      counter.textContent = numberOfCounter;
      e.target.parentElement.remove();
    });

    const btnComplete = document.createElement('button');
    btnComplete.classList.add('complete-btn');
    btnComplete.textContent = 'Mark as complete';
    btnComplete.addEventListener('click', (e) => {
      e.preventDefault();

      const counter = document.getElementById('progress-count');
      let numberOfCounter = Number(counter.textContent);
      numberOfCounter--;
      counter.textContent = numberOfCounter;

      const li = e.target.parentElement;
      const buttons = Array.from(li.querySelectorAll('button'));
      buttons.forEach((button) => button.remove());

      const ul = document.getElementById('finished');
      ul.appendChild(li);
    });

    li.appendChild(article);
    li.appendChild(btnEdit);
    li.appendChild(btnComplete);
    ul.appendChild(li);
  });

  document.getElementById('clear-btn').addEventListener('click', () => {
    document.getElementById('finished').innerHTML = '';
  });
}
