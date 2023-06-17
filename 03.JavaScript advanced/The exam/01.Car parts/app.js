window.addEventListener('load', solve);

function solve() {
  const carModel = document.getElementById('car-model');
  const carYear = document.getElementById('car-year');
  const partName = document.getElementById('part-name');
  const partNumber = document.getElementById('part-number');
  const condition = document.getElementById('condition');
  const btnNext = document.getElementById('next-btn');
  btnNext.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
      carModel: carModel.value,
      carYear: carYear.value,
      partName: partName.value,
      partNumber: partNumber.value,
      condition: condition.value,
    };

    for (const key in data) {
      if (data[key] === '') {
        return;
      }
    }

    if (Number(data.carYear) < 1980 || Number(data.carYear > 2023)) {
      return;
    }

    const img = document.getElementById('complete-img');
    img.style.display = 'hidden';
    const text = document.getElementById('complete-text');
    text.textContent = '';

    const ul = document.querySelector('.info-list');

    const li = document.createElement('li');
    li.classList.add('part-content');
    const article = document.createElement('article');
    const pModel = document.createElement('p');
    pModel.textContent = `Car Model: ${data.carModel}`;
    const pYear = document.createElement('p');
    pYear.textContent = `Car Year: ${data.carYear}`;
    const pPartName = document.createElement('p');
    pPartName.textContent = `Part Name: ${data.partName}`;
    const pPartNumber = document.createElement('p');
    pPartNumber.textContent = `Part Number: ${data.partNumber}`;
    const pCondition = document.createElement('p');
    pCondition.textContent = `Condition: ${data.condition}`;

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('edit-btn');
    btnEdit.textContent = 'Edit';
    btnEdit.addEventListener('click', (e) => {
      e.preventDefault();

      carModel.value = data.carModel;
      carYear.value = data.carYear;
      partName.value = data.partName;
      partNumber.value = data.partNumber;
      condition.value = data.condition;

      e.target.parentElement.remove();
      btnNext.disabled = false;
    });

    const btnContinue = document.createElement('button');
    btnContinue.classList.add('continue-btn');
    btnContinue.textContent = 'Continue';
    btnContinue.addEventListener('click', (e) => {
      e.preventDefault();

      e.target.parentElement.remove();

      const ul = document.querySelector('.confirm-list');

      const li = document.createElement('li');
      li.classList.add('part-content');
      const article = document.createElement('article');
      const pModel = document.createElement('p');
      pModel.textContent = `Car Model: ${data.carModel}`;
      const pYear = document.createElement('p');
      pYear.textContent = `Car Year: ${data.carYear}`;
      const pPartName = document.createElement('p');
      pPartName.textContent = `Part Name: ${data.partName}`;
      const pPartNumber = document.createElement('p');
      pPartNumber.textContent = `Part Number: ${data.partNumber}`;
      const pCondition = document.createElement('p');
      pCondition.textContent = `Condition: ${data.condition}`;

      const btnConfirm = document.createElement('button');
      btnConfirm.classList.add('confirm-btn');
      btnConfirm.textContent = 'Confirm';
      btnConfirm.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.parentElement.remove();
        btnNext.disabled = false;

        img.style.display = 'block';
        text.textContent = 'Part is Ordered!';
      });

      const btnCancel = document.createElement('button');
      btnCancel.classList.add('cancel-btn');
      btnCancel.textContent = 'Cancel';
      btnCancel.addEventListener('click', (e) => {
        e.preventDefault();

        e.target.parentElement.remove();
        btnNext.disabled = false;
      });

      article.appendChild(pModel);
      article.appendChild(pYear);
      article.appendChild(pPartName);
      article.appendChild(pPartNumber);
      article.appendChild(pCondition);

      li.appendChild(article);
      li.appendChild(btnConfirm);
      li.appendChild(btnCancel);

      ul.appendChild(li);
    });

    article.appendChild(pModel);
    article.appendChild(pYear);
    article.appendChild(pPartName);
    article.appendChild(pPartNumber);
    article.appendChild(pCondition);

    li.appendChild(article);
    li.appendChild(btnEdit);
    li.appendChild(btnContinue);

    ul.appendChild(li);

    carModel.value = '';
    carYear.value = '';
    partName.value = '';
    partNumber.value = '';
    condition.value = '';

    btnNext.disabled = true;
  });
}
