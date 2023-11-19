const sumNumbers = (startNumber, endNumber) => {
    let total = 0;
    const allNumbers = [];
    for (let i = startNumber; i <= endNumber; i++) {
        total += i;
        allNumbers.push(i);
    }
    console.log(`${allNumbers.join(' ')}\nSum: ${total}`);
};
sumNumbers(50, 60);
