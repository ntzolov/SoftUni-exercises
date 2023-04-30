function validityChecker(x1, y1, x2, y2) {
  const firstCheck = Math.sqrt(Math.pow(0 - x1, 2) + Math.pow(0 - y1, 2));
  const secondCheck = Math.sqrt(Math.pow(x2 - 0, 2) + Math.pow(y2 - 0, 2));
  const thirdCheck = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));

  if (Number.isInteger(firstCheck)) {
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(secondCheck)) {
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
  } else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
  }

  if (Number.isInteger(thirdCheck)) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
  }
}

validityChecker(3, 0, 0, 4);
