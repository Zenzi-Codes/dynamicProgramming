#include <iostream>
#include <map>

using namespace std;

map<int, int> memo;

bool canSum(int target, int numbers[]) {
    
    int arrSize = *(&numbers + 1) - numbers;

    if(target = 0) return true;
    if(target < 0) return false;
    if(memo[target] != 0) return memo[target];

    for(int i = 0; i < arrSize; i++){
        int remainder = target - numbers[i];
    
        if(canSum(remainder, numbers) == true){
            memo[target] = true;
            return memo[target];
        }
    }

    memo[target] = false;

    return memo[target];
}


int main() {
    
    int b[] = {1, 2, 4, 6};

    cout << b << endl;
    cout << canSum(7, b);


    return 0;
}