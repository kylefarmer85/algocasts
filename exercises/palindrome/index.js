// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let rev = str.split('').reverse().join('');
  return rev === str;
}

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}


// solve in plaindrome is out of order: skilled interview question:

// function palindromeSkilledInterview(str) {
//   let obj = {};

//   for (let i = 0; i < str.length; i++) {
//     if (obj[str[i]]) {
//       obj[str[i]] += 1;
//     } else {
//       obj[str[i]] = 1;
//     }
//   }

//   let count = 0;
//   for (let key in obj) {
//     if (obj[key] % 2 !== 0) {
//       count += 1;
//     }
//   }
//   return count > 1;
// }

// palindrome('aabbbaa') // true
// palindrome('ababaa') // false

module.exports = palindrome;
