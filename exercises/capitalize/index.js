// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let result = "";
    for (const word of str.split(" ")) {
        result +=  word[0].toUpperCase() + word.slice(1) + " ";
    }
    return result.slice(0, -1); // removing trailing space, you can also use .trim()
}

function capitalize2(str) {
    let words = []
    for (const word of str.split(" ")) {
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(" ");
}

function capitalize3(str) {
    let cap = true;
    let strArr = str.split("");

    for (let i=0; i<strArr.length; i++) {
        if (strArr[i] === " ") {
            cap = true;
            continue;
        }
        if (cap) {
            strArr[i] = strArr[i].toUpperCase();
            cap = false;
        }
    }

    return strArr.join("");
}

// console.log(capitalize2("aah, pow"));

module.exports = capitalize;
