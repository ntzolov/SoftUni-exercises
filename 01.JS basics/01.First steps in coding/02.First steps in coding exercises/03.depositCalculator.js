function depositReturn(input) {
    let depositMoney = Number(input[0]);
    let termOfDepositInMonts = Number(input[1]);
    let annualInterestRate = Number(input[2]) / 100;
    let moneyReturn = depositMoney + termOfDepositInMonts * ((depositMoney * annualInterestRate) / 12);
    console.log(moneyReturn);
}

depositReturn(["200 ",
"3 ",
"5.7 "]
)