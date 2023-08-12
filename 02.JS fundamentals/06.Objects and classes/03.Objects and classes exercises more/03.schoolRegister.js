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

  let names = [];
  let averages = 0;
  let previous;
  list.forEach((student, index) => {
    if (index === 0 && student.average >= 3) {
      console.log(`${student.grade + 1} Grade`);
      let currGrade = student.grade;
      list.forEach((stud) => {
        if (stud.grade === currGrade && stud.average >= 3) {
          names.push(stud.name);
          averages += stud.average;
        }
      });
      console.log(`List of students: ${names.join(', ')}`);
      console.log(
        `Average annual score from last year: ${(
          averages / names.length
        ).toFixed(2)}\n`
      );
      names = [];
      averages = 0;
      previous = student.grade;
    }
    if (student.grade !== previous && student.average >= 3) {
      console.log(`${student.grade + 1} Grade`);
      let currGrade = student.grade;
      list.forEach((stud) => {
        if (stud.grade === currGrade && stud.average >= 3) {
          names.push(stud.name);
          averages += stud.average;
        }
      });
      console.log(`List of students: ${names.join(', ')}`);
      console.log(
        `Average annual score from last year: ${(
          averages / names.length
        ).toFixed(2)}\n`
      );
      names = [];
      averages = 0;
      previous = student.grade;
    }
  });
}

schoolRegister([
  'Student name: George, Grade: 5, Graduated with an average score: 2.75',
  'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
  'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
  'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
  'Student name: John, Grade: 9, Graduated with an average score: 2.90',
  'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
  'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15',
]);
