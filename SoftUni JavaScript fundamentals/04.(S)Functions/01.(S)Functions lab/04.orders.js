function orders(product, quantity) {
  let price = 0;
  switch (product) {
    case 'coffee':
      price = quantity * 1.5;
      break;
    case 'coke':
      price = quantity * 1.4;
      break;
    case 'water':
      price = quantity * 1.0;
      break;
    case 'snacks':
      price = quantity * 2.0;
      break;
  }
  console.log(price.toFixed(2));
}

orders('water', 5);
