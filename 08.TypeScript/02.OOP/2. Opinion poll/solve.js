"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get personalInfo() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const me = new Person('Nikolay', 35);
console.log(me.personalInfo);
