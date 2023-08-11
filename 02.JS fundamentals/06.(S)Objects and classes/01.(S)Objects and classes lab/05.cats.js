function cats(arrayInput) {
  class Cat {
    constructor(name, age) {
      (this.name = name), (this.age = age);
    }

    meow() {
      console.log(`${this.name}, age ${this.age} says Meow`);
    }
  }
  for (const line of arrayInput) {
    let currCat = line.split(' ')
    let name = currCat[0];
    let age = Number(currCat[1]);

    let cat = new Cat(name, age);
    cat.meow()
  }
}

cats(['Mellow 2', 'Tom 5']);
