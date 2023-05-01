function solve() {
  const ul = document.getElementById('results');
  const result = document.querySelector('.results-inner').children[0];
  const section1 = document.querySelectorAll('section')[0];
  const section2 = document.querySelectorAll('section')[1];
  const section3 = document.querySelectorAll('section')[2];

  const answer1 = section1.querySelectorAll('li')[1];
  const answer2 = section1.querySelectorAll('li')[2];

  let correctAnswers = 0;

  answer1.addEventListener('click', () => {
    correctAnswers++;
    section1.style.display = 'none';
    section2.style.display = 'block';
  });

  answer2.addEventListener('click', () => {
    section1.style.display = 'none';
    section2.style.display = 'block';
  });

  const answer3 = section2.querySelectorAll('li')[1];
  const answer4 = section2.querySelectorAll('li')[2];

  answer3.addEventListener('click', () => {
    section2.style.display = 'none';
    section3.style.display = 'block';
  });

  answer4.addEventListener('click', () => {
    correctAnswers++;
    section2.style.display = 'none';
    section3.style.display = 'block';
  });

  const answer5 = section3.querySelectorAll('li')[1];
  const answer6 = section3.querySelectorAll('li')[2];

  answer5.addEventListener('click', () => {
    correctAnswers++;
    if (correctAnswers === 3) {
      result.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      result.textContent = `You have ${correctAnswers} right answers`;
    }
    section3.style.display = 'none';
    ul.style.display = 'block';
  });

  answer6.addEventListener('click', () => {
    if (correctAnswers === 3) {
      result.textContent = 'You are recognized as top JavaScript fan!';
    } else {
      result.textContent = `You have ${correctAnswers} right answers`;
    }
    section3.style.display = 'none';
    ul.style.display = 'block';
  });
}
