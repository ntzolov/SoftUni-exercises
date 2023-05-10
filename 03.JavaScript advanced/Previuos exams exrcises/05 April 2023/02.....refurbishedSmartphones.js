class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }

  addSmartphone(model, storage, price, condition) {
    if (
      model !== '' &&
      typeof model === 'string' &&
      storage >= 0 &&
      Number.isInteger(storage) === true &&
      price >= 0 &&
      typeof price === 'number' &&
      condition !== '' &&
      typeof condition === 'string'
    ) {
      this.availableSmartphones.push({ model, storage, price, condition });
      return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
        2
      )}$`;
    } else {
      throw new Error('Invalid Smartphone!');
    }
  }

  sellSmartphone(model, desiredStorage) {
    let indexOfPhone;
    let price;
    let isFound = false;

    this.availableSmartphones.forEach((smartphone, index) => {
      if (smartphone.model === model) {
        indexOfPhone = index;
        isFound = true;
      }
    });

    if (!isFound) {
      throw new Error(`${model} was not found!`);
    } else {
      if (this.availableSmartphones[indexOfPhone].storage >= desiredStorage) {
        price = this.availableSmartphones[indexOfPhone].price;
      } else if (
        desiredStorage - this.availableSmartphones[indexOfPhone].storage <=
        128
      ) {
        price = this.availableSmartphones[indexOfPhone].price * 0.9;
      } else if (
        desiredStorage - this.availableSmartphones[indexOfPhone].storage >
        128
      ) {
        price = this.availableSmartphones[indexOfPhone].price * 0.8;
      }

      let [soldSmartphone] = this.availableSmartphones.splice(indexOfPhone, 1);

      this.soldSmartphones.push({
        model: soldSmartphone.model,
        storage: soldSmartphone.storage,
        soldPrice: price.toFixed(2),
      });

      this.revenue += price;
      return `${soldSmartphone.model} was sold for ${price.toFixed(2)}$`;
    }
  }

  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      throw new Error('There are no available smartphones!');
    } else {
      for (let smartphone of this.availableSmartphones) {
        smartphone.storage *= 2;
      }
    }

    let upgradedSmartphones = ['Upgraded Smartphones:'];
    for (let smartphone of this.availableSmartphones) {
      upgradedSmartphones.push(
        `${smartphone.model} / ${smartphone.storage} GB / ${
          smartphone.condition
        } condition / ${smartphone.price.toFixed(2)}$`
      );
    }

    return upgradedSmartphones.join('\n');
  }

  salesJournal(criteria) {
    let sorted;
    if (criteria !== 'model' && criteria !== 'storage') {
      throw new Error('Invalid criteria!');
    }

    if (criteria === 'model') {
      sorted = this.soldSmartphones.sort((a, b) =>
        a.model.localeCompare(b.model)
      );
    }

    if (criteria === 'storage') {
      sorted = this.soldSmartphones.sort((a, b) => b.storage - a.storage);
    }

    let sortedSoldSmartphones = [
      `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
    ];
    sortedSoldSmartphones.push(
      `${this.soldSmartphones.length} smartphones sold:`
    );
    for (let smartphone of sorted) {
      sortedSoldSmartphones.push(
        `${smartphone.model} / ${smartphone.storage} GB / ${smartphone.soldPrice}$`
      );
    }

    return sortedSoldSmartphones.join('\n');
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
// console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
// retailer.addSmartphone('Testphone', 64, 1000, 'good');
// retailer.addSmartphone('Samsung S18', 32, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// retailer.sellSmartphone('Samsung S20 Ultra', 128);
// retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
// console.log(retailer.availableSmartphones.length);
// console.log(retailer.upgradePhones());
// console.log(retailer.salesJournal('model'));
// console.log(retailer.availableSmartphones);
// console.log(retailer.soldSmartphones);

console.log(retailer.addSmartphone('nokia', 32, 100, 'good'));
console.log(retailer.addSmartphone('nokia 2', 32, 100, 'good'));
console.log(retailer.addSmartphone('nokia 3', 32, 100, 'good'));
console.log(retailer.upgradePhones());
console.log(retailer.sellSmartphone('nokia', 64));
console.log(retailer.salesJournal('storage'));
console.log(retailer.availableSmartphones);
console.log(retailer.revenue);
console.log(retailer.soldSmartphones);
