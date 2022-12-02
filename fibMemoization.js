// Function that return the nth number in a fibonacci sequence

// fib(n) it too slow. its time complexity is O(2^n).

const fib = (n) => {
    if(n <= 2) return 1;
    return fib(n -1)  + fib(n - 2);
};

/* quick_fib(n, memo = {}) performs better with time complex of O(n). Implements memoization
to store values in order to avoid traversing duplicate subtrees
*/

const quick_fib = (n, memo = {}) => {
    if(n in memo) return memo[n];
    
    if(n <= 2) return 1;

    memo[n] = quick_fib(n - 1, memo) + quick_fib(n - 2, memo);
    return memo[n]; 
};


console.log(quick_fib(50));