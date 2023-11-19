const solve = (numbers) => {
    const result = [];
    for (const num of numbers) {
        if (num >= result[result.length - 1] || result.length === 0) {
            result.push(num);
        }
    }
    return result;
};
console.log(solve([1, 3, 8, 4, 10, 12, 3, 2, 24]));
