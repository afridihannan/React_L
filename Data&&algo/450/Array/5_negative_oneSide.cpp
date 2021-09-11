#include<iostream>
#include<algorithm>
using namespace std;

void moveNegative(int n,int arr[]){
    int j=0;
    for(int i=0;i<n;i++){
        if(arr[i]<0){
            if(i!=j){
                swap(arr[i],arr[j]);
            }else{
                j++;
            }
        }
    }
}
int main(){
    int n;cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)cin>>arr[i];
    moveNegative(n,arr);
    for(int i:arr)cout<<i<<" ";
    return 0;
}