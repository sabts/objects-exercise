const towerData = {
  levelOne: {
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

//1️⃣ Nivel Uno: La Cámara de las Voces Perdidas
//Extrae todas las vocales de la frase introducida y almacénalas en towerData.levelOne.vowels.
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

//2️⃣ Nivel Dos: La Biblioteca de Consonantes Prohibidas
//Extrae todas las consonantes de la frase y almacénalas en towerData.levelTwo.consonants.
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

//3️⃣ Nivel Tres: El Salón de las Palabras Fragmentadas
//Divide la frase en palabras y guárdalas en towerData.levelThree.words.
const fragmentedWords = words => {
  let fragmentedSentence = [];
  fragmentedSentence = words.split(' ');
  return fragmentedSentence
  }

//4️⃣ Nivel Cuatro: La Sala de la Longitud Eterna
//Calcula la longitud de cada palabra de towerData.levelThree.words y guárdalas en towerData.levelFour.wordLengths.
const  lengthCalculator = words =>{
  let lengths = [];
  for (let i = 0; i < words.length; i++) {
    lengths.push(words[i].length);
  }
  return lengths;
  }
//5️⃣ Nivel Cinco: El Espejo Dual
//Convierte cada palabra de towerData.levelThree.words a mayúsculas y guárdalas en towerData.levelFive.uppercasedWords.
const saveCapitalLetters = capitals => {
  const uppercasedWords = [];
  const lowercasedWords = [];
for (const word of capitals) {
  lowercasedWords.push(word.toLowerCase())
  uppercasedWords.push(word.toUpperCase())
}
return uppercasedWords
}

//6️⃣ Nivel Seis: El Encriptador de Secretos
//Crea un mensaje secreto aplicando las siguientes reglas:
//Vocales se reemplazan por números:
//a → 1, e → 2, i → 3, o → 4, u → 5
//Investiga la función replaceAll y las expresiones regulares
//Consonantes se reemplazan por la consonante anterior en el alfabeto (excepto b -> z).
//Espacios se reemplazan por una letra aleatoria del alfabeto.
//Guarda el resultado en towerData.levelSix.secretMessage.
const VowelToNumberSecretEncryptor = (messages) => {
  const consonats = "bcdfghjklmnñpqrstvwxyz";
  const alphabet = "abcdefghijklmnñopqrstuvwxyz";
  let secretMessage = messages;

  secretMessage = secretMessage.replaceAll(/a/gi, "1");
  secretMessage = secretMessage.replaceAll(/e/gi, "2");
  secretMessage = secretMessage.replaceAll(/i/gi, "3");
  secretMessage = secretMessage.replaceAll(/o/gi, "4");
  secretMessage = secretMessage.replaceAll(/u/gi, "5");
  
  let encrypConsonat = '';
  for (const message of messages) {
    encrypConsonat = alphabet.charAt(length-1) ;
    
  }

  secretMessage = secretMessage.replace(/ /g, () => {
    const randomLetter = Math.floor(Math.random() * alphabet.length);

    return alphabet[randomLetter];
  })
  
  return secretMessage;  // 
}


//7️⃣ Nivel Siete: El Oráculo de la Suma
//Calcula la suma total de las longitudes de todas las palabras obtenidas en el nivel 4 y almacénalo en //towerData.levelSeven.totalLength.
const totalSumOfLevel4 = (words) =>{
  const wordsLengths = levelFour
  let totalLength = 0;

}


//8️⃣ Nivel Ocho: El Reflejo Invertido
//Invierte cada palabra del array towerData.levelThree.words y guárdalas en towerData.levelEight.reversedWords.

//9️⃣ Nivel Nueve: La Cámara del Códex Aleatorio
//Genera un código único combinando:
//La primera letra de cada palabra invertida (nivel 8).
//Los suma de los números generados en towerData.levelSeven.totalLength dividido entre 2.
//Un número aleatorio entre 1000 y 9999.
//Almacena el código generado en towerData.levelNine.randomCode.


// 🔟 Nivel Diez: La Prueba Suprema - El Guardián del Código Final
//Usa TODOS los valores obtenidos en los niveles anteriores para generar un código maestro único.
//La fórmula del código maestro será la siguiente:
//finalMessage = (Total de vocales _ Longitud total obtenida en el nivel 7) + (Cantidad de consonantes _ Número aleatorio generado en Nivel 9) - (Número de palabras * Número de caracteres en el mensaje secreto)


// Ejecutador de funciones
const fillTowerData = sentence => {
  const levelOne = extractVowels(sentence);
  const levelTwo = extractConsonats(sentence);
  const levelThree = fragmentedWords (sentence);
  const levelFour = lengthCalculator(levelThree);
  const levelFive = saveCapitalLetters(levelThree);
  const levelSix = VowelToNumberSecretEncryptor(sentence);
  console.log('Nivel 1 ' +levelOne);
  console.log('Nivel 2 ' +levelTwo);
  console.log('Nivel 3 ' +levelThree);
  console.log('Nivel 4 ' +levelFour);
  console.log('Nivel 5 ' +levelFive);
  console.log('Nivel 6 ' +levelSix);
};

fillTowerData("Departamento de los Programadores Torturados");

console.log(towerData);
