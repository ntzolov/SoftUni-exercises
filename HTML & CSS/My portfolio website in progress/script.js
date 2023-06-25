window.addEventListener('load', myFunc);

function myFunc() {
  let timeLeft = 20;
  (function countdown() {
    document.getElementById('seconds').textContent = String(`Content in ${timeLeft}s`);
    if (timeLeft > 0) {
      setTimeout(countdown, 1000);
      setTimeout(hideTimer, 20000);
      setTimeout(colorButtons, 20000);
      setTimeout(showButtons, 20000);
    }
    timeLeft--;
  })();

  function hideTimer() {
    let timer = document.getElementById('clock');
    timer.style.opacity = 0;
  }

  function colorButtons() {
    document.getElementById('projects-buttton').classList.add('projects-coloring');
    document.querySelector('.flex-top-item-1').classList.add('projects-coloring');

    document.getElementById('education-button').classList.add('education-coloring');
    document.querySelector('.flex-bottom-item-1').classList.add('education-coloring');

    document.getElementById('skills-button').classList.add('skills-coloring');
    document.querySelector('.flex-top-item-3').classList.add('skills-coloring');

    document.getElementById('contact-me-button').classList.add('contact-me-coloring');
    document.querySelector('.flex-bottom-item-3').classList.add('contact-me-coloring');
  }

  function showButtons() {
    document.getElementById('projects-buttton').style.pointerEvents = 'initial';
    document.getElementById('education-button').style.pointerEvents = 'initial';
    document.getElementById('skills-button').style.pointerEvents = 'initial';
    document.getElementById('contact-me-button').style.pointerEvents = 'initial';
  }

  document.getElementById('skip').addEventListener('click', (e) => {
    e.preventDefault();

    const text1 = document.querySelector('.flex-middle-item-2-0-inner-top-text-1');
    Array.from(text1.children).forEach((el) => {
      el.style.animationDelay = '0s';
    });

    const text2 = document.querySelector('.flex-middle-item-2-0-inner-top-text-2');
    Array.from(text2.children).forEach((el) => {
      el.style.animationDelay = '0s';
    });

    const text3 = document.querySelector('.flex-middle-item-2-0-inner-top-text-3');
    Array.from(text3.children).forEach((el) => {
      el.style.animationDelay = '0s';
    });

    const text4 = document.querySelector('.flex-middle-item-2-0-inner-top-text-4');
    Array.from(text4.children).forEach((el) => {
      el.style.animationDelay = '0s';
    });

    document.getElementById('projects-buttton').style.pointerEvents = 'initial';
    document.getElementById('projects-buttton').classList.add('projects-coloring');
    document.querySelector('.flex-top-item-1').classList.add('projects-coloring');

    document.getElementById('education-button').style.pointerEvents = 'initial';
    document.getElementById('education-button').classList.add('education-coloring');
    document.querySelector('.flex-bottom-item-1').classList.add('education-coloring');

    document.getElementById('skills-button').style.pointerEvents = 'initial';
    document.getElementById('skills-button').classList.add('skills-coloring');
    document.querySelector('.flex-top-item-3').classList.add('skills-coloring');

    document.getElementById('contact-me-button').style.pointerEvents = 'initial';
    document.getElementById('contact-me-button').classList.add('contact-me-coloring');
    document.querySelector('.flex-bottom-item-3').classList.add('contact-me-coloring');

    hideTimer();
  });

  const descriptions = Array.from(document.querySelectorAll('.project-description'));
  descriptions.forEach((el) => {
    el.addEventListener('mouseover', addOpacity);
    el.addEventListener('mouseout', removeOpacity);
  });

  function addOpacity(e) {
    e.currentTarget.style.backgroundColor = '#ffffff2d';
  }

  function removeOpacity(e) {
    e.currentTarget.style.backgroundColor = '#fff0';
  }
}

function colorHome() {
  document.getElementById('container-flex-middle').style.backgroundColor = '#54616d00';
}

function colorProjects() {
  document.getElementById('container-flex-middle').style.backgroundImage = 'none';
  document.getElementById('container-flex-middle').style.backgroundColor = '#8A9A5B';
}

function colorEducation() {
  document.getElementById('container-flex-middle').style.backgroundImage = 'none';
  document.getElementById('container-flex-middle').style.backgroundColor = '#78a5a3';
}

function colorSkills() {
  document.getElementById('container-flex-middle').style.backgroundImage = 'none';
  document.getElementById('container-flex-middle').style.backgroundColor = '#db6b67';
}

function colorContactMe() {
  document.getElementById('container-flex-middle').style.backgroundImage = 'none';
  document.getElementById('container-flex-middle').style.backgroundColor = '#e1b16a';
}

function home() {
  let main = document.getElementById('zero');
  let projects = document.getElementById('one');
  let education = document.getElementById('two');
  let skills = document.getElementById('three');
  let contactMe = document.getElementById('four');
  let projectsButton = document.getElementById('projects');
  let educationButton = document.getElementById('education');
  let skillsButton = document.getElementById('skills');
  let contactMeButton = document.getElementById('contact-me');

  if (
    projects.style.display !== 'none' ||
    education.style.display !== 'none' ||
    skills.style.display !== 'none' ||
    contactMe.style.display !== 'none'
  ) {
    projects.style.display = 'none';
    education.style.display = 'none';
    skills.style.display = 'none';
    contactMe.style.display = 'none';
  }

  projectsButton.style.fontSize = '1rem';
  educationButton.style.fontSize = '1rem';
  skillsButton.style.fontSize = '1rem';
  contactMeButton.style.fontSize = '1rem';
  location.reload();
}

function projects() {
  let main = document.getElementById('zero');
  let projects = document.getElementById('one');
  let education = document.getElementById('two');
  let skills = document.getElementById('three');
  let contactMe = document.getElementById('four');
  let projectsButton = document.getElementById('projects');
  let educationButton = document.getElementById('education');
  let skillsButton = document.getElementById('skills');
  let contactMeButton = document.getElementById('contact-me');

  if (
    main.style.display !== 'none' ||
    education.style.display !== 'none' ||
    skills.style.display !== 'none' ||
    contactMe.style.display !== 'none'
  ) {
    main.style.display = 'none';
    education.style.display = 'none';
    skills.style.display = 'none';
    contactMe.style.display = 'none';
  }
  projects.style.display = 'initial';

  projectsButton.style.fontSize = '1.5rem';
  educationButton.style.fontSize = '1rem';
  skillsButton.style.fontSize = '1rem';
  contactMeButton.style.fontSize = '1rem';
  setTimeout(colorProjects, 500);
}

function education() {
  let main = document.getElementById('zero');
  let projects = document.getElementById('one');
  let education = document.getElementById('two');
  let skills = document.getElementById('three');
  let contactMe = document.getElementById('four');
  let projectsButton = document.getElementById('projects');
  let educationButton = document.getElementById('education');
  let skillsButton = document.getElementById('skills');
  let contactMeButton = document.getElementById('contact-me');

  if (
    main.style.display !== 'none' ||
    projects.style.display !== 'none' ||
    skills.style.display !== 'none' ||
    contactMe.style.display !== 'none'
  ) {
    main.style.display = 'none';
    projects.style.display = 'none';
    skills.style.display = 'none';
    contactMe.style.display = 'none';
  }
  education.style.display = 'initial';

  projectsButton.style.fontSize = '1rem';
  educationButton.style.fontSize = '1.5rem';
  skillsButton.style.fontSize = '1rem';
  contactMeButton.style.fontSize = '1rem';
  setTimeout(colorEducation, 500);
}

function skills() {
  let main = document.getElementById('zero');
  let projects = document.getElementById('one');
  let education = document.getElementById('two');
  let skills = document.getElementById('three');
  let contactMe = document.getElementById('four');
  let projectsButton = document.getElementById('projects');
  let educationButton = document.getElementById('education');
  let skillsButton = document.getElementById('skills');
  let contactMeButton = document.getElementById('contact-me');

  if (
    main.style.display !== 'none' ||
    projects.style.display !== 'none' ||
    education.style.display !== 'none' ||
    contactMe.style.display !== 'none'
  ) {
    main.style.display = 'none';
    projects.style.display = 'none';
    education.style.display = 'none';
    contactMe.style.display = 'none';
  }
  skills.style.display = 'initial';

  projectsButton.style.fontSize = '1rem';
  educationButton.style.fontSize = '1rem';
  skillsButton.style.fontSize = '1.5rem';
  contactMeButton.style.fontSize = '1rem';
  setTimeout(colorSkills, 500);
}

function contactMe() {
  let main = document.getElementById('zero');
  let projects = document.getElementById('one');
  let education = document.getElementById('two');
  let skills = document.getElementById('three');
  let contactMe = document.getElementById('four');
  let projectsButton = document.getElementById('projects');
  let educationButton = document.getElementById('education');
  let skillsButton = document.getElementById('skills');
  let contactMeButton = document.getElementById('contact-me');

  if (
    main.style.display !== 'none' ||
    projects.style.display !== 'none' ||
    education.style.display !== 'none' ||
    skills.style.display !== 'none'
  ) {
    main.style.display = 'none';
    projects.style.display = 'none';
    education.style.display = 'none';
    skills.style.display = 'none';
  }
  contactMe.style.display = 'initial';

  projectsButton.style.fontSize = '1rem';
  educationButton.style.fontSize = '1rem';
  skillsButton.style.fontSize = '1rem';
  contactMeButton.style.fontSize = '1.5rem';
  setTimeout(colorContactMe, 500);
}

function sendContact() {
  const form = document.getElementById('form');
  const result = document.getElementById('result');
  result.style.color = 'black';

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
    result.innerHTML = 'Please wait...';

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    })
      .then(async (response) => {
        let json = await response.json();
        if (response.status == 200) {
          result.style.color = 'green';
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.style.color = 'red';
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
        result.style.color = 'red';
        result.innerHTML = 'Something went wrong!';
      })
      .then(function () {
        form.reset();
        setTimeout(() => {
          result.style.display = 'none';
        }, 3000);
      });
  });
}
