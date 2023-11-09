"use strict";
class Car {
    constructor(brand, model, horsepower) {
        this._brand = brand;
        this._model = model;
        this._horsepower = horsepower;
    }
    get brand() {
        return this._brand;
    }
    set brand(newBrand) {
        this._brand = newBrand;
    }
    get model() {
        return this._model;
    }
    set model(newBrand) {
        this._model = newBrand;
    }
    get horsepower() {
        return this._horsepower;
    }
    set horsepower(newBrand) {
        this._horsepower = newBrand;
    }
    getInfo() {
        return console.log(`The car is: ${this._brand} ${this._model} - ${this._horsepower} HP.`);
    }
}
const myCar = new Car('Opel', 'Astra', 101);
myCar.getInfo();
