"use strict";
class Animal {
    constructor() {
    }
    eat() {
        return console.log('eating...');
    }
}
class Dog extends Animal {
    constructor() {
        super();
    }
    bark() {
        return console.log('barking...');
    }
}
class Cat extends Animal {
    constructor() {
        super();
    }
    meow() {
        return console.log('meowing...');
    }
}
const myDog = new Dog();
myDog.eat();
