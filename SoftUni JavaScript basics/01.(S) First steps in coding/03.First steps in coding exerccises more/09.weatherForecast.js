function weather(input) {
    let whatIsTheWeather = input[0];

    if (whatIsTheWeather === "sunny") {
        console.log('It\'s warm outside!');
    } else {
        console.log('It\'s cold outside!');
    }
}

weather(["sunny"])