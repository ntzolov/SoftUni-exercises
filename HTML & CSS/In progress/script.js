function colorHome() {
  document.getElementById('container-flex-middle').style.backgroundColor =
    '#54616d';
}

function colorProjects() {
  document.getElementById('container-flex-middle').style.backgroundImage =
    'none';
  document.getElementById('container-flex-middle').style.backgroundColor =
    '#8A9A5B';
}

function colorEducation() {
  document.getElementById('container-flex-middle').style.backgroundImage =
    'none';
  document.getElementById('container-flex-middle').style.backgroundColor =
    '#78a5a3';
}

function colorSkills() {
  document.getElementById('container-flex-middle').style.backgroundImage =
    'none';
  document.getElementById('container-flex-middle').style.backgroundColor =
    '#ce5a57';
}

function colorContactMe() {
  document.getElementById('container-flex-middle').style.backgroundImage =
    'none';
  document.getElementById('container-flex-middle').style.backgroundColor =
    '#e1b16a';
}

function hideTimer() {
  let timer = document.getElementById('clock');
  timer.style.display = 'none';
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
  main.style.display = 'initial';

  projectsButton.style.fontSize = '1rem';
  educationButton.style.fontSize = '1rem';
  skillsButton.style.fontSize = '1rem';
  contactMeButton.style.fontSize = '1rem';
  colorHome();
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
          result.innerHTML = json.message;
        } else {
          console.log(response);
          result.innerHTML = json.message;
        }
      })
      .catch((error) => {
        console.log(error);
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

let timeLeft = 20;
function countdown() {
  document.getElementById('seconds').innerHTML = String(`Content in ${timeLeft}s`);
  if (timeLeft > 0) {
    setTimeout(countdown, 1000);
    setTimeout(hideTimer, 20000);
    setTimeout(showButtons, 20000);
  }
  timeLeft--;
}

function showButtons() {
  let allButtons = document.getElementById('main-container');
  allButtons.style.pointerEvents = 'initial';
}
