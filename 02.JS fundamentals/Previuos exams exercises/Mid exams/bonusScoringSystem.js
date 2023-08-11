function bonusScoringSystem(input) {
  let students = Number(input.shift());
  let totalLectures = Number(input.shift());
  let additionalBonus = Number(input.shift());

  let maxAttendances = 0;
  let maxBonus = 0;

  for (let i = 0; i < students; i++) {
    let currBonus = Math.ceil(
      (Number(input[i]) / totalLectures) * (5 + additionalBonus)
    );
    if (currBonus > maxBonus) {
      maxBonus = currBonus;
      maxAttendances = Number(input[i]);
    }
  }

  console.log(`Max Bonus: ${maxBonus}.`);
  console.log(`The student has attended ${maxAttendances} lectures.`);
}

bonusScoringSystem(['5', '25', '30', '12', '19', '24', '16', '20']);
