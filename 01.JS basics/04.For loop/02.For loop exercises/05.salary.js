function func(input) {

    let openTabs = Number(input[0]);
    let salary = Number(input[1]);
    isLost = false;

    for (let i = 0; i < openTabs; i++) {
        currTab = input[i + 2];

        if (currTab === "Facebook") {
            salary -= 150;
        } else if (currTab === "Instagram") {
            salary -= 100;
        } else if (currTab === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            isLost = true;
            console.log("You have lost your salary.");
            break;
        }
    }

    if (isLost === false) {
        console.log(salary);
    }
}

func([
    "10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook",
])
