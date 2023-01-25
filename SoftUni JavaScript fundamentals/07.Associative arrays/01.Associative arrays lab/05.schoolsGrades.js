function schoolsGrades(input) {
  let gradesList = {};

  for (let line of input) {
    let currStudent = line.split(' ');
    let name = currStudent.shift();

    if (!gradesList[name]) {
      gradesList[name] = [];
    }

    gradesList[name] = gradesList[name].concat(currStudent);
  }

  for (let student in gradesList) {
    let sum = 0;
    for (let grade of gradesList[student]) {
      sum += Number(grade);
    }
    let average = sum / gradesList[student].length;
    gradesList[student] = average;
  }

  let gradesListSortedArray = Object.entries(gradesList).sort((a, b) =>
    a[0].localeCompare(b[0])
  );
  let gradesListSortedObject = Object.fromEntries(gradesListSortedArray);

  for (let key in gradesListSortedObject) {
    console.log(`${key}: ${gradesListSortedObject[key].toFixed(2)}`);
  }
}

schoolsGrades(['Steven 3 5 6 4', 'George 4 6', 'Tammy 2 5 3', 'Steven 6 3']);
