class WineSelection {
  constructor(space) {
    this.space = space;
    this.wines = [];
    this.bill = 0;
  }

  reserveABottle(wineName, wineType, price) {
    if (this.wines.length >= this.space) {
      throw new Error('Not enough space in the cellar.');
    }
    this.wines.push({
      wineName,
      wineType,
      price,
      paid: false,
    });
    return `You reserved a bottle of ${wineName} ${wineType} wine.`;
  }

  payWineBottle(wineName, price) {
    const [selectedWine] = this.wines.filter((wine) => {
      return wine.wineName === wineName;
    });

    if (selectedWine) {
      if (selectedWine.paid) {
        throw new Error(`${wineName} has already been paid.`);
      }
      selectedWine.paid = true;
      this.bill += price;
      return `You bought a ${wineName} for a ${price}$.`;
    }

    throw new Error(`${wineName} is not in the cellar.`);
  }

  openBottle(wineName) {
    const [selectedWine] = this.wines.filter((wine) => {
      return wine.wineName === wineName;
    });

    if (selectedWine) {
      if (!selectedWine.paid) {
        throw new Error(`${wineName} need to be paid before open the bottle.`);
      }
      const index = this.wines.indexOf(selectedWine);
      this.wines.splice(index, 1);
      return `You drank a bottle of ${wineName}.`;
    }

    throw new Error(`The wine, you're looking for, is not found.`);
  }

  cellarRevision(wineType) {
    if (wineType) {
      const toPrint = [];
      const findWine = this.wines.find((el) => el.wineType === wineType);
      if (findWine) {
        const isPaid = findWine.paid ? 'Has Paid' : 'Not Paid';
        toPrint.push(
          `${findWine.wineName} > ${findWine.wineType} - ${isPaid}.`
        );
        return toPrint.join('\n').trim();
      } else {
        throw new Error(`There is no ${wineType} in the cellar.`);
      }
    }

    const toPrint = [];
    toPrint.push(
      `You have space for ${this.space - this.wines.length} bottles more.`
    );
    toPrint.push(`You paid ${this.bill}$ for the wine.`);

    const sortedWines = this.wines.sort((a, b) => {
      return a.wineName.localeCompare(b.wineName);
    });

    for (const wine of sortedWines) {
      toPrint.push(
        `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid.' : 'Not Paid.'
        }`
      );
    }

    return toPrint.join('\n').trim();
  }
}

const selection = new WineSelection(5);
console.log(selection.reserveABottle('A', 'Rose', 144));
console.log(selection.reserveABottle('C', 'White', 50));
console.log(selection.reserveABottle('B', 'Red', 120));
console.log(selection.payWineBottle('B', 200));
console.log(selection.openBottle('B'));
console.log(selection.cellarRevision('Rose'));
