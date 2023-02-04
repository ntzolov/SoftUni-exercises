function softUniBarIncome(input) {
  let totalSum = 0;
  let pattern = /%(?<name>[A-Z][a-z]*)%[^|$%.]*?<(?<product>\w+)>[^|$%.]*?\|(?<quantity>\d+)\|[^|$%.]*?(?<price>[0-9]+(\.[0-9]+)?)\$/gm
  let validate = pattern.exec(input);

  while (validate !== null) {
    let name = validate.groups['name'];
    let product = validate.groups['product'];
    let quantity = +validate.groups['quantity'];
    let price = +validate.groups['price'];
    totalSum += quantity * price;

    console.log(`${name}: ${product} - ${(quantity * price).toFixed(2)}`);
    validate = pattern.exec(input);
  }
  console.log(`Total income: ${totalSum.toFixed(2)}`);
}

softUniBarIncome([
  '%George%<Croissant>|2|10.3$',
  '%Peter%<Gum>|1|1.3$',
  '%Maria%<Cola>|1|2.4$',
  'end of shift',
]);

