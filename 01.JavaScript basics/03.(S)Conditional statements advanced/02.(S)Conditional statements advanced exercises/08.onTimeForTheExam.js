function onTime(input) {

    let hExam = Number(input[0]);
    let mExam = Number(input[1]);
    let hArrive = Number(input[2]);
    let mArrive = Number(input[3]);

    let minutesExam = (hExam * 60) + mExam;
    let minutesArrive = (hArrive * 60) + mArrive;
    let minutesDiff = Math.abs(minutesArrive - minutesExam);
    let h = 0;
    let m = 0;

    if (minutesArrive > minutesExam) {
        console.log("Late");
    } else if ((minutesArrive > (minutesExam - 31) && minutesArrive < minutesExam) || minutesArrive === minutesExam) {
        console.log("On time");
    } else if (minutesArrive <= minutesExam - 31) {
        console.log("Early");
    }

    if (minutesArrive < minutesExam && (minutesArrive + 59) >= minutesExam) {
        console.log(`${minutesExam - minutesArrive} minutes before the start`);
    
    } else if (minutesArrive < minutesExam) {
        h = Math.floor(minutesDiff / 60)
        m = Math.floor(minutesDiff % 60)
        if (m < 10) {
            console.log(`${h}:0${m} hours before the start`);
        } else {
            console.log(`${h}:${m} hours before the start`);
        }
    
    } else if (minutesArrive > minutesExam && (minutesArrive - 59) <= minutesExam) {
        console.log(`${minutesArrive - minutesExam} minutes after the start`);
    
    } else if (minutesArrive > minutesExam) {
        h = Math.floor(minutesDiff / 60)
        m = Math.floor(minutesDiff % 60)
        if (m < 10) {
            console.log(`${h}:0${m} hours after the start`);
        } else {
            console.log(`${h}:${m} hours after the start`);
        }
    }

}

onTime(["9", "00", "10", "00"])