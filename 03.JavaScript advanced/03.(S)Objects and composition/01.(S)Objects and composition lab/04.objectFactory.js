function factory(library, orders) {
  const result = [];

  for (let order of orders) {
    let currObject = Object.assign({}, order.template);
    for (let part of order.parts) {
      currObject[part] = library[part];
    }
    result.push(currObject);
  }
  return result;
}