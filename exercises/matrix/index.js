// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let spiralMatrix = [];
    for (let i = 0; i < n; i++) {
        spiralMatrix.push([]);
        for (let j = 0; j < n; j++) {
            spiralMatrix[i].push(0);
        }
    }

    // R D L U
    let v = 1;
    let x = 0;
    let y = 0;
    while (v <= n*n) {
        // Right
        while (true) {
            if (y >= n || spiralMatrix[x][y] !== 0) {
                y -= 1;
                x += 1; // to start going down
                break;
            }
            spiralMatrix[x][y] = v;
            v++; y++;
        }
        // Down
        while (true) {
            if (x >= n || spiralMatrix[x][y] !== 0) {
                x -= 1;
                y -= 1; // to start going left
                break;
            }
            spiralMatrix[x][y] = v;
            v++; x++;
        }
        // Left
        while (true) {
            if (y < 0 || spiralMatrix[x][y] !== 0) {
                y += 1;
                x -= 1; // to start going up
                break;
            }
            spiralMatrix[x][y] = v;
            v++; y--;
        }
        // Up
        while (true) {
            if (x < 0 || spiralMatrix[x][y] !== 0) {
                x += 1; 
                y += 1; // to start going Right
                break;
            }
            spiralMatrix[x][y] = v;
            v++; x--;
        }
    }
    return spiralMatrix;
}

matrix(2);

module.exports = matrix;
