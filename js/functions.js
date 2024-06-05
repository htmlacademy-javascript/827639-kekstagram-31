function checkLength(string, length) {
  if (string.length <= length) {
    return true;
  }
  return false;
  return string.length <= length
}
// console.log(checkLength('проверяемая строка', 20));
// console.log(checkLength('проверяемая строка', 18));
// console.log(checkLength('проверяемая строка', 10));

function checkPalindrom(string) {
  let normalizeString = string.replaceAll(' ', '');
  normalizeString = normalizeString.toUpperCase();
  let newString = '';

  for (i = normalizeString.length - 1; i >= 0; i = i-1) {
    newString += normalizeString[i];
  }

  return newString === normalizeString;
}
// console.log(checkPalindrom('топот'));
// console.log(checkPalindrom('ДовОд'));
// console.log(checkPalindrom('Кекс'));
// console.log(checkPalindrom('Лёша на полке клопа нашёл '));

function returnNumbers(string) {
  let number = '';

  for (i = 0; i <= string.length - 1; i++) {
    if (Number.isNaN(parseInt(string[i])) === false) {
      number += string[i];
    }
  }

  return number;
}

// console.log(returnNumbers('2023 год'));
// console.log(returnNumbers('ECMAScript 2022'));
// console.log(returnNumbers('1 кефир, 0.5 батона'));
// console.log(returnNumbers('агент 007'));
// console.log(returnNumbers('а я томат'));
