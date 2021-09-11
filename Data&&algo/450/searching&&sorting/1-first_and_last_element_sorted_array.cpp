#include<iostream>
#include<algorithm>
using namespace std;

int f_occ(int n,int arr[],int k){
  int l=0,h=n-1;
  int mid,ans;
  while(l<=h){
    mid=(h+l)/2;
    if(arr[mid]==k){
        h=mid-1;
        ans=mid;
    }else{
        l=mid+1;
    }
  }
  return ans;
}
 int l_occ(int n,int arr[],int k){
  int l=0,h=n-1;
  int mid,ans;
  while(l<=h){
    mid=(h+l)/2;
    if(arr[mid]==k){
        l=mid+1;
        ans=mid;
    }else{
        h=mid-1;
    }
  }
  return ans;
}

int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++)cin>>arr[i];
    sort(arr,arr+n);
    int k;
    cin>>k;
    for(int i:arr)cout<<i<<" ";
    cout<<endl;
    cout<<f_occ(n,arr,k)<<" ";
    cout<<l_occ(n,arr,k)<<" ";
    return 0;
}