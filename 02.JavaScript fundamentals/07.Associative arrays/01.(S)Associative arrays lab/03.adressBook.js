function addressBook(input) {
  let addressBook = {};

  for (const line of input) {
    let [name, address] = line.split(':');
    addressBook[name] = address;
  }

  let listAddresses = Object.entries(addressBook).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  let sortedAddressBook = Object.fromEntries(listAddresses);

  for (let name in sortedAddressBook) {
    console.log(`${name} -> ${sortedAddressBook[name]}`);
  }
}

addressBook([
  'Tim:Doe Crossing',
  'Bill:Nelson Place',
  'Peter:Carlyle Ave',
  'Bill:Ornery Rd',
]);
