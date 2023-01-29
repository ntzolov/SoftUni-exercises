// I can find if age < 0 on the first place...

function ages(age) {
    let result = null;
    if (age >= 0 && age <= 2) {
        result = 'baby';
    } else if (age > 0 && age <= 13) {
        result = 'child'
    } else if (age > 0 && age <= 19) {
        result = 'teenager'
    } else if (age > 0 && age <= 65) {
        result = 'adult'
    } else if (age > 0 && age >= 66) {
        result = 'elder'
    } else {
        result = 'out of bounds'
    }
    console.log(result);
}

ages(-1)