function time(input) {

    let h = Number(input[0]);
    let m = Number(input[1]);

    let minutesAll = h * 60 + m;
    let newTime = minutesAll + 15;
    
    h = Math.floor(newTime / 60);
    m = newTime % 60;

    if (m > 60) {
        h += 1
        m -= 60
    }

    if (h > 23) {
        h =0
    }

    if (m < 10) {
        console.log(`${h}:0${m}`);
    } else {
        console.log(`${h}:${m}`);
    }
    
}

time(["1", "46"])