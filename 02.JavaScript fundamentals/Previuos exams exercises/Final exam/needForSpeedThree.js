function needForSpeedThree(input) {
  let garage = [];

  class Car {
    constructor(model, mileage, fuel) {
      this.model = model;
      this.mileage = Number(mileage);
      this.fuel = Number(fuel);
    }

    drive(distance, fuel) {
      if (fuel > this.fuel) {
        console.log('Not enough fuel to make that ride');
      } else {
        this.mileage += distance;
        this.fuel -= fuel;
        console.log(
          `${this.model} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`
        );
      }
    }

    refuel(fuel) {
      let difference = Math.min(fuel, 75 - this.fuel);
      this.fuel += difference;
      console.log(`${this.model} refueled with ${difference} liters`);
    }

    revert(kilometers) {
      if (this.mileage - kilometers < 10000) {
        this.mileage = 10000;
      } else {
        console.log(
          `${this.model} mileage decreased by ${kilometers} kilometers`
        );
        this.mileage -= kilometers;
      }
    }
  }

  let numberOfCars = Number(input.shift());
  for (let i = 0; i < numberOfCars; i++) {
    let [model, mileage, fuel] = input.shift().split('|');
    let currCar = new Car(model, mileage, fuel);
    garage[model] = currCar;
  }

  for (let line of input) {
    line = line.split(' : ');
    let command = line.shift();
    let model;
    let mileage;
    let fuel;
    switch (command) {
      case 'Drive':
        [model, mileage, fuel] = line;
        mileage = Number(mileage);
        fuel = Number(fuel);
        garage[model].drive(mileage, fuel);
        if (garage[model].mileage > 100000) {
          console.log(`Time to sell the ${garage[model].model}!`);
          delete garage[model];
        }
        break;
      case 'Refuel':
        [model, fuel] = line;
        fuel = Number(fuel);
        garage[model].refuel(fuel);
        break;
      case 'Revert':
        [model, mileage] = line;
        mileage = Number(mileage);
        garage[model].revert(mileage);
        break;
      case 'Stop':
        for (let car in garage) {
          console.log(
            `${garage[car].model} -> Mileage: ${garage[car].mileage} kms, Fuel in the tank: ${garage[car].fuel} lt.`
          );
        }
        break;
    }
  }
}

needForSpeedThree([
  '3',
  'Audi A6|38000|62',
  'Mercedes CLS|11000|35',
  'Volkswagen Passat CC|45678|5',
  'Drive : Audi A6 : 543 : 47',
  'Drive : Mercedes CLS : 94 : 11',
  'Drive : Volkswagen Passat CC : 69 : 8',
  'Refuel : Audi A6 : 50',
  'Revert : Mercedes CLS : 500',
  'Revert : Audi A6 : 30000',
  'Stop',
]);
