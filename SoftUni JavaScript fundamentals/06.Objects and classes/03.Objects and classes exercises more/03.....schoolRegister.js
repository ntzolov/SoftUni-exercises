// How to log the result in that oder:

// 9 Grade
// List of students: Mark, Daryl
// Average annual score from last year: 5.35

// 10 Grade
// List of students: Ethan, Joey, Bill
// Average annual score from last year: 5.52

// 11 Grade
// List of students: Steven, Philip, Gavin
// Average annual score from last year: 4.42

// 12 Grade
// List of students: Bob, Peter
// Average annual score from last year: 5.02


function schoolRegister(array) {
  let list = [];

  class Student {
    constructor(name, grade, average) {
      this.name = name;
      this.grade = grade;
      this.average = average;
    }
  }

  for (let line of array) {
    line = line.split(',');

    let name = line[0].split('Student name: ')[1];
    let grade = +line[1].split('Grade: ')[1];
    let average = +line[2].split('Graduated with an average score: ')[1];

    let student = new Student(name, grade, average);
    list.push(student);
  }

  list = list.sort((a, b) => {
    let x = a.grade;
    let y = b.grade;
    return x - y;
  });

  console.table(list);
}

schoolRegister([
  'Student name: Mark, Grade: 8, Graduated with an average score: 4.75',
  'Student name: Ethan, Grade: 9, Graduated with an average score: 5.66',
  'Student name: George, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Steven, Grade: 10, Graduated with an average score: 4.20',
  'Student name: Joey, Grade: 9, Graduated with an average score: 4.90',
  'Student name: Angus, Grade: 11, Graduated with an average score: 2.90',
  'Student name: Bob, Grade: 11, Graduated with an average score: 5.15',
  'Student name: Daryl, Grade: 8, Graduated with an average score: 5.95',
  'Student name: Bill, Grade: 9, Graduated with an average score: 6.00',
  'Student name: Philip, Grade: 10, Graduated with an average score: 5.05',
  'Student name: Peter, Grade: 11, Graduated with an average score: 4.88',
  'Student name: Gavin, Grade: 10, Graduated with an average score: 4.00',
]);
