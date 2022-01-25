// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    // extracting only alphanumeric chars
    const strA = stringA.replace(/[^\w]/g, "").toLowerCase();
    const strB = stringB.replace(/[^\w]/g, "").toLowerCase();    

    if (strA.length !== strB.length) {
        return false;
    }

    const strACharCount = {};
    const strBCharCount = {};

    // different ways to fill the charCountObject
    for (const char of strA) {
        strACharCount[char] = strACharCount[char] ? strACharCount[char]+1 : 1; 
    }

    for (const char of strB) {
        strBCharCount[char] = strBCharCount[char]+1 || 1; 
    }

    // if (Object.keys(strACharCount).length !== Object.keys(strBCharCount).length) {
    //     console.log(Object.keys(strACharCount).length , Object.keys(strBCharCount).length)
    //     return false;
    // }

    for (const char in strACharCount) {
        if (strACharCount.hasOwnProperty(char)) {
            if (strACharCount[char] !== strBCharCount[char]) { 
                // quantity mismatch 
                // or char is not present in strBCharCount (JS doesn't throw KeyError instead in this case value of strBCharCount[char] will be undefined)
                return false;
            }            
        }
    }
    return true;
}

function anagrams2(stringA, stringB) {
    const getAlphaNumStr = string => string.replace(/[^\w]/g, "");
    const [strA, strB] = [stringA, stringB].map(string => getAlphaNumStr(string).toLowerCase());

    if (strA.length !== strB.length) { return false; }

    return strA.split("").sort().join("") === strB.split("").sort().join("");
}

// console.log(anagrams('A tree, a life, a bench', 'A tree, a fence, a yard'));

module.exports = anagrams2;
