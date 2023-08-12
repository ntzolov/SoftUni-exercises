function personInfo(name, lastName, age) {
  let person = {
    firstName: name,
    lastName: lastName,
    age: Number(age),
  };
  return person;
}

console.log(personInfo('Peter', 'Pan', '20'));
