function tseamAccount(arr) {
  let installedGames = arr[0].replace(/-/g, ':').split(' ');
  let install = [];
  let uninstall = [];
  let update = [];
  let expansion = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i].includes('Install')) {
      install = arr[i].replace(/-/g, ':').split(' ');
      if (installedGames.includes(install[1])) {
      } else installedGames.push(install[1]);
    } else if (arr[i].includes('Uninstall')) {
      uninstall = arr[i].replace(/-/g, ':').split(' ');
      if (installedGames.includes(uninstall[1])) {
        for (let i = 0; i < installedGames.length; i++) {
          if (installedGames[i] === uninstall[1]) {
            installedGames.splice(i, 1);
            continue;
          }
        }
      }
    } else if (arr[i].includes('Update')) {
      update = arr[i].replace(/-/g, ':').split(' ');
      if (installedGames.includes(update[1])) {
        for (let i = 0; i < installedGames.length; i++) {
          if (installedGames[i] === update[1]) {
            installedGames.splice(i, 1);
            installedGames.push(update[1]);
            continue;
          }
        }
      }
    } else if (arr[i].includes('Expansion')) {
      expansion = arr[i].split(' ')[1];
      let gameToExp = '';
      for (let i = 0; i < expansion.length; i++) {
        if (expansion[i] !== '-') {
          gameToExp += expansion[i];
        } else {
          break;
        }
      }

      let expToAdd = '';
      for (let j = expansion.length - 1; j >= 0; j--) {
        if (expansion[j] !== '-') {
          expToAdd += expansion[j];
        } else {
          break;
        }
      }
      expToAdd = expToAdd.split('').reverse().join('');

      if (installedGames.includes(gameToExp)) {
        let index = installedGames.indexOf(gameToExp);
        installedGames.splice(index + 1, 0, `${gameToExp}:${expToAdd}`);
      }
    } else {
      break;
    }
  }
  console.log(installedGames.join(' '));
}

tseamAccount([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);
