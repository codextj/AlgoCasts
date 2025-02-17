// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunks = [];
    let last_chunk = [];
    for (let i=0; i <array.length; i++) {
        if (last_chunk.length < size) {
            last_chunk.push(array[i]);
        }
        else {
            chunks.push(last_chunk);
            last_chunk = [array[i]];
        }
    }

    if (last_chunk) {chunks.push(last_chunk)}    
    return chunks;
}

function chunk2(array, size) {
    const chunks = [];
    for (let i=0; i<array.length; i+=size) {
        chunks.push(array.slice(i, i+size));
    }
    return chunks;
}

chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3);

module.exports = chunk2;
