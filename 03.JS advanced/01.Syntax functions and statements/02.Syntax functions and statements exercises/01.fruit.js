function fruit(fruit, weight, pricePerKilogram) {
  let price = (pricePerKilogram * (weight / 1000)).toFixed(2);
  console.log(`I need $${price} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.8);
