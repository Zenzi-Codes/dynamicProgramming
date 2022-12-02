memo = {}

def quick_fib(n):
    if n <= 1:
        return n
    if n in memo:
        return memo[n]
    else:
        memo[n] = quick_fib(n-1) + quick_fib(n-2)
        return memo[n]
    
print(quick_fib(50))


print(quick_fib(6))
print(quick_fib(50))
