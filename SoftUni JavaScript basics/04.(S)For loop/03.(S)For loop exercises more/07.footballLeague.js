function footballLeague(input) {

    let stadiumCapacity = Number(input[0]);
    let numFans = Number(input[1]);
    let i = 2;
    let sectorA = 0;
    let sectorB = 0;
    let sectorV = 0;
    let sectorG = 0;

    for (let j = 1; j <= numFans; j++) {
        let currFanSector = input[i];
        i++;
        if (currFanSector === "A") {
            sectorA += 1;
        } else if (currFanSector === "B") {
            sectorB += 1;
        } else if (currFanSector === "V") {
            sectorV += 1;
        } else if (currFanSector === "G") {
            sectorG += 1;
        } 
    } 

    console.log((sectorA / numFans * 100).toFixed(2) + "%");
    console.log((sectorB / numFans * 100).toFixed(2) + "%");
    console.log((sectorV / numFans * 100).toFixed(2) + "%");
    console.log((sectorG / numFans * 100).toFixed(2) + "%");
    console.log(((sectorA + sectorB + sectorG + sectorV) / stadiumCapacity * 100).toFixed(2) + "%");

}

footballLeague([
    "76",
    "10",
    "A",
    "V",
    "V",
    "V",
    "G",
    "B",
    "A",
    "V",
    "B",
    "B",
])