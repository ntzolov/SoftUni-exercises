function radianstoDegrees(input) {
    let radians = Number(input[0])
    let degrees = radians * (180 / Math.PI)
    console.log(degrees)
}

radianstoDegrees(["3.1416"])