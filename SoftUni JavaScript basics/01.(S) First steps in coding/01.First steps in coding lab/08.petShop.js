function neededMoney(input) {
    let dogFoodPack = 2.50
    let catFoodPack = 4.00
    let countPackDog = Number(input[0])
    let countPackCat = Number(input[1])
    let allPrice = (countPackDog * dogFoodPack) + (countPackCat * catFoodPack)

    console.log(`${allPrice} lv.`)

}

neededMoney(["5","4"])