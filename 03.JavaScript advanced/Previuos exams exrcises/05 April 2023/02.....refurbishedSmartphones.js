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
      storage >= 0 &&
      Number.isInteger(storage) === true &&
      price >= 0 &&
      condition !== ''
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
    let indexOfPhone = null;
    let price = null;
    let isSold = false;

    this.availableSmartphones.forEach((smartphone, index) => {
      if (smartphone.model === model) {
        indexOfPhone = index;
        isSold = true;
      }
    });

    if (!isSold) {
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

      let soldSmartphone = this.availableSmartphones.splice(indexOfPhone, 1);
      let modelSold = soldSmartphone[0].model;
      let storageSold = soldSmartphone[0].storage;

      this.soldSmartphones.push({
        model: modelSold,
        storage: storageSold,
        price,
      });

      this.revenue += price;
      return `${model} was sold for ${price.toFixed(2)}$`;
    }
  }

  upgradePhones() {
    if (!this.availableSmartphones.length === 0) {
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
    if (criteria !== 'model' && criteria !== 'storage') {
      throw new Error('Invalid criteria!');
    }

    if (criteria === 'model') {
      this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
    }

    if (criteria === 'storage') {
      this.soldSmartphones.sort((a, b) => b.storage.localeCompare(a.storage));
    }

    let sortedSoldSmartphones = [
      `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$\n${
        this.soldSmartphones.length
      } smartphones sold:`,
    ];
    for (let smartphone of this.soldSmartphones) {
      sortedSoldSmartphones.push(
        `${smartphone.model} / ${
          smartphone.storage
        } GB / ${smartphone.price.toFixed(2)}$`
      );
    }

    return sortedSoldSmartphones.join('\n')
  }
}

let retailer = new RefurbishedSmartphones('SecondLife Devices');
retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
retailer.sellSmartphone('Samsung S20 Ultra', 256);
retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
console.log(retailer.salesJournal('model'));


