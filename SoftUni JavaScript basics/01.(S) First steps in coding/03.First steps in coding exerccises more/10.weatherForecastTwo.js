function weather(input) {
    let whatIsTheWeather = Number(input[0]);

    if (whatIsTheWeather >= 5 && whatIsTheWeather <= 11.90) {
        console.log('Cold');
    } else if (whatIsTheWeather >= 12 && whatIsTheWeather <= 14.90) {
        console.log('Cool');
    } else if (whatIsTheWeather >= 15 && whatIsTheWeather <= 20) {
        console.log('Mild');
    } else if (whatIsTheWeather >= 20.10 && whatIsTheWeather <= 25.90) {
        console.log('Warm');
    } else if (whatIsTheWeather >= 26 && whatIsTheWeather <= 35) {
        console.log('Hot');
    } else {
        console.log('unknown')
    }
}

weather(["17"])