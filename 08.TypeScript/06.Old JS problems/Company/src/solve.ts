interface Department {
  [key: string]: Person[]
}

interface Person {
  name: string
  salary: number
  position: string
}


class Company {
  departments: Department

  constructor() {
    this.departments = {}
  }

  addEmployee(name: string, salary: number, position: string, department: string) {
    if (!name || !salary || !position || !department || salary < 0) {
      throw new Error('Invalid input!')
    }

    if (!this.departments[department]) {
      this.departments[department] = []
    }

    this.departments[department].push({ name, salary, position })
    console.log(`New employee is hired. Name: ${name}. Position: ${position}`);
  }

  bestDepartment() {
    let bestAverageSum = 0
    let bestDepartment = ''
    for (const department in this.departments) {
      let currentAverage = 0

      for (const person of this.departments[department]) {
        currentAverage += person.salary
      }

      currentAverage /= this.departments[department].length

      if (currentAverage > bestAverageSum) {
        bestAverageSum = currentAverage
        bestDepartment = department
      }

      currentAverage = 0
    }

    const sortedPeople = this.departments[bestDepartment].sort((a, b) => b.salary - a.salary || a.name.localeCompare(b.name))

    console.log(`Best Department is: ${bestDepartment}`);
    console.log(`Average salary: ${bestAverageSum.toFixed(2)}`);

    for (const person of sortedPeople) {
      console.log(`${person.name} ${person.salary.toFixed(2)} ${person.position}`);
    }
  }
}

let myCompany = new Company();
myCompany.addEmployee("Stanimir", 2000, "engineer", "Construction");
myCompany.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
myCompany.addEmployee("Slavi", 500, "dyer", "Construction");
myCompany.addEmployee("Stan", 2000, "architect", "Construction");
myCompany.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
myCompany.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
myCompany.addEmployee("Gosho", 1350, "HR", "Human resources");
myCompany.bestDepartment();
