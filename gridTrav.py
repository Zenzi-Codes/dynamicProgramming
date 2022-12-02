memo = {}

def gird_travel(m, n):
    key = str(m) + ',' + str(n)

    if key in memo:
        return memo[key]
    
    if (m == 0 or n == 0):
        return 0

    if (m == 1 and n == 1):
        return 1
    
    memo[key] = gird_travel(m-1, n) + gird_travel(m, n-1)
    return memo[key]

print(gird_travel(18, 18))
print(gird_travel(3, 18))