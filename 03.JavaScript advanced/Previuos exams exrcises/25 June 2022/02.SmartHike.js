class SmartHike {
  goals = {};
  listOfHikes = [];
  resources = 100;

  constructor(username) {
    this.username = username;
  }

  addGoal(peak, altitude) {
    if (this.goals.hasOwnProperty(peak)) {
      return `${peak} has already been added to your goals`;
    }

    this.goals[peak] = altitude;
    return `You have successfully added a new goal - ${peak}`;
  }

  hike(peak, time, difficultyLevel) {
    if (!this.goals.hasOwnProperty(peak)) {
      throw new Error(`${peak} is not in your current goals`);
    }

    if (this.resources === 0) {
      throw new Error("You don't have enough resources to start the hike");
    }

    const diff = time * 10;
    if (this.resources - diff < 0) {
      return "You don't have enough resources to complete the hike";
    }

    this.resources -= diff;
    this.listOfHikes.push({
      peak: peak,
      time: time,
      difficultyLevel: difficultyLevel,
    });

    return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
  }

  rest(time) {
    this.resources += time * 10;

    if (this.resources >= 100) {
      this.resources = 100;
      return `Your resources are fully recharged. Time for hiking!`;
    }

    return `You have rested for ${time} hours and gained ${
      time * 10
    }% resources`;
  }

  showRecord(criteria) {
    if (this.listOfHikes.length === 0) {
      return `${this.username} has not done any hiking yet`;
    }

    if (criteria === 'all') {
      const toPrint = [];
      toPrint.push('All hiking records:');
      this.listOfHikes.forEach((el) =>
        toPrint.push(`${this.username} hiked ${el.peak} for ${el.time} hours`)
      );
      return toPrint.join('\n')
    }

    const filtered = this.listOfHikes.filter(
      (el) => el.difficultyLevel === criteria
    );

    const findBestHike = filtered.find((el) => el.difficultyLevel === criteria);
    if (!findBestHike) {
      return `${this.username} has not done any ${criteria} hiking yet`;
    }

    return `${this.username}'s best ${criteria} hike is ${findBestHike.peak} peak, for ${findBestHike.time} hours`;
  }
}

let newHike = new SmartHike('Vili');
console.log(newHike.addGoal('Musala', 2925)); // "You have successfully added a new goal - Musala");
console.log(newHike.hike('Musala', 8, 'hard')); // "You hiked Musala peak for 8 hours and you have 20% resources left");
console.log(newHike.showRecord('easy')); // "Vili has not done any easy hiking yet");
console.log(newHike.addGoal('Vihren', 2914)); // "You have successfully added a new goal - Vihren");
console.log(newHike.hike('Vihren', 4, 'hard')); // "You don't have enough resources to complete the hike");
console.log(newHike.showRecord('hard')); // "Vili's best hard hike is Musala peak, for 8 hours");
console.log(newHike.addGoal('Rui', 1706)); // "You have successfully added a new goal - Rui");
console.log(newHike.hike('Rui', 3, 'easy')); // "You don't have enough resources to complete the hike");
console.log(newHike.showRecord('all')); // "All hiking records:\nVili hiked Musala for 8 hours");
