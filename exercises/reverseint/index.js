// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    const sign = n < 0 ? "-" : "";
    return Number(sign + String(Math.abs(n)).split("").reverse().join(""));
}

function reverseInt2(n) {
    const sign = n < 0 ? -1 : 1;
    return sign * Number(String(Math.abs(n)).split("").reverse().join(""));
}

function reverseInt3(n) {
    const sign = n < 0 ? "-" : "";
    return parseInt(sign + Math.abs(n).toString().split("").reverse().join(""));
}

function reverseInt4(n) {
    const sign = Math.sign(n);
    let rev = 0
    n = Math.abs(n);
    while (n > 0) {
        let rmd = n % 10 // for integer number modulus 10 gives rightmostdigit
        rev = rev*10 + rmd;
        n = parseInt(n / 10)
    }
    return sign * rev
}

module.exports = reverseInt4;
