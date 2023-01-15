function palindromeIntegers(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(isPalindrome(arr[i]));
  }

  function isPalindrome(num) {
    let strOfNum = String(num);
    let temp1 = [];
    let temp2 = [];
    for (let i = 0; i < strOfNum.length; i++) {
      temp1.push(strOfNum[i]);
    }
    for (let j = strOfNum.length - 1; j >= 0; j--) {
      temp2.push(strOfNum[j]);
    }
    if (temp1.join('') === temp2.join('')) {
      return true;
    } else {
      return false;
    }
  }
}

palindromeIntegers([123, 323, 421, 121]);
