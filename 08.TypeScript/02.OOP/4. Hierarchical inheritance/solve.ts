class Animal {
  constructor() {

  }

  eat(): void {
    return console.log('eating...');
  }
}

class Dog extends Animal {
  constructor() {
    super()
  }

  bark(): void {
    return console.log('barking...');
  }
}

class Cat extends Animal {
  constructor() {
    super()
  }

  meow(): void {
    return console.log('meowing...');
  }
}

const myDog = new Dog();
myDog.eat()