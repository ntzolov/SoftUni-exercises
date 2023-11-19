const inputData = [5, "+", 10];
function solve(num1, delimiter, num2) {
    const calculatorMap = {
        '+': (num1 + num2).toFixed(2),
        '-': (num1 - num2).toFixed(2),
        '/': (num1 / num2).toFixed(2),
        '*': (num1 * num2).toFixed(2),
    };
    return calculatorMap[delimiter];
}
console.log(solve(7, "*", 5));
