function lowestPricesInCities(arr) {
  let result = {};

  for (let line of arr) {
    let [town, product, price] = line.split(' | ');
    price = Number(price);
    let productArr = [price, town];
    if (!result[product]) {
      result[product] = productArr
    }
    if (price < result[product][0]) {
      result[product] = productArr
    }
    
  }

  for (let el in result) {
    console.log(`${el} -> ${result[el][0]} (${result[el][1]})`);
  }

}

lowestPricesInCities([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);
