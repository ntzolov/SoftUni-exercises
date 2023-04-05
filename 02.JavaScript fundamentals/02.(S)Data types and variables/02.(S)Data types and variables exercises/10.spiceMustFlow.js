function spiceMustFlow(startingYield) {
  let extractedSpice = 0;
  let consumedSpice = 0;
  let days = 0;
  while (startingYield >= 100) {
    days++;
    extractedSpice += startingYield;
    consumedSpice += 26;
    startingYield -= 10;
  }
  consumedSpice += 26;
  let totalSpice = extractedSpice - consumedSpice;
  console.log(days);
  days === 0 ? console.log(0) : console.log(totalSpice);
}

spiceMustFlow(111);
