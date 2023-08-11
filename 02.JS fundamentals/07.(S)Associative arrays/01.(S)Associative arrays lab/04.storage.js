function storage(input) {
  let map = new Map()
  for (const line of input) {
    let [product, quantity] = line.split(' ');
    quantity = Number(quantity)
    if (map.has(product)) {
      quantity += map.get(product)
    }
    map.set(product, quantity)
  }
  for (let [product, quantity] of map) {
    console.log(`${product} -> ${quantity}`);
  }
}

storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)