class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + ' ' + this.lastName;
  }

  set fullName(fullName) {
    const [firstName, lastName] = fullName.split(' ');
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let person = new Person('Nikolay', 'Tzolov');
console.log(person.fullName);
person.fullName = 'Valentina Tzolova';
console.log(person.lastName);
