class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

   static distance(p1, p2) {
    const x = p1.x - p2.x;
    const y = p1.y - p2.y;
    return Math.sqrt(x ** 2 + y ** 2);
  }
}

let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));

