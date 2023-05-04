class List {
  constructor() {
    this.values = [];
    this.size = this.values.length;
  }

  add(value) {
    this.size++;
    this.values.push(value);
    this.values.sort((a, b) => a - b);
  }

  remove(index) {
    if (index < 0 || index > this.values.length - 1) {
      throw new RangeError('index out of range');
    }
    this.size--;
    this.values.splice(index, 1);
  }

  get(index) {
    if (index < 0 || index > this.values.length - 1) {
      throw new RangeError('index out of range');
    }
    return this.values[index];
  }
}

let list = new List();
list.add(5);
list.add(6);
list.add(3);
console.log(list.get(0));
list.remove(0);
console.log(list.get(0));
console.log(list.size);
