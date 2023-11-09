class Person {
  private name: string;
  private age: number

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age
  }

  public get personalInfo(): string {
    return `${this.name} is ${this.age} years old.`;
  }
}

const me = new Person('Nikolay', 35);
console.log(me.personalInfo);