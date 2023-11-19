"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendingMachine = void 0;
class VendingMachine {
    buttonCapacity;
    drinks;
    constructor(buttonCapacity) {
        this.buttonCapacity = buttonCapacity;
        this.drinks = [];
    }
    get getCount() {
        return this.drinks.length;
    }
    addDrink(drink) {
        if (this.drinks.length < this.buttonCapacity) {
            this.drinks.push(drink);
        }
    }
    removeDrink(name) {
        const drinkIndex = this.drinks.findIndex(x => x.name === name);
        if (drinkIndex === -1) {
            return false;
        }
        this.drinks.splice(drinkIndex, 1);
        return true;
    }
    getLongest() {
        const longestDrink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0];
        return longestDrink.toString();
    }
    getCheapest() {
        const lowestPriceDrink = [...this.drinks].sort((a, b) => a.price - b.price)[0];
        return lowestPriceDrink.toString();
    }
    buyDrink(name) {
        const boughtDrink = this.drinks.find(x => x.name === name);
        return boughtDrink.toString();
    }
    report() {
        let reportArray = ['Drinks available:'];
        this.drinks.forEach(drink => {
            reportArray.push(drink.toString());
        });
        return reportArray.join('\n');
    }
}
exports.VendingMachine = VendingMachine;
