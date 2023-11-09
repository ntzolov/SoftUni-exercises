interface Dealership {
  dealershipName: string,
  soldCars: number,
}

interface Actions {
  sellCar<T>(dealerID: T, model: T): void
}

class CarDealership implements Dealership, Actions {
  public modelsSold = {}
  soldCars: number = 0
  dealershipName: string

  constructor(dealershipName: string) {
    this.dealershipName = dealershipName
  }

  sellCar<T>(dealerID: T, model: T) {
    const soldCar = {
      dealerID: model
    }
    this.modelsSold = { ...this.modelsSold, soldCar }
    this.soldCars++
  };

  showDetails() {
    console.log(this.modelsSold);
    const toPrint: [] = []
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
