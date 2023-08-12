function reversedChars(char1, char2, char3) {
  let theString = char1 + char2 + char3;
  let result = "";
  for (let i = theString.length; i > 0; i--) {
    result += theString[i - 1] + " ";
  }
  console.log(result);
}
reversedChars("A", "B", "C");
