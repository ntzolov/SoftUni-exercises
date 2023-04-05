function catalogue(array) {
  class Product {
    constructor(product, price) {
      this.product = product;
      this.price = price;
    }
  }

  let list = [];

  for (const line of array) {
    let [product, price] = line.split(' : ');
    list.push(new Product(product, price));
  }

  list = list.sort((a, b) => {
    let x = a.product.toLowerCase();
    let y = b.product.toLowerCase();
    return x.localeCompare(y);
  });

  let previousLetter;

  list.forEach((obj, index) => {
    let letter = obj.product[0]

    if (index === 0) {
      console.log(letter);
      previousLetter = obj.product[0];
    }

    if (letter !== previousLetter) {
      console.log(letter);
      console.log(`  ${obj.product}: ${obj.price}`);
    } else {
      console.log(`  ${obj.product}: ${obj.price}`);
    }
    previousLetter = obj.product[0];

  });
}

catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
