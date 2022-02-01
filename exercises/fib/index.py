# // --- Directions
# // Print out the n-th entry in the fibonacci series.
# // The fibonacci series is an ordering of numbers where
# // each number is the sum of the preceeding two.
# // For example, the sequence
# //  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
# // forms the first ten entries of the fibonacci series.
# // Example:
# //   fib(4) === 3


def fib(n):
    if (n==0 or n==1):
        return n
    
    x, y = 0, 1
    res = x + y
    for i in range(2, n+1):
        res = x + y
        x = y
        y = res

    return res

print(fib(7))


def fib2(n):
    fib_sequence = [0, 1]

    for i in range(2, n+1):
        res = fib_sequence[i-1] + fib_sequence[i-2]
        fib_sequence.append(res)

    return fib_sequence[n]


print(fib2(7))


def fib3(n):
    if (n==0 or n==1):
        return n

    return fib3(n-2) + fib3(n-1)


def memoize(fn):
    cache = {}
    def memoized_fib(n):
        if n in cache:
            return cache[n]
        
        res = fn(n)
        cache[n] = res
        return res

    return memoized_fib

fib3 = memoize(fib3)


print(fib3(7))