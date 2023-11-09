class Car {
  private _brand: string;
  private _model: string;
  private _horsepower: number;

  constructor(brand: string, model: string, horsepower: number) {
    this._brand = brand;
    this._model = model;
    this._horsepower = horsepower
  }

  get brand() {
    return this._brand
  }

  set brand(newBrand: string) {
    this._brand = newBrand
  }

  get model() {
    return this._model
  }

  set model(newBrand: string) {
    this._model = newBrand
  }

  get horsepower() {
    return this._horsepower
  }

  set horsepower(newBrand: number) {
    this._horsepower = newBrand
  }

  public getInfo(): void {
    return console.log(`The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`);
  }
}

const myCar = new Car('Opel', 'Astra', 101);
myCar.getInfo()