function solve() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }

    toString() {
      return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
    }
  }

  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }

    toString() {
      return super.toString().slice(0, -1) + `, subject: ${this.subject})`;
    }
  }

  class Student extends Person {
    constructor(name, email, course) {
      super(name, email);
      this.course = course;
    }

    toString() {
      return super.toString().slice(0, -1) + `, course: ${this.course})`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

const { Person, Teacher, Student } = solve();
const person = new Person('Atanas', 'nasko@abv.bg');
const teacher = new Teacher('Valentina', 'valia@abv.bg', 'history');
const student = new Student('Nikolay', 'nick@abv.bg', 'biology');
console.log(person.toString());
console.log(teacher.toString());
console.log(student.toString());
