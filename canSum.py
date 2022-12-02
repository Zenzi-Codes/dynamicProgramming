memo = {}

def canSum(target, numbers):
    if target == 0:
        return True

    if target < 0:
        return False

    if target in memo:
        return memo[target]

    for num in numbers:
        remainder = target -num

        if canSum(remainder, numbers) == True:
            memo[target] = True
            return memo[target]
    
    memo[target] = False
    return memo[target]

print(canSum(300, [3, 4]))