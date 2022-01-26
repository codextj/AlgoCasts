// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(" ");
    }
    for (let i = 0; i < n; i++) {
        arr[i] = "#";
        console.log(arr.join(""));
    }
}

function steps2(n) {
    for (let i = 1; i <= n; i++) {
        let res = "";
        for (let j = 1; j <= i; j++) {
            res += "#";
        }
        for (let k = i + 1; k <= n; k++) {
            res += " ";
        }
        console.log(res);
    }
}

function steps3(n) {
    for (let row = 1; row <= n; row++) {
        let res = "";
        for (let col = 1; col <= n; col++) {
            if (col <= row) {
                res += "#";
            } else {
                res += " ";
            }
        }
        console.log(res);
    }
}

function steps4(n, row = 1, str = "") {
    // rows
    if (n < row) {
        return;
    }

    // columns
    if (str.length == n) {
        console.log(str);
        return steps4(n, row + 1, "");
    }

    const add = str.length < row ? "#" : " ";
    return steps4(n, row, str + add);
}

module.exports = steps4;
