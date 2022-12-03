function workingHours(input) {

    let hour = Number(input[0]);
    let day = input[1];
    let openClosed = undefined

    if (hour >= 10 && hour <= 18) {
        switch(day) {
            case "Monday": openClosed = true; break;
            case "Tuesday": openClosed = true; break;
            case "Wednesday": openClosed = true; break;
            case "Thursday": openClosed = true; break;
            case "Friday": openClosed = true; break;
            case "Saturday": openClosed = true; break;
            case "Sunday": openClosed = false; break;
            default: break;
        }
    }

    if (openClosed === true) {
        console.log("open");
    } else {
        console.log("closed");
    }

}

workingHours(["11", "Monday"])