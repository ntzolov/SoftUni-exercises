function phoneBook(array) {
  let phoneBook = {};
  for (const line of array) {
    let currName = line.split(' ')[0];
    let currNumber = line.split(' ')[1];
    phoneBook[currName] = currNumber
  }
  for (let name in phoneBook) {
    console.log(`${name} -> ${phoneBook[name]}`);
  }
}

phoneBook([
  'Tim 0834212554',
  'Peter 0877547887',
  'Bill 0896543112',
  'Tim 0876566344',
]);
