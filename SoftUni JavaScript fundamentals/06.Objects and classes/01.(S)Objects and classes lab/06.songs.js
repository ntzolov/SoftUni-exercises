function songs(arrayInput) {
  class Song {
    constructor(typeList, name, time) {
      this.typeList = typeList;
      this.name = name;
      this.time = time;
    }
  }

  let countSongs = arrayInput.shift();
  let typeListChosen = arrayInput.pop();

  for (let i = 0; i < countSongs; i++) {
    let currSong = arrayInput[i].split('_');
    let [typeList, name, time] = [...currSong];

    let song = new Song(typeList, name, time);

    if (typeListChosen === 'all') {
      console.log(song.name);
    }
    if (typeListChosen === song.typeList) {
      console.log(song.name);
    }
  }
}

songs([
  4,
  'favourite_DownTown_3:14',
  'listenLater_Andalouse_3:24',
  'favourite_In To The Night_3:58',
  'favourite_Live It Up_3:48',
  'listenLater',
]);
