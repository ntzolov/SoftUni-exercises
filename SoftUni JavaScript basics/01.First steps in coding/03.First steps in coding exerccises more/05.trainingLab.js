function trainingLab(input) {

    let w = Number(input[0]) * 100;
    let h = Number(input[1]) * 100;

    let hClean = h - 100;
    let chairsH = Math.floor(hClean / 70);
    let chairsW = Math.floor(w / 120);

    let all =  chairsH * chairsW - 3;
    console.log(all);


}

trainingLab([
    "15",
    "8.9",

])