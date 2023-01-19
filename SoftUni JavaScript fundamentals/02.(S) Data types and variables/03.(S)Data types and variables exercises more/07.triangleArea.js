function triangleArea(a, b, c) {
    let semiperimeter = (a + b + c) * 0.5;
    let area = Math.sqrt(semiperimeter * (semiperimeter - a) * (semiperimeter - b) * (semiperimeter - c));
    console.log(area);
}

triangleArea(
    2,
    3.5,
    4,
)