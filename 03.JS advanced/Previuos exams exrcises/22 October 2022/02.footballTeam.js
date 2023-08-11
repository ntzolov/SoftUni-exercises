class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    const toPrint = [];

    footballPlayers.forEach((player) => {
      const [name, age, value] = player.split('/');
      const findPlayer = this.invitedPlayers.find(
        (player) => player.name === name
      );

      if (!toPrint.includes(name)) {
        toPrint.push(name);
      }

      if (findPlayer) {
        if (value > findPlayer.value) {
          findPlayer.value = value;
        }
      } else {
        this.invitedPlayers.push({
          name,
          age: Number(age),
          value: Number(value),
        });
      }
    });
    return `You successfully invite ${toPrint.join(', ')}.`;
  }

  signContract(selectedPlayer) {
    const [name, offer] = selectedPlayer.split('/');
    const findPlayer = this.invitedPlayers.find(
      (player) => player.name === name
    );

    if (!findPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (offer < findPlayer.value) {
      throw new Error(
        `The manager's offer is not enough to sign a contract with ${name}, ${Math.abs(
          findPlayer.value - offer
        )} million more are needed to sign the contract!`
      );
    }

    findPlayer.value = 'Bought';

    return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`;
  }

  ageLimit(name, age) {
    const findPlayer = this.invitedPlayers.find(
      (player) => player.name === name
    );

    if (!findPlayer) {
      throw new Error(`${name} is not invited to the selection list!`);
    }

    if (findPlayer.age < age) {
      const diff = age - findPlayer.age;
      if (diff < 5) {
        return `${name} will sign a contract for ${diff} years with ${this.clubName} in ${this.country}!`;
      } else {
        return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`;
      }
    } else {
      return `${name} is above age limit!`;
    }
  }

  transferWindowResult() {
    const toPrint = [];
    toPrint.push('Players list:');
    const sortedPlayers = this.invitedPlayers.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedPlayers.forEach((player) => {
      toPrint.push(`Player ${player.name}-${player.value}`);
    });

    return toPrint.join('\n');
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());
