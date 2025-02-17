// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    return str === str.split("").reverse().join("");
}

function palindrome2(str) {
    // not an efficient solution as we are comparing twice then we need to
    // just to show use of advance array helper
    return str.split("").every((char, i) => char === str[str.length-1 -i]);
}

function palindrome3(str) {
    for (let i=0; i<= str.length/2; i++) {
        if (str[i] !== str[str.length-1 -i]) {
            return false;
        }
    }
    return true;
}

module.exports = palindrome3;
