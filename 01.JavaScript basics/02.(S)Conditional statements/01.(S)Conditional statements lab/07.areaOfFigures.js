function areaOfFigure(input) {

    let name = input[0];

    if (name === 'square') {
        let side = Number(input[1]);
        let result = side * side;
        console.log(result.toFixed(3));
    } else if (name === 'rectangle') {
        let sideOne = Number(input[1]);
        let sideTwo = Number(input[2]);
        let result = sideOne * sideTwo;
        console.log(result.toFixed(3));
    } else if (name === 'circle') {
        let radius = Number(input[1]);
        let result = Math.PI * (radius * radius);
        console.log(result.toFixed(3));
    } else if (name === 'triangle') {
        let side = Number(input[1]);
        let h = Number(input[2]);
        let result = side * (h / 2);
        console.log(result.toFixed(3));
    }
}

areaOfFigure
