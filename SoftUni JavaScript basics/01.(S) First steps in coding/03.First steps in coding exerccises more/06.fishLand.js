function neededMoney(input) {
    let priceMackerel = input[0];
    let priceSprinckle = input[1];
    let bonitoKilos = input[2];
    let safridKilos = input[3];
    let musselsKilos = input[4];

    let priceBonito = priceMackerel * 1.60
    let priceSafrid = priceSprinckle * 1.80
    let priceMussels = 7.50

    let price = (bonitoKilos * priceBonito) + (safridKilos * priceSafrid) + (musselsKilos * priceMussels)
    console.log(price.toFixed(2));
}

neededMoney([6.90
    ,4.20
    ,1.5
    ,2.5
    ,1
    ])