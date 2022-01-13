# --- Directions
# Given an array and chunk size, divide the array into many subarrays
# where each subarray is of length size
# --- Examples
# chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
# chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
# chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
# chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
# chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

def chunk(array, size):
    chunks = []
    last_chunk = []
    for i, elem in enumerate(array):
        if len(last_chunk) < size:
            last_chunk.append(elem)
        else:
            chunks.append(last_chunk)
            last_chunk = [elem]
    
    if last_chunk:
        # to handle the case where last chunk didn't get completely filled
        chunks.append(last_chunk)

    print(chunks)
        
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)        


def chunk2(array, size):
    chunks = []
    for i in range(0, len(array), size):
        chunks.append(array[i:i+size])

    print(chunks)

chunk2([1, 2, 3, 4, 5, 6, 7, 8], 3)
