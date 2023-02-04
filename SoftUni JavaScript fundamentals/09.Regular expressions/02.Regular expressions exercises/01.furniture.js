function furniture(data) {
  let pattern = />>(?<item>[A-Z][A-Za-z]+)<<(?<price>\d+\.?(\d+)?)!(?<quantity>\d+)\b/g
  let validate = pattern.exec(data)
  let sum = 0

  console.log('Bought furniture:');
  while (validate !== null) {
    let item = validate.groups['item'];
    let price = validate.groups['price'];
    let quantity = validate.groups['quantity']
    console.log(`${item}`);
    sum += Number(price) * Number(quantity)
    validate = pattern.exec(data)
  }

  console.log(`Total money spend: ${sum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);
