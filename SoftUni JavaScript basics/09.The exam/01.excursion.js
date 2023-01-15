function excursion(input) {

    let i = 0;
    let numberPeople = Number(input[i]);
    i++;
    let nights = Number(input[i]);
    i++;
    let cards = Number(input[i]);
    i++;
    let tickets = Number(input[i]);
    i++

    let priceForOne = (nights * 20) + (cards * 1.60) + (tickets * 6);
    let allPrice = priceForOne * numberPeople * 1.25;
   
    
    console.log(allPrice.toFixed(2));

}

excursion([
    "20",
    "14",
    "30",
    "6",
])
