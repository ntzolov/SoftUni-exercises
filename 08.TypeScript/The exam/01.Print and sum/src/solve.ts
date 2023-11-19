const sumNumbers = (startNumber: number, endNumber: number): void => {
  let total: number = 0
  const allNumbers: number[] = []

  for (let i = startNumber; i <= endNumber; i++) {
    total += i
    allNumbers.push(i)
  }

  console.log(`${allNumbers.join(' ')}\nSum: ${total}`);
}

sumNumbers(50, 60)