function walking(input) {

    let goalSteps = 10000;  
    let currentSteps = 0;
    isReachedGoal = false;

    let i = 0;
    while (true) {

        let inputSteps = input[i];
        i++;

        if (inputSteps === "Going home") {
            inputSteps = Number(input[i]);
            currentSteps += Number(inputSteps);
            if (currentSteps >= goalSteps) {
                isReachedGoal = true;
                break;
            } else {
                break;
            }  
        }

            if (currentSteps >= goalSteps) {
                isReachedGoal = true;
                break;
            }  

        currentSteps += Number(inputSteps);    
            
        
      
    }

    let diff = Math.abs(currentSteps - goalSteps)

    if (isReachedGoal === true) {
        console.log("Goal reached! Good job!");
        console.log(`${diff} steps over the goal!`);
    } else {
        console.log(`${diff} more steps to reach goal.`);
    }

    
}

walking(["1500",
    "300",
    "2500",
    "3000",
    "Going home",
    "200",
])
