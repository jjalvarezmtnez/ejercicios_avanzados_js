/* Crea una función llamada swap que reciba un array
y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores
de los indices que hayamos enviado como parametro.
Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante. */

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2){
  if ((index1 < array.length) && (index2 < array.length)){
    const arrayOutput = [];
    for (let i = 0; i < array.length; i++){
      if (i !== index1 && i !== index2){
        arrayOutput.push(array[i]);
      } else if (i === index1){
        arrayOutput.push(array[index2]);
      } else if (i === index2){
        arrayOutput.push(array[index1]);
      };
    };
    return arrayOutput;
  };
};

console.log(fantasticFour);
console.log(swap(fantasticFour, 1, 3));