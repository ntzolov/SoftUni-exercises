class Company {
  constructor() {
    this.departments = {};
  }

  addEmployee(name, salary, position, department) {
    if (
      name === '' ||
      name === undefined ||
      name === null ||
      salary === '' ||
      salary === undefined ||
      salary === null ||
      salary < 0 ||
      position === '' ||
      position === undefined ||
      position === null ||
      department === '' ||
      department === undefined ||
      department === null
    ) {
      throw new Error('Invalid input!');
    }

    if (!this.departments.hasOwnProperty(department)) {
      this.departments[department] = [];
    }

    const currObj = { name, salary, position };
    this.departments[department].push(currObj);
    return `New employee is hired. Name: ${name}. Position: ${position}`;
  }

  bestDepartment() {
    let bestDepartment = '';
    let bestAverageSalary = 0;
    for (const department in this.departments) {
      let sum = 0;
      let employees = 0;
      for (const person of this.departments[department]) {
        sum += person.salary;
        employees++;
      }

      const currAverage = sum / employees;
      if (currAverage > bestAverageSalary) {
        bestAverageSalary = currAverage;
        bestDepartment = department;
      }
    }

    let sortedEmployees = this.departments[bestDepartment].sort((a, b) => {
      return b.salary - a.salary || a.name.localeCompare(b.name);
    });

    let result = `Best Department is: ${bestDepartment}\nAverage salary: ${bestAverageSalary.toFixed(
      2
    )}`;

    let employeesOfBestCompany = [];
    sortedEmployees.forEach((el) => {
      result += `\n${el.name} ${el.salary} ${el.position}`;
    });

    return result;
  }
}

let c = new Company();
c.addEmployee('Stanimir', 2000, 'engineer', 'Construction');
c.addEmployee('Pesho', 1500, 'electrical engineer', 'Construction');
c.addEmployee('Slavi', 500, 'dyer', 'Construction');
c.addEmployee('Stan', 2000, 'architect', 'Construction');
c.addEmployee('Stanimir', 1200, 'digital marketing manager', 'Marketing');
c.addEmployee('Pesho', 1000, 'graphical designer', 'Marketing');
c.addEmployee('Gosho', 1350, 'HR', 'Human resources');
console.log(c.bestDepartment());
