#include<iostream>
#include <map>

using namespace std;

int fib(int n){
    if( n <= 2)
        return 1;
    else
        return (fib(n-1) + fib(n-2));
}

map<int, int> memo;

unsigned long int quickFib(int n){
    if(n<=2)
        return 1;

    if(memo[n] != 0)
        return memo[n];
    
    else {
        memo[n] = quickFib(n-1) + quickFib(n-2);
        return memo[n];
    }

}

int main(){
    
    for(int i = 1; i <= 50; i++){
        cout << quickFib(i) << endl;
    }


    return 0;
}
