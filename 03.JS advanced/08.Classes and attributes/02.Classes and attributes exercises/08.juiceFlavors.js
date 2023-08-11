function juiceFlavors(input) {
  const inStock = {};
  const bottles = {};

  for (let line of input) {
    let [fruit, quantity] = line.split(' => ');
    quantity = +quantity;

    if (!inStock.hasOwnProperty(fruit)) {
      inStock[fruit] = 0;
    }
    inStock[fruit] += quantity;
    
    if (inStock[fruit] >= 1000) {
      if (!bottles.hasOwnProperty(fruit)){
        bottles[fruit] = 0
      }
      bottles[fruit] += Math.trunc(inStock[fruit] / 1000);
      inStock[fruit] = inStock[fruit] % 1000
    }
  }

  for (let fruit in bottles) {
    console.log(`${fruit} => ${bottles[fruit]}`);
  }
}

juiceFlavors([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);
