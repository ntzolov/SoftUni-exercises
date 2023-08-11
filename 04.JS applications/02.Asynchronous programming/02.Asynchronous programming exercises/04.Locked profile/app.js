async function lockedProfile() {
  const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
  const data = await response.json();
  const main = document.getElementById('main');

  Object.values(data).forEach((obj) => {
    const divProfile = document.createElement('div');
    divProfile.classList.add('profile');
    divProfile.innerHTML = `
        <img src="./iconProfile2.png" class="userIcon" />
        <label>Lock</label>
        <input type="radio" name="${obj.username}Locked" value="lock" checked=true>
        <label>Unlock</label>
        <input type="radio" name="${obj.username}Locked" value="unlock"><br>
        <hr>
        <label>Username</label>
        <input type="text" name="user1Username" value="${obj.username}" disabled readonly />
        <div class="user1Username">
            <hr>
            <label>Email:</label>
            <input type="email" name="user1Email" value="${obj.email}" disabled readonly />
            <label>Age:</label>
            <input type="email" name="user1Age" value="${obj.age}" disabled readonly />
        </div>
        
        <button>Show more</button>
        `;

    divProfile.querySelector('.user1Username').style.display = 'none';
    divProfile.querySelector('button').addEventListener('click', showMore);
    main.appendChild(divProfile);
  });
}

function showMore(e) {
  const divProfile = e.target.parentElement;
  const checkElement = divProfile.querySelector('[type="radio"]');
  const hiddenDiv = divProfile.querySelector('.user1Username');

  if (checkElement.checked === false) {
    if (e.target.textContent === 'Show more') {
      hiddenDiv.style.display = 'block';
      e.target.textContent = 'Hide it';
    } else {
      hiddenDiv.style.display = 'none';
      e.target.textContent = 'Show more';
    }
  }
}
