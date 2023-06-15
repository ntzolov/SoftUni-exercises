class Triathlon {
  participants = {};
  listOfFinalists = [];

  constructor(competitionName) {
    this.competitionName = competitionName;
  }

  addParticipant(participantName, participantGender) {
    if (this.participants.hasOwnProperty(participantName)) {
      return `${participantName} has already been added to the list`;
    }

    this.participants[participantName] = participantGender;
    return `A new participant has been added - ${participantName}`;
  }

  completeness(participantName, condition) {
    if (!this.participants.hasOwnProperty(participantName)) {
      throw new Error(
        `${participantName} is not in the current participants list`
      );
    }

    if (condition < 30) {
      throw new Error(
        `${participantName} is not well prepared and cannot finish any discipline`
      );
    }

    const possibleDisciplines = Math.floor(condition / 30);

    if (possibleDisciplines < 3) {
      return `${participantName} could only complete ${possibleDisciplines} of the disciplines`;
    }

    this.listOfFinalists.push({
      participantName: participantName,
      participantGender: this.participants[participantName],
    });

    delete this.participants[participantName];
    return `Congratulations, ${participantName} finished the whole competition`;
  }

  rewarding(participantName) {
    const currParticipant = this.listOfFinalists.find(
      (el) => el.participantName === participantName
    );

    if (!currParticipant) {
      return `${participantName} is not in the current finalists list`;
    }

    return `${participantName} was rewarded with a trophy for his performance`;
  }

  showRecord(criteria) {
    if (this.listOfFinalists.length === 0) {
      return `There are no finalists in this competition`;
    }

    if (criteria === 'all') {
      const toPrint = [];
      toPrint.push(`List of all ${this.competitionName} finalists:`);
      const sorted = this.listOfFinalists.sort((a, b) => {
        return a.participantName.localeCompare(b.participantName);
      });
      sorted.forEach((el) => {
        toPrint.push(el.participantName);
      });

      return toPrint.join('\n');
    }

    const currParticipant = this.listOfFinalists.find(
      (el) => el.participantGender === criteria
    );

    if (!currParticipant) {
      return `There are no ${criteria}'s that finished the competition`;
    }

    return `${currParticipant.participantName} is the first ${criteria} that finished the ${this.competitionName} triathlon`;
  }
}

const contest = new Triathlon("Dynamos");
console.log(contest.addParticipant("Peter", "male"));
console.log(contest.addParticipant("Sasha", "female"));
console.log(contest.addParticipant("George", "male"));
console.log(contest.completeness("Peter", 100));
console.log(contest.completeness("Sasha", 90));
console.log(contest.completeness("George", 95));
console.log(contest.rewarding("Peter"));
console.log(contest.rewarding("Sasha"));
console.log(contest.rewarding("George"));
console.log(contest.showRecord("male"));

