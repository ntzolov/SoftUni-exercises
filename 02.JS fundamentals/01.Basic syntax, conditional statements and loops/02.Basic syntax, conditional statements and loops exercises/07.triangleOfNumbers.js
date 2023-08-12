function triangleOfNumbers(n) {
    let result = '';
    for (let i = 1; i <= n; i++){
        console.log(`${i} `.repeat(i));
    }
}

triangleOfNumbers(6)