// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//   let obj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]]++;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }
//   let max = '';
//   let count = 0;
//   for (let key in obj) {
//     if (obj[key] >= count) {
//       count = obj[key];
//       max = key;
//     }
//   }
//   return max;
// }

function maxChar(str) {
  let charMap = {};
  let maxChar = '';
  let max = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }
  return maxChar;
}

module.exports = maxChar;
