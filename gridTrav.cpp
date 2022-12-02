#include <iostream>
#include <map>
#include <string>

using namespace std;

map<string, int> gridMap;

unsigned long gridTravel(int m, int n){
    string key = to_string(m) + ',' + to_string(n);

    if (m == 0 || n ==0) return 0;

    if (m == 1 && n == 1) return 1;

    if(gridMap[key] != 0)
        return gridMap[key];
    else
        gridMap[key] = gridTravel(m - 1, n) + gridTravel(m, n-1);
        return gridMap[key];

}

int main () {

    cout << gridTravel(18, 3) << endl;
    cout << gridTravel(18, 18);

    return 0;   
}