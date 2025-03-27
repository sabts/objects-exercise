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
const vowels = "AaEeIiOoUu";
const consonants = "BbCcDdFfGgHhJjKkLlMmNnÑñPpQqRrSsTtVvXxZzWwYy";
const alphabet = "abcdefghijklmnñopqrstuvwxyz";

//1️⃣ Nivel Uno: La Cámara de las Voces Perdidas
//Extrae todas las vocales de la frase introducida y almacénalas en towerData.levelOne.vowels.
const extractVowels = words => {
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
  let extractEach = [];
  for (const word of words) {
    if (consonants.includes(word)) {
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
return {
  uppercasedWords: uppercasedWords,
  lowercasedWords: lowercasedWords
};
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
  let secretMessage = messages;
  let finalMessage = '';


  secretMessage = messages.replaceAll(/a/gi, "1").replaceAll(/e/gi, "2")
  .replaceAll(/i/gi, "3").replaceAll(/o/gi, "4").replaceAll(/u/gi, "5");
  
  for (const letter of secretMessage.toLowerCase()) {
      if(letter === 'b' || letter === 'B') 
        {
        finalMessage += 'z';
      }
      else if (consonants.includes(letter)) 
        {
          finalMessage += consonants.charAt(consonants.indexOf(letter)+1);
      }
       else if (letter === ' '){
        secretMessage += alphabet.charAt(Math.floor(Math.random() *alphabet.length))
      }
    else {
      finalMessage += letter}
  }
  return finalMessage
}

//7️⃣ Nivel Siete: El Oráculo de la Suma
//Calcula la suma total de las longitudes de todas las palabras obtenidas en el nivel 4 y almacénalo en //towerData.levelSeven.totalLength.
const totalSumOfLevel4 = (words) =>{
  const wordsLengths = towerData.levelFour.wordLengths;
  let totalSum = 0;

  for(let i = 0; i< wordsLengths.length; i++){
    totalSum += wordsLengths[i];
  }
return totalSum
}

//8️⃣ Nivel Ocho: El Reflejo Invertido
//Invierte cada palabra del array towerData.levelThree.words y guárdalas en towerData.levelEight.reversedWords.
const invertLevel3Words = (keywords) =>{
  reverseText = [];

  for (const keyword of keywords) {
    const reverseWords = keyword.split("").reverse().join("");
    reverseText.push(reverseWords)
  }
  return reverseText
}

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
  towerData.levelOne.vowels = levelOne;

  const levelTwo = extractConsonats(sentence);
  towerData.levelTwo.consonants = levelTwo

  const levelThree = fragmentedWords (sentence);
  towerData.levelThree.words = levelThree;

  const levelFour = lengthCalculator(levelThree);
  towerData.levelFour.wordLengths = levelFour;

  const levelFive = saveCapitalLetters(levelThree);
  towerData.levelFive.uppercasedWords = levelFive.uppercasedWords;
  towerData.levelFive.lowercasedWords = levelFive.lowercasedWords;

  const levelSix = VowelToNumberSecretEncryptor(sentence);
  towerData.levelSix.secretMessage = levelSix;

  const levelSeven = totalSumOfLevel4(levelFour)
  towerData.levelSeven.totalLength = levelSeven;

  const levelEight = invertLevel3Words(levelThree)
  towerData.levelEight.reversedWords = levelEight;

  console.log('Nivel 1 ' +levelOne);
  console.log('Nivel 2 ' +levelTwo);
  console.log('Nivel 3 ' +levelThree);
  console.log('Nivel 4 ' +levelFour);
  console.log('Nivel 5 ' +levelFive);
  console.log('Nivel 6 ' +levelSix);
  console.log('Nivel 7 ' +levelSeven);
  console.log('Nivel 8 ' +levelEight);
};

fillTowerData("Departamento de los Fututos Programadores Torturados");
towerData.levelOne.vowels = fillTowerData

console.log(towerData);
