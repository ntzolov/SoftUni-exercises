function MoneyForSchool(input) {
    let packOfPencils = 5.80
    let packOfMarkers = 7.20
    let cleaningDetergent = 1.20
    let countPencils = Number(input[0])
    let countMarkers = Number(input[1])
    let countDetergents = Number(input[2])
    let percentDiscount = Number(input[3]) / 100
    let allPrice = (countPencils * packOfPencils) + (countMarkers * packOfMarkers) + (countDetergents * cleaningDetergent)
    let allPriceAfterDiscount = allPrice - (allPrice * percentDiscount)
    console.log(allPriceAfterDiscount)
}

MoneyForSchool(["2 ",
"3 ",
"4 ",
"25 "]
)
