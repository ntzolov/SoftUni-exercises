function reverseString(string) {
    let word = string.split('');
    word = word.reverse();
    word = word.join('')

    console.log(word);
}

reverseString('Hello')