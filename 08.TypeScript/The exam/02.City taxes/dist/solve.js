const cityTaxes = (name, population, treasury) => {
    let taxRate = 10;
    const objectResult = {
        name,
        population,
        treasury,
        taxRate,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            const decimalPercentage = (percentage / 100) + 1;
            this.population = Math.floor(this.population * decimalPercentage);
        },
        applyRecession(percentage) {
            const decimalPercentage = percentage / 100;
            this.treasury -= Math.floor(this.treasury * decimalPercentage);
        }
    };
    return objectResult;
};
const city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.treasury);
