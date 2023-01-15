function SoftUniReception(arr) {
  let studentsPerHour = Number(arr[0]) + Number(arr[1]) + Number(arr[2]);
  let people = Number(arr[3]);
  let result = 0;
  let counter = 0;
  while (people > 0) {
    counter++;
    if (counter === 4) {
      result += 1;
      counter = 0;
      continue;
    }

    people -= studentsPerHour;
    result += 1;
  }
  if (counter === 4) {
    result += 1;
  }
  console.log(`Time needed: ${result}h.`);
}

SoftUniReception(['1','2','3','45']);
