const gridTraveler = (m,n) => {
    if (m == 0 || n == 0) return 0;
    if (m == 1 && n == 1) return 1;
    return gridTraveler(m - 1, n) + gridTraveler(m, n-1);
};

const fastGridTrav = (m,n, memo = {}) => {
    const key = m + ',' + n;

    if (key in memo) return memo[key];

    if (m == 0 || n == 0) return 0;
    if (m == 1 && n == 1) return 1;

    memo[key] = fastGridTrav(m - 1, n, memo) + fastGridTrav(m, n-1, memo);
    return memo[key];
}

console.log(gridTraveler(2, 3));
console.log(fastGridTrav(18, 18));