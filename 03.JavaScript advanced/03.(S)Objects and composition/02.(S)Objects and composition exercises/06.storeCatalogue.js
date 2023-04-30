function storeCatalogue(arr) {
  let products = {};

  for (let line of arr) {
    let [name, price] = line.split(' : ');
    price = Number(price);
    products[name] = price;
  }

  let productsSorted = Object.entries(products).sort((a, b) =>
    a[0].localeCompare(b[0])
  );

  let letter = productsSorted[0][0][0];
  console.log(letter);
  for (let product of productsSorted) {
    if (product[0][0] !== letter) {
      letter = product[0][0];
      console.log(letter);
    }
    console.log(`  ${product[0]}: ${product[1]}`);
  }
}

storeCatalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
