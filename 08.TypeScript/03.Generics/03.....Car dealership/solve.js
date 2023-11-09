"use strict";
class CarDealership {
    constructor(dealershipName) {
        this.modelsSold = {};
        this.soldCars = 0;
        this.dealershipName = dealershipName;
    }
    sellCar(dealerID, model) {
        const soldCar = {
            dealerID: model
        };
        this.modelsSold = Object.assign(Object.assign({}, this.modelsSold), { soldCar });
        this.soldCars++;
    }
    ;
    showDetails() {
        console.log(this.modelsSold);
        const toPrint = [];
        for (let car in this.modelsSold) {
            console.log(car);
        }
        // console.log(`${this.dealershipName}:`);
    }
}
let dealership = new CarDealership('SilverStar');
dealership.sellCar('BG01', 'C Class');
dealership.sellCar('BG02', 'S Class');
dealership.sellCar('BG03', 'ML Class');
dealership.sellCar('BG04', 'CLK Class');
console.log(dealership.showDetails());
