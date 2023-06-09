export default function sum(array, startIndex, endIndex) {
  let result = null;

  if (!Array.isArray(array)) {
    return NaN;
  }

  startIndex < 0 ? (startIndex = 0) : (startIndex = Number(startIndex));

  if (endIndex >= array.length - 1) {
    let numbersToSum = array.slice(startIndex);
    if (numbersToSum.some((el) => isNaN(el))) {
      return NaN;
    }
    result = numbersToSum.reduce((acc, num) => acc + num, 0);
  } else {
    let numbersToSum = array.slice(startIndex, Number(endIndex) + 1);
    if (numbersToSum.some((el) => isNaN(el))) {
      return NaN;
    }
    result = numbersToSum.reduce((acc, num) => acc + num, 0);
  }

  // console.log(result);
  return result;
}

sum([10, 'twenty', 30, 40], 0, 6);
