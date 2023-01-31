function hardWord(data) {
  let text = data[0];
  let words = data[1];
  let count = 0;

  for (let i = 0; i < text.length; i++) {
    if (text[i] === '_') {
      count++;
    } else {
      if (count > 0) {
        for (let testWord of words) {
          if (testWord.length === count) {
            text = text.replace('_'.repeat(count), testWord);
            count = 0;
          }
        }
      }
    }
  }

  console.log(text);
}

hardWord([
  "Hi, grandma! I'm so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother's ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.",
  ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained'],
]);
