function tradeCommisions(input) {

    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0
    let isError = false

    switch (city) {
        case "Sofia":

            if (sales <= 500 && sales > 0) {
                commission = 5
            } else if (sales <= 1000 && sales > 0) {
                commission = 7
            } else if (sales <= 10000 && sales > 0) {
                commission = 8
            } else if (sales > 10000 && sales > 0) {
                commission = 12
            } else {
                isError = true
            }
            break;

        case "Varna":

            if (sales <= 500 && sales > 0) {
                commission = 4.5
            } else if (sales <= 1000 && sales > 0) {
                commission = 7.5
            } else if (sales <= 10000 && sales > 0) {
                commission = 10
            } else if (sales > 10000 && sales > 0) {
                commission = 13
            } else {
                isError = true
            }
            break;

        case "Plovdiv":

            if (sales <= 500 && sales > 0) {
                commission = 5.5
            } else if (sales <= 1000 && sales > 0) {
                commission = 8
            } else if (sales <= 10000 && sales > 0) {
                commission = 12
            } else if (sales > 10000 && sales > 0) {
                commission = 14.5
            } else {
                isError = true
            }
            break;

        default: isError = true
    }

    if (isError === false) {
        console.log((sales * commission / 100).toFixed(2));
    } else {
        console.log("error");
    }

}

tradeCommisions(["Plovdiv", "-20"])