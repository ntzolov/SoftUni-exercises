window.addEventListener('load', solve);

function solve() {
  const gemName = document.getElementById('gem-name');
  const color = document.getElementById('color');
  const carats = document.getElementById('carats');
  const price = document.getElementById('price');
  const type = document.getElementById('type');
  const btnAdd = document.getElementById('add-btn');
  const preview = document.getElementById('preview-list');
  const collection = document.getElementById('collection');

  btnAdd.addEventListener('click', addGem);

  const values = {};

  function addGem() {
    if (
      gemName.value !== '' &&
      color.value !== '' &&
      carats.value !== '' &&
      price.value !== '' &&
      type.value !== ''
    ) {
      values['gemName'] = gemName.value;
      values['color'] = color.value;
      values['carats'] = carats.value;
      values['price'] = price.value;
      values['type'] = type.value;

      const li = document.createElement('li');
      li.classList.add('gem-info');
      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      h4.innerText = gemName.value;

      article.appendChild(h4);
      li.appendChild(article);

      let p = document.createElement('p');
      p.innerText = `Color: ${color.value}`;
      article.appendChild(p);
      p = document.createElement('p');
      p.innerText = `Carats: ${carats.value}`;
      article.appendChild(p);
      p = document.createElement('p');
      p.innerText = `Price: ${price.value} $`;
      article.appendChild(p);
      p = document.createElement('p');
      p.innerText = `Type: ${type.value}`;
      article.appendChild(p);

      preview.appendChild(li);

      btnAdd.disabled = true;

      gemName.value = '';
      color.value = '';
      carats.value = '';
      price.value = '';
      type.value = '';

      let button = document.createElement('button');
      button.classList.add('save-btn');
      button.innerText = 'Save to Collection';
      li.appendChild(button);
      const btnSave = document.querySelector('.save-btn');
      btnSave.addEventListener('click', save);

      function save() {
        const li = document.createElement('li');
        const p = document.createElement('p');

        p.innerText = `${values.gemName} - Color: ${values.color}/ Carats: ${values.carats}/ Price: ${values.price}$/ Type: ${values.type}`;
        li.appendChild(p);
        collection.appendChild(li);

        btnAdd.disabled = false;
        preview.innerText = '';
      }

      button = document.createElement('button');
      button.classList.add('edit-btn');
      button.innerText = 'Edit Information';
      li.appendChild(button);
      const btnEdit = document.querySelector('.edit-btn');
      btnEdit.addEventListener('click', edit);

      function edit() {
        gemName.value = values.gemName;
        color.value = values.color;
        carats.value = values.carats;
        price.value = values.price;
        type.value = values.type;

        btnAdd.disabled = false;

        preview.innerText = '';
      }

      button = document.createElement('button');
      button.classList.add('cancel-btn');
      button.innerText = 'Cancel';
      li.appendChild(button);
      const btnCancel = document.querySelector('.cancel-btn');
      btnCancel.addEventListener('click', cancel);

      function cancel() {
        preview.innerText = '';
        btnAdd.disabled = false;
      }
    }
  }
}
