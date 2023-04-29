function lockedProfile() {
  const profilesList = Array.from(document.querySelectorAll('.profile'));

  profilesList.forEach((profile) => {
    const isLocked = profile.querySelector('input[value="unlock"]');
    const moreLessBtn = profile.querySelector('button');
    const hiddenInfo = profile.querySelector('div');

    moreLessBtn.addEventListener('click', onClick);
    function onClick() {
      if (isLocked.checked && hiddenInfo.style.display !== 'block') {
        hiddenInfo.style.display = 'block';
        moreLessBtn.textContent = 'Hide it';
      } else if (isLocked.checked && hiddenInfo.style.display !== 'none') {
        hiddenInfo.style.display = 'none';
        moreLessBtn.textContent = 'Show more';
      }
    }
  });
}
