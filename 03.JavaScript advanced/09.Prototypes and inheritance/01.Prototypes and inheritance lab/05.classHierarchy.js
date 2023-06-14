function solve() {
  class Figure {
    constructor() {
      this.units = 'cm';
    }

    get area() {
      return;
    }

    changeUnits(value) {
      this.units = value;
    }

    toString() {
      return `Figures units: ${this.units}`;
    }
  }

  class Circle extends Figure {
    constructor(radius) {
      super();
      this.radius = radius;
    }

    get area() {
      if (this.units === 'm') {
        return (Math.PI * this.radius ** 2) / 100;
      }
      if (this.units === 'mm') {
        return Math.PI * this.radius ** 2 * 100;
      }
      return Math.PI * this.radius ** 2;
    }

    toString() {
      const radius =
        this.units === 'm'
          ? this.radius / 100
          : this.units === 'mm'
          ? this.radius * 10
          : this.radius;

      return `Figures units: ${this.units} Area: ${this.area} - radius: ${radius}`;
    }
  }

  class Rectangle extends Figure {
    constructor(width, height, units) {
      super();
      this.width = width;
      this.height = height;
      this.units = units;
    }

    get area() {
      if (this.units === 'm') {
        return (this.width * this.height) / 100;
      }
      if (this.units === 'mm') {
        return this.width * this.height * 100;
      }

      return this.width * this.height;
    }

    toString() {
      const width =
        this.units === 'm'
          ? this.width / 100
          : this.units === 'mm'
          ? this.width * 10
          : this.width;
      const height =
        this.units === 'm'
          ? this.height / 100
          : this.units === 'mm'
          ? this.height * 10
          : this.height;
      return `Figures units: ${this.units} Area: ${this.area} - width: ${width}, height: ${height}`;
    }
  }

  return { Figure, Circle, Rectangle };

  // let c = new Circle(5);
  // console.log(c.area); // 78.53981633974483
  // console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

  // let r = new Rectangle(3, 4, 'mm');
  // console.log(r.area); // 1200
  // console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

  // r.changeUnits('cm');
  // console.log(r.area); // 12
  // console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4

  // c.changeUnits('mm');
  // console.log(c.area); // 7853.981633974483
  // console.log(c.toString()); // Figures units: mm Area: 7853.981633974483 - radius: 50
}

solve();
