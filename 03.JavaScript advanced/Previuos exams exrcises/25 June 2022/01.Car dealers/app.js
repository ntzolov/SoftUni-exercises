window.addEventListener('load', solve);

function solve() {
  const make = document.getElementById('make');
  const model = document.getElementById('model');
  const year = document.getElementById('year');
  const fuel = document.getElementById('fuel');
  const priceOriginal = document.getElementById('original-cost');
  const priceSelling = document.getElementById('selling-price');

  const btnPublish = document.getElementById('publish');
  btnPublish.addEventListener('click', (e) => {
    e.preventDefault();

    const data = {
      make: make.value,
      model: model.value,
      year: year.value,
      fuel: fuel.value,
      priceOriginal: priceOriginal.value,
      priceSelling: priceSelling.value,
    };

    for (const key in data) {
      if (data[key] === '') {
        return;
      }
    }

    if (Number(data.priceSelling) <= Number(data.priceOriginal)) {
      return;
    }

    const tbody = document.getElementById('table-body');
    const tr = document.createElement('tr');
    tr.classList.add('row');
    const tdMake = document.createElement('td');
    tdMake.textContent = data.make;
    const tdModel = document.createElement('td');
    tdModel.textContent = data.model;
    const tdYear = document.createElement('td');
    tdYear.textContent = data.year;
    const tdFuel = document.createElement('td');
    tdFuel.textContent = data.fuel;
    const tdPriceOriginal = document.createElement('td');
    tdPriceOriginal.textContent = data.priceOriginal;
    const tdPriceSelling = document.createElement('td');
    tdPriceSelling.textContent = data.priceSelling;
    const tdButtons = document.createElement('td');

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('action-btn', 'edit');
    btnEdit.textContent = 'Edit';
    btnEdit.addEventListener('click', (e) => {
      e.preventDefault();

      make.value = data.make;
      model.value = data.model;
      year.value = data.year;
      fuel.value = data.fuel;
      priceOriginal.value = data.priceOriginal;
      priceSelling.value = data.priceSelling;

      tbody.innerHTML = '';
    });

    const btnSell = document.createElement('button');
    btnSell.classList.add('action-btn', 'sell');
    btnSell.textContent = 'Sell';
    btnSell.addEventListener('click', (e) => {
      e.preventDefault();

      const tr = e.target.parentElement.parentElement;
      console.log(tr);
      const make = tr.getElementsByTagName('td')[0].textContent;
      console.log(make);
      const model = tr.getElementsByTagName('td')[1].textContent;
      const year = tr.getElementsByTagName('td')[2].textContent;
      const priceOriginal = Number(
        tr.getElementsByTagName('td')[4].textContent
      );
      const priceSelling = Number(tr.getElementsByTagName('td')[5].textContent);
      const profit = priceSelling - priceOriginal;

      const ul = document.getElementById('cars-list');
      const li = document.createElement('li');
      li.classList.add('each-list');
      const spanMakeModel = document.createElement('span');
      spanMakeModel.textContent = `${make} ${model}`;
      const spanYear = document.createElement('span');
      spanYear.textContent = year;
      const spanPrice = document.createElement('span');
      spanPrice.textContent = profit;

      li.appendChild(spanMakeModel);
      li.appendChild(spanYear);
      li.appendChild(spanPrice);

      ul.appendChild(li);
      tr.remove();

      const profitElement = document.getElementById('profit');
      const oldProfit = Number(profitElement.textContent);
      profitElement.textContent = (oldProfit + profit).toFixed(2);
    });

    tdButtons.appendChild(btnEdit);
    tdButtons.appendChild(btnSell);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdPriceOriginal);
    tr.appendChild(tdPriceSelling);
    tr.appendChild(tdButtons);

    tbody.appendChild(tr);

    make.value = '';
    model.value = '';
    year.value = '';
    fuel.value = '';
    priceOriginal.value = '';
    priceSelling.value = '';
  });
}
