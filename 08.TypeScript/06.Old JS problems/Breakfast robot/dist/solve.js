const recipes = {
    apple: [{ carbohydrate: 1 }, { flavour: 2 }],
    lemonade: [{ carbohydrate: 10 }, { flavour: 20 }],
    burger: [{ carbohydrate: 5 }, { fat: 7 }, { flavour: 3 }],
    eggs: [{ protein: 5 }, { fat: 1 }, { flavour: 1 }],
    turkey: [{ protein: 10 }, { carbohydrate: 10 }, { fat: 10 }, { flavour: 10 }]
};
class CookingRobot {
    ingredientsInStock;
    constructor() {
        this.ingredientsInStock = {
            protein: 0,
            carbohydrate: 0,
            fat: 0,
            flavour: 0
        };
    }
    restock(microelement, quantity) {
        if (this.ingredientsInStock[microelement] !== undefined) {
            this.ingredientsInStock[microelement] += quantity;
        }
    }
    prepare(recipe, quantityRecipes) {
        let showError = false;
        const ingredients = recipes[recipe];
        ingredients.forEach(x => {
            const ingredient = Object.keys(x).toString();
            const quantity = Number(Object.values(x).toString());
            if (this.ingredientsInStock[ingredient] < quantityRecipes * quantity) {
                showError = true;
                console.log(`Error: you need ${quantityRecipes * quantity - this.ingredientsInStock[ingredient]} more ${ingredient}`);
            }
        });
        if (!showError) {
            ingredients.forEach(x => {
                const ingredient = Object.keys(x).toString();
                const quantity = Number(Object.values(x).toString());
                this.ingredientsInStock[ingredient] -= quantityRecipes * quantity;
            });
            console.log(`Success`);
        }
    }
    report() {
        console.log(`protein=${this.ingredientsInStock.protein} carbohydrate=${this.ingredientsInStock.carbohydrate} fat=${this.ingredientsInStock.fat} flavour=${this.ingredientsInStock.flavour}`);
    }
}
const myRobot = new CookingRobot();
myRobot.restock('protein', 5);
myRobot.restock('carbohydrate', 5);
myRobot.restock('fat', 5);
myRobot.restock('flavour', 5);
myRobot.prepare('apple', 6);
myRobot.report();
