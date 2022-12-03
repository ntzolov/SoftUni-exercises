function building(input) {

    let numFloors = Number(input[0]);
    let numRooms = Number(input[1]);

    for (let i = numFloors; i > 0; i--) {
        let currFloor = "";
        
        for (let j = 0; j < numRooms; j++) {

            if (i === numFloors || numFloors === 1) {
                currFloor += `L${i}${j} `;
            } else if (i % 2 === 1) {
                currFloor += `A${i}${j} `;
            } else if (i % 2 === 0) {
                currFloor += `O${i}${j} `;
            }

        } console.log(currFloor);
    }

}

building(["6", "4"])