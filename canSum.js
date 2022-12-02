const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0 ) return false;

    for (let num of numbers){
        const remainder = targetSum -num;
        if(canSum(remainder, numbers) === true) return true;
    }

    return false;
    
}

const quick_canSum = (targetSum, numbers, memo = {}) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;
    if (targetSum in memo) return memo[targetSum];

    for (let num of numbers){
        const remainder = targetSum -num;
        if(canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return memo[targetSum];
        }

    memo[targetSum] = false;

    return memo[targetSum];

    }
    
}

console.log(canSum(7, [2, 3, 5, 4]));
console.log(canSum(7, [2, 4]));

console.log(quick_canSum(300,  [7, 12]));