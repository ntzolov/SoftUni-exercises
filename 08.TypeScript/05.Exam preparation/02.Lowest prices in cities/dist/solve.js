function solve(input) {
    let finalProducts = {};
    for (const line of input) {
        let [town, product, price] = line.split(' | ');
        if (finalProducts[product] === undefined) {
            finalProducts[product] = { price: Number(price), town };
        }
        if (Number(price) < finalProducts[product].price) {
            finalProducts[product] = { price: Number(price), town };
        }
    }
    for (const product in finalProducts) {
        console.log(`${product} -> ${finalProducts[product].price} (${finalProducts[product].town})`);
    }
}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
