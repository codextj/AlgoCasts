// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charCountObj = {}
    for (const char of str) {
        charCountObj[char] = charCountObj[char] + 1 || 1;
    }

    let maxCount = 0, maxChar = ""
    for (const char in charCountObj) {
        if (charCountObj[char] > maxCount){
            maxCount = charCountObj[char]
            maxChar = char
        }
    }

    return maxChar;
}

function maxChar2(str) {
    const charCountMap = new Map()
    for (const char of str) {
        if (charCountMap.has(char)) {
            charCountMap.set(char, charCountMap.get(char)+1);
        }
        else {
            charCountMap.set(char, 1);
        }         
    }

    let maxCount = 0, maxChar = ""
    const mapIter = charCountMap.entries()
    while (true) {
        const entry = mapIter.next();
        if (entry.done) break;

        const [char, count] = entry.value;
        if (count > maxCount) {
            maxCount = count; 
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar2;
