#include<iostream>
#include<algorithm>
using namespace std;

int k_max(int n,int arr[],int k){
    sort(arr,arr+n);
    return arr[n-k];
}
int k_min(int n,int arr[],int k){
    sort(arr,arr+n);
    return arr[k-1];
}
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)cin>>arr[i];
    int k;
    cin>>k;
    cout<<k_max(n,arr,k);
    cout<<" "<<k_min(n,arr,k);
    return 0;
}