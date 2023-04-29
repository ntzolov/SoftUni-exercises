function solve() {
  const inputs = document.querySelectorAll('textarea');
  const buttons = document.querySelectorAll('button');
  const btnGenerate = buttons[0];
  const tbody = document.querySelector('tbody');

  btnGenerate.addEventListener('click', () => {
    let inputArray = JSON.parse(inputs[0].value);
    inputArray.forEach((element) => {
      const tr = document.createElement('tr');
      let td = document.createElement('td');
      const img = document.createElement('img');
      let p = document.createElement('p');
      const input = document.createElement('input');

      img.src = element.img;
      td.appendChild(img);
      tr.appendChild(td);

      td = document.createElement('td');
      p.textContent = element.name;
      td.appendChild(p);
      tr.appendChild(td);

      td = document.createElement('td');
      p = document.createElement('p');
      p.textContent = element.price;
      td.appendChild(p);
      tr.appendChild(td);

      td = document.createElement('td');
      p = document.createElement('p');
      p.textContent = element.decFactor;
      td.appendChild(p);
      tr.appendChild(td);

      td = document.createElement('td');
      input.type = 'checkbox';
      td.appendChild(input);
      tr.appendChild(td);

      tbody.appendChild(tr);
    });
  });

  const boughtProductsArea = document.querySelector('textarea[rows="4"]');
  const btnBuy = buttons[1];

  btnBuy.addEventListener('click', () => {
    const rows = Array.from(document.querySelectorAll('tbody tr'));
    let boughtProducts = [];
    let totalPrice = 0;
    let avgFactor = [];

    rows.forEach((row) => {
      const isMarked = row.querySelector('input');
      if (isMarked.checked) {
        const cols = Array.from(row.querySelectorAll('td'));
        let name = cols[1].textContent;
        let price = Number(cols[2].textContent);
        let factor = Number(cols[3].textContent);

        boughtProducts.push(name);
        totalPrice += price;
        avgFactor.push(factor);
      }
    });

    boughtProductsArea.value = [
      `Bought furniture: ${boughtProducts.join(', ')}`,
      `Total price: ${totalPrice.toFixed(2)}`,
      `Average decoration factor: ${
        avgFactor.reduce((sum, factor) => sum + factor, 0) / avgFactor.length
      }`,
    ].join('\n');
  });
}
