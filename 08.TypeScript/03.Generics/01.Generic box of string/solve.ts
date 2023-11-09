class Box<T> {
  result: T
  constructor(result: T) {
    this.result = result
  }

  toString = (): string => {
    return `${this.result} is of type ${typeof this.result}`
  }
}

let box1 = new Box(['test']);
let box2 = new Box(20);
let box3 = new Box('Hello');

console.log(box1.toString());
console.log(box2.toString());
console.log(box3.toString());
