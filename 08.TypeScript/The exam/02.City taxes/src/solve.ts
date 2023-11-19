const cityTaxes = (name: string, population: number, treasury: number) => {
  let taxRate: number = 10

  const objectResult = {
    name,
    population,
    treasury,
    taxRate,
    collectTaxes(): void {
      this.treasury += Math.floor(this.population * this.taxRate)
    },
    applyGrowth(percentage: number): void {
      const decimalPercentage = (percentage / 100) + 1
      this.population = Math.floor(this.population * decimalPercentage)
    },
    applyRecession(percentage: number): void {
      const decimalPercentage = percentage / 100
      this.treasury -= Math.floor(this.treasury * decimalPercentage)
    }
  }

  return objectResult
}

const city =
  cityTaxes('Tortuga',
    7000,
    15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5)
console.log(city.treasury);

