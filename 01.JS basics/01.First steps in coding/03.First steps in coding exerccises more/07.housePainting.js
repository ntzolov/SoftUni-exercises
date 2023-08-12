function paint(input) {
    let literGreenPaint = 3.40;
    let literRedpaint = 4.30;

    let x = input[0];
    let y = input[1];
    let h = input[2];

    let frontBackSide = (x * x * 2) - (1.2 * 2);
    let twoSides = (x * y * 2) - (2 * (1.5 * 1.5));
    let roofTwoSides = (x * y * 2);
    let roofTriangles = (x * (h / 2) * 2);

    let litersGreen = (frontBackSide + twoSides) / literGreenPaint;
    let litersRed = (roofTwoSides + roofTriangles) / literRedpaint;
    console.log(litersGreen.toFixed(2));
    console.log(litersRed.toFixed(2));

}

paint([6
    ,10
    ,5.2
    ])