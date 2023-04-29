function solution() {
  const foodLibrary = {
    apple: {
      carbohydrate: 1,
      flavour: 2,
    },
    lemonade: {
      carbohydrate: 10,
      flavour: 20,
    },
    burger: {
      carbohydrate: 5,
      fat: 7,
      flavour: 3,
    },
    eggs: {
      protein: 5,
      fat: 1,
      flavour: 1,
    },
    turkey: {
      protein: 10,
      carbohydrate: 10,
      fat: 10,
      flavour: 10,
    },
  };

  const ingredients = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  function manager(input) {
    if (input.includes('restock')) {
      let [command, ingredient, quantity] = input.split(' ');
      quantity = Number(quantity);
      ingredients[ingredient] += quantity;
      return 'Success';
    } else if (input.includes('prepare')) {
      const [command, product, quantity] = input.split(' ');
      for (let ingredient in foodLibrary[product]) {
        if (
          ingredients[ingredient] >=
          foodLibrary[product][ingredient] * quantity
        ) {
          ingredients[ingredient] -=
            foodLibrary[product][ingredient] * quantity;
          // return 'Success';
        } else {
          return `Error: not enough ${ingredient} in stock`;
        }
      }
    } else if (input.includes('report')) {
      let report = [];
      for (let ingredient in ingredients) {
        report.push(`${ingredient}=${ingredients[ingredient]}`);
      }
      return report.join(' ');
    }
    return 'Success'
  }

  return manager;
}

// •	protein={qty} carbohydrate={qty} fat={qty} flavour={qty}

let manager = solution();
console.log(manager('restock carbohydrate 10')); // Success
console.log(manager('restock flavour 10')); // Error: not enough carbohydrate in stock
console.log(manager('prepare apple 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare burger 1'));
console.log(manager('report'));
