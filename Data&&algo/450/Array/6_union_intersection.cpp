#include<iostream>
#include<set>
using namespace std;

void arrUnion(int m,int n,int arr1[],int arr2[]){
    int arr[m+n];
    set<int>u;
    for(int i=0;i<m;i++)u.insert(arr1[i]);
    for(int j=0;j<n;j++)u.insert(arr2[j]);
    for(int i:u)cout<<i<<" ";
}
void arrIntersection(int m,int n,int arr1[],int arr2[]){
    for(int i=0;i<m;i++){
        for(int j=0;j<n;j++){
            if(arr1[i]==arr2[j])cout<<arr1[i]<<" ";
        }
    }
}

int main(){
    int m,n;
    cin>>m>>n;
    int arr1[m],arr2[n];
    for(int i=0;i<m;i++)cin>>arr1[i];
    for(int i=0;i<n;i++)cin>>arr2[i];
    arrUnion(m,n,arr1,arr2);
    cout<<endl;
    arrIntersection(m,n,arr1,arr2);
    return 0;
}