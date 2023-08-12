function distanceBetweenPoints(x1, y1, x2, y2) {
    let side1 = Math.max(x1, x2) - Math.min(x1, x2);
    let side2 = Math.max(y1, y2) - Math.min(y1, y2);
    let hypotenuse = ((Math.pow(side1, 2) + Math.pow(side2 ,2)));
    console.log(Math.sqrt(hypotenuse));
}

distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)