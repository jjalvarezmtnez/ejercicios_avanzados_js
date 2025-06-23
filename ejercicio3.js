/* Dado el siguiente código usa forof y forin para saber cuantas
veces ha sido cada sonido agregado por los usuarios a favorito.
Para ello recorre la lista de usuarios y usa forin para recoger
el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo
de cada vez que ese sonido se repita como favorito en cada usuario.
Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto
y oportunidad para comprender que hay muchas formas de hacer las cosas en JavaScript. */

const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Santiago",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Laura",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

function amountOfFavoriteSounds(users){
  const favoriteSounds = [];
  let soundName;
  let soundCount = 0;
  const favoriteSoundsOutput = [];
  const noFavoriteSoundTextOutput = "No hay ningun sonido favorito."

  for (const user of users){
    for (const sound in user.favoritesSounds){
      favoriteSounds.push(sound);
    };
  };

  favoriteSounds.sort();

  if (favoriteSounds.length > 0){
    for (let i = 0; i < favoriteSounds.length; i++){
    if (i === 0){
      soundName = favoriteSounds[i];
      soundCount++;
    } else if ((i !== 0) && (favoriteSounds[i] === soundName)){
      soundCount++;
    } else if ((i !== 0) && (favoriteSounds[i] !== soundName)){
      favoriteSoundsOutput.push({name: soundName, amount: soundCount});
      soundName = favoriteSounds[i];
      soundCount = 1;
    };
    };

    favoriteSoundsOutput.push({name: soundName, amount: soundCount});
    return favoriteSoundsOutput;

  } else {
    return noFavoriteSoundTextOutput;
  };
};

console.log(amountOfFavoriteSounds(users));