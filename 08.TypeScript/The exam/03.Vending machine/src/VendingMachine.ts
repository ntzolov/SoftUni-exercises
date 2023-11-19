import { Drink } from "./Drink"

export class VendingMachine {
  buttonCapacity: number
  drinks: Drink[]

  constructor(buttonCapacity: number) {
    this.buttonCapacity = buttonCapacity
    this.drinks = []
  }

  get getCount(): number {
    return this.drinks.length
  }

  addDrink(drink: Drink): void {
    if (this.drinks.length < this.buttonCapacity) {
      this.drinks.push(drink)
    }
  }

  removeDrink(name: string): boolean {
    const drinkIndex = this.drinks.findIndex(x => x.name === name)

    if (drinkIndex === -1) {
      return false
    }

    this.drinks.splice(drinkIndex, 1);
    return true
  }

  getLongest(): string {
    const longestDrink = [...this.drinks].sort((a, b) => b.volume - a.volume)[0]

    return longestDrink.toString()
  }

  getCheapest(): string {
    const lowestPriceDrink = [...this.drinks].sort((a, b) => a.price - b.price)[0]

    return lowestPriceDrink.toString()
  }

  buyDrink(name: string): string {
    const boughtDrink = this.drinks.find(x => x.name === name)

    return boughtDrink.toString()
  }

  report(): string {
    let reportArray: string[] = ['Drinks available:']

    this.drinks.forEach(drink => {
      reportArray.push(drink.toString())
    })

    return reportArray.join('\n')
  }
}