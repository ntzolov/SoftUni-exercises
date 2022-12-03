function ThePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let finalHeight = 0;
    let counter = 0;
    for (let i = base; i > 0; i -= 2) {
        counter += 1;
        if (counter === 5 && i > 2) {
            lapisLazuli += (i * 4 - 4) * increment;
            stone += (i - 2) * (i - 2) * increment;
            finalHeight += 1;
            counter = 0;
            continue;
        }
        if(i === 2 || i === 1) {
            gold += i * i * increment;
            finalHeight += 1;
            break;
        }
        stone += (i - 2) * (i - 2) * increment;
        marble += (i * 4 - 4) * increment;
        finalHeight += 1;
    }
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalHeight * increment)}`);
}

ThePyramidOfKingDjoser(3, 1)