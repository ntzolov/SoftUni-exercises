class Rectangle {
  width: number
  height: number
  color: string

  constructor(width: number, height: number, color: string) {
    this.width = width
    this.height = height
    this.color = color
  }

  calcArea(): number {
    return this.width * this.height
  }
}

let rect = new Rectangle(4, 5, 'Red');
console.log(rect.width);
console.log(rect.height);
console.log(rect.color);
console.log(rect.calcArea());
