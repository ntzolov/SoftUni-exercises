function sleepyTomCat(input) {

    let freeDays = Number(input[0]);
    let nonFreeDays = 365 - freeDays;

    let tomNorm = 30000;
    let freeDaysPlaytime = 127 * freeDays;
    let nonFreeDaysPlaytime = 63 * nonFreeDays;
    let totalMinutes = 365 * 24 * 60;
    let totalPlaytime = freeDaysPlaytime + nonFreeDaysPlaytime;

    let diff = Math.abs(totalPlaytime - tomNorm);
    let hours = Math.floor(diff / 60);
    let minutes = diff % 60;

    if (totalPlaytime > tomNorm) {
        console.log(`Tom will run away`);
        console.log(`${hours} hours and ${minutes} minutes more for play`);
    } else {
        console.log(`Tom sleeps well`);
        console.log(`${hours} hours and ${minutes} minutes less for play`);
    }

}

sleepyTomCat([
    "20",
])