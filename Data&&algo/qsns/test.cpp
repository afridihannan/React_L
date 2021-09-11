#include<iostream>
#include<string>
using namespace std;

int main(){
    string s="trrrr";
    string h="iii";
    s="Freee";
    s=h;
    for(char i:s)cout<<i;

    return 0;
}