// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    const arr = str.split(""); // python doesn't allow split like this with empty seperator
    arr.reverse();
    return arr.join("");
}

function reverse2(str) {
    return str.split("").reverse().join("");
}

function reverse3(str) {
    let reversed = "";
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

function reverse4(str) {
    let reversed = "";
    for (let i=str.length-1; i>-1 ; i--) {
        reversed += str[i];
    }
    return reversed;
}

function reverse5(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}

module.exports = reverse5;
