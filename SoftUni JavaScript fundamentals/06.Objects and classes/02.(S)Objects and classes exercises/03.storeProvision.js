function storeProvision(currentStock, orderedStock) {
  let storedProducts = {};

  for (let i = 0; i < currentStock.length; i += 2) {
    let currentProduct = currentStock[i];
    storedProducts[currentProduct] = Number(currentStock[i + 1]);
  }
  for (let i = 0; i < orderedStock.length; i += 2) {
    let currentProduct = orderedStock[i];
    if (!storedProducts.hasOwnProperty(currentProduct)) {
      storedProducts[currentProduct] = Number(orderedStock[i + 1]);
    } else {
      storedProducts[currentProduct] += Number(orderedStock[i + 1]);
    }
  }

  for (const element of Object.keys(storedProducts)) {
    console.log(`${element} -> ${storedProducts[element]}`);
  }
}

storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
