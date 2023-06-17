class JobOffers {
  jobCandidates = [];

  constructor(employer, position) {
    this.employer = employer;
    this.position = position;
  }

  jobApplication(candidates) {
    const toPrint = [];

    candidates.forEach((el) => {
      let [name, education, yearExperience] = el
        .split('-')
        .filter((el) => el.length > 0);
      yearExperience = Number(yearExperience);

      const currCandidate = this.jobCandidates.find((el) => el.name === name);

      if (currCandidate) {
        if (currCandidate.yearExperience < yearExperience) {
          currCandidate.yearExperience = yearExperience;
        }
      }

      if (!currCandidate) {
        this.jobCandidates.push({
          name: name,
          education: education,
          yearExperience: yearExperience,
        });

        if (!toPrint.includes(name)) {
          toPrint.push(name);
        }
      }
    });
    return `You successfully added candidates: ${toPrint.join(', ')}.`;
  }

  jobOffer(chosenPerson) {
    const [name, minimalExperience] = chosenPerson.split('-');

    const currCandidate = this.jobCandidates.find((el) => el.name === name);

    if (!currCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (currCandidate.yearExperience < minimalExperience) {
      throw new Error(
        `${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`
      );
    }

    currCandidate.yearExperience = 'hired';
    return `Welcome aboard, our newest employee is ${name}.`;
  }

  salaryBonus(name) {
    const currCandidate = this.jobCandidates.find((el) => el.name === name);

    if (!currCandidate) {
      throw new Error(`${name} is not in the candidates list!`);
    }

    if (currCandidate.education === 'Bachelor') {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
    } else if (currCandidate.education === 'Master') {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
    } else {
      return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
    }
  }

  candidatesDatabase() {
    if (this.jobCandidates.length === 0) {
      throw new Error('Candidate Database is empty!');
    }

    const toPrint = [];
    toPrint.push('Candidates list:');

    const sortedNames = this.jobCandidates.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedNames.forEach((el) =>
      toPrint.push(`${el.name}-${el.yearExperience}`)
    );

    return toPrint.join('\n');
  }
}

let Jobs = new JobOffers ("Google", "Strategy Analyst");
 console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5","Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
 console.log(Jobs.jobOffer("John Doe-8"));
 console.log(Jobs.jobOffer("Peter Parker-4"));
 console.log(Jobs.jobOffer("Jordan Cole-4"));
 console.log(Jobs.salaryBonus("Jordan Cole"));
 console.log(Jobs.salaryBonus("John Doe"));
 console.log(Jobs.candidatesDatabase());

