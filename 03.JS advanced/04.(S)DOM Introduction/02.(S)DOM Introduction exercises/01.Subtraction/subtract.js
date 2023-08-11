function subtract() {
    let num1 = Number(document.getElementById('firstNumber').value)
    let num2 = Number(document.getElementById('secondNumber').value)
    let res = document.getElementById('result')

    res.textContent = num1 - num2
}