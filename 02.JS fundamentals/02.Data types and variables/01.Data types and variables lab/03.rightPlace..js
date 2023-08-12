function rightPlace(str, char, str2) {
    let changedString = str.replace('_', char);
    let result = changedString === str2? 'Matched': 'Not Matched';
    console.log(result);
}

rightPlace('Str_ng', 'I', 'Strong')