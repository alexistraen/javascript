//Exercice 1 : Donner la taille de la chaîne de caractères.
let stringLength = function (sentence) {
  let response = sentence.length;
  return response;
}

//Exercice 2 : Remplacer le premier "e" de la chaîne par un espace.
let replaceFirstEBySpace = function (sentence) {
  let response2 = sentence.replace('e', ' ');
  return response2;
}

//Exercice 3 : Concaténer les deux chaînes de caractères.
let concatenateSentences = function (firstSentence, secondSentence) {
  let response3 = (firstSentence + secondSentence)
  return response3;
}

//Exercice 4 : Afficher le cinquième caractère de la chaîne.
let displayFifthCharacter = function (sentence) {
  let response4 = sentence.charAt(4)
  return response4;
}

//Exercice 5 : Afficher les 9 premiers caractère.
let displayFirstNineCharacters = function (sentence) {
  let response5 = sentence.substr(0, 9)
  return response5;
}

//Exercice 6 : Mettre en majuscule la chaîne.
let upperTheSentence = function (sentence) {
  let response6 = sentence.toUpperCase()
  return response6;
}

//Exercice 7 : Mettre en minuscule la chaîne.
let lowerTheSentence = function (sentence) {
  let response7 = sentence.toLowerCase()
  return response7;
}

//Exercice 8 : Supprimer les espaces avant et après la chaîne.
let removeSpaces = function (sentence) {
  let response8 = sentence.trim()
  return response8;
}

//Exercice 9 : Afficher true si le paramètre d'entrée de la fonction est de type *string*.
let isString = function (sentence) {
  let response9 = typeof sentence ==='string';
  return response9;
}

//Exercice 10 : Afficher l'extension du fichier.
let displayExtension = function (fileName) {
  let response10 = fileName.split('.').pop();
  return response10;
}

//Exercice 11 : Compter le nombre d'espace dans la chaîne.
let countSpaces = function (sentence) {
  let response11 = sentence.indexOf(' ');
  let count = 0;

  while ( response11 != -1 ) {
    count++;
    response11 = sentence.indexOf(' ',response11 + 1);
 }
  return count;
}

//Exercice 12 : Inverser une chaîne de caractères.
let invertSentence = function (sentence) {
  let response13 = sentence.split('').reverse('').join('')
  return response13;
}

//Exercice 13 : Chercher si dans la chaîne de caractère se trouve "La Manu".
let searchInSentence = function (sentence) {
  let response13 = sentence.indexOf('La Manu') != -1;
  return response13;
}

//Exercice 14 : Afficher la valeur absolue d'un nombre.
let displayAbsoluteValue = function (number) {
  let response14 = Math.abs(number);
  return response14;
}

//Exercice 15 : Afficher les valeurs absolues de plusieurs nombres.
let displayAbsoluteValues = function (numbersArray) {
  console.log(numbersArray)
  let response15 = numbersArray.map(Math.abs);
  
  console.log(response15)
  return response15;
}

//Exercice 16 : Calculer la surface d'un cercle en fonction de son rayon. L'arondir à l'entier le plus proche.
let calculateArea = function (radius) {
  response16 = Math.ceil(Math.PI * (radius * 22));
  return response16;
}

//Exercice 17 : Calculer l'hypothènuse d\'un triangle rectangle. Arrondir à l'entier inférieur.
let calculateHypotenuse = function (a, b) {
  let response17 = Math.floor(Math.hypot(a, b));
  return response17;
}
