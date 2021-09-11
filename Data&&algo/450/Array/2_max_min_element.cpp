#include<iostream>
#include<climits>
#include<algorithm>
using namespace std;

int main(){
    int n;cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)cin>>arr[i];
    int max1=INT_MIN;
    int max2=INT_MIN;
    for(int i=0;i<n;i++){
       max1=max(arr[i],max1);
       for(int j=0;j<n;j++){
           if(arr[j]<max1){
               max2=max(max2,arr[j]);
           }
       }
    }
    cout<<max1<<" "<<max2;
    return 0;
}