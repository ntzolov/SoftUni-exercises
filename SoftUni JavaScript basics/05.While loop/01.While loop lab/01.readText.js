function readText(input) {

    let index = 0;
    let command = input[index];
    index++

    while (command !== "Stop") {
        console.log(command);
        command = input[index];
        index++
    }



}

readText([
    "Nakov", 
    "SoftUni",
    "Sofia",
    "Bulgaria",
    "SomeText",
    "Stop",
    "AfterStop",
    "Europe",
    "HelloWorld",
])
