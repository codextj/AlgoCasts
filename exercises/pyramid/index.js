// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let fill = 0;
    for (let i = n - 1; i >= 0; i--) {
        let res = "";
        let add = "";
        for (let j = i; j > 0; j--) {
            add += " ";
        }
        for (let k = 2 * fill + 1; k > 0; k--) {
            res += "#";
        }
        console.log(add + res + add);
        fill++;
    }
}

function pyramid2(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);

    for (let row = 0; row < n; row++) {
        let level = "";

        for (let col = 0; col < 2 * n - 1; col++) {
            if (midpoint - row <= col && midpoint + row >= col) {
                level += "#";
            } else {
                level += " ";
            }
        }

        console.log(level);
    }
}

function pyramid3(
    n,
    row = 0,
    str = "",
    midpoint = Math.floor((2 * n - 1) / 2)
) {
    if (n === row) {
        return;
    }

    let col = str.length;

    if (col == 2 * n - 1) {
        console.log(str);
        return pyramid3(n, row + 1, "");
    }

    if (col < midpoint - row || col > midpoint + row) {
        str += " ";
    } else {
        str += "#";
    }

    return pyramid3(n, row, str);
}

module.exports = pyramid3;
