// function func(input) {

//     let n1 = Number(input[0]);
//     let n2 = Number(input[1]);
//     let array = [];
//     let sum = 0;

//     for (let i = n1; i < n2; i++) {
//         if (i % 9 === 0) {
//             array.push(i);
//         }
//     }
    
//     for (let i = 0; i < array.length; i++) {
//         sum += Number(array[i])
//     }

//     console.log("The sum: " + sum);

//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }

// }

// func(["100", "200"])

function func(input) {

    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let buff = "";
    let sum = 0;

    for (let i = n1; i < n2; i++) {
        if (i % 9 === 0) {
            sum += i
            buff += i + "\n"
        }
    }
    console.log("The sum: " + sum);
    console.log(buff)
}

func(["100", "200"])