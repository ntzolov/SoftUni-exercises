function sortNumbers(num1, num2, num3) {
    let myArr = [num1, num2, num3];
    myArr = myArr.sort(function(a, b) {return b - a})
    console.log(myArr[0]);
    console.log(myArr[1]);
    console.log(myArr[2]);
}

sortNumbers(2, 1, 3)
