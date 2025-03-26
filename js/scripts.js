const extractVowels = words => {
  const vowels = "AaEeIiOoUu";
  let extractEach = [];
  for (const word of words) {
    if (vowels.includes(word)) {
      extractEach.push(word);
    }
  }
  return extractEach;
};

const extractConsonats = words => {
  const consonats = "BbCcDdFfGgHhJjKkLlMmNnÑñPpQqRrSsTtVvXxZzWwYy";
  let extractEach = [];
  for (const word of words) {
    if (consonats.includes(word)) {
      extractEach.push(word);
    }
  }
  return extractEach;
};

const fillTowerData = sentence => {
  console.log(sentence);
  const vowels = extractVowels(words);
  const levelOne = vowels;
  const levelTwo = extractConsonats(sentence);
  console.log(levelOne);
  console.log(levelTwo);
};

const towerData = {
  levelOne: {
    sentence: "1️⃣ Nivel Uno: La Cámara de las Voces Perdidas",
    vowels: [], // Vocales extraídas
  },
  levelTwo: {
    consonants: [], // Consonantes extraídas
  },
  levelThree: {
    words: [], // Palabras extraídas en orden normal
  },
  levelFour: {
    wordLengths: [], // Longitud de cada palabra
  },
  levelFive: {
    uppercasedWords: [], // Palabras en mayúsculas
    lowercasedWords: [], // Palabras en minúsculas
  },
  levelSix: {
    secretMessage: "", // Mensaje codificado usando reglas especiales
  },
  levelSeven: {
    totalLength: 0, // Suma total de la longitud de todas las palabras
  },
  levelEight: {
    reversedWords: [], // Palabras invertidas de la frase original
  },
  levelNine: {
    randomCode: "", // Código aleatorio generado en base a toda la información
  },
  levelTen: {
    finalMessage: "", // Código final calculado usando todos los niveles
  },
};

console.log(towerData.levelOne.sentence);
console.log(towerData.levelTwo);
