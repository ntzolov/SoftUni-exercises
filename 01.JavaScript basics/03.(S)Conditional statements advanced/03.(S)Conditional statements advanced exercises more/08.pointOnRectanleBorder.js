function pointOnRectanleBorder(input) {

    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x = Number(input[4]);
    let y = Number(input[5]);

    let x11 = Math.min(x1, x2);
    let x22 = Math.max(x1, x2);
    let y11 = Math.min(y1, y2);
    let y22 = Math.max(y1, y2);

    let result = "";

    if (x === x11 || x === x22) {
        if(y >= y11 && y <= y22) {
            console.log("Border");
        } else {
            console.log("Inside / Outside");
        }
    } else if (y === y11 || y === y22) {
        if(x >= x11 && x <= x22) {
            console.log("Border");
        } else {
            console.log("Inside / Outside");
        }
    } else {
        console.log("Inside / Outside");
    }
}

pointOnRectanleBorder([
    "2",
    "-3",
    "12",
    "3",
    "8",
    "-1",
])