// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    if ( n == 0 || n == 1) {
        console.log(n);
        return n;
    }

    var x = 0;
    var y = 1;
    var res;
    for (var i=2; i<=n; i++) {
        res = x + y;
        x = y;
        y = res;
    }
    console.log(res);
    return res;
}

function fib2(n) {
    var res = [0, 1];

    for (var i=2; i<=n; i++) {
        var [x, y] = [res[i-2], res[i-1]];
        res.push(x + y);
    }

    console.log(res[n]);
    return res[n];
} 

function fib3(n) {
    if ( n == 0 || n == 1) {
        return n;
    }

    return fib3(n-1) + fib3(n-2);
}

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    };
}

fib3 = memoize(fib3);

module.exports = fib3;
