#include<iostream>
#include<algorithm>
#include<climits>
#include<vector>
using namespace std;

int search(vector<int>&q,int k){
    int n=q.size();
    int l=0,h=n-1;
    int mini=INT_MAX;
    for(int i=0;i<n;i++){
        mini=min(q[i],mini);
    }
    int sl;
    for(int i=0;i<n;i++){
        if(q[i]==mini){
            sl=i;
        }
    }
    int ri=INT_MAX;
    sort(q.begin(),q.end());
    while(l<=h){
        int mid=(l+h)/2;
        if(q[mid]==k){
            ri=mid;break;
        }else if(q[mid]<k){
            l=mid+1;
        }else{
            h=mid-1;
        }
    }
    if(ri==INT_MAX)return -1;
   // cout<<ri<<sl;
    int rot=(n-sl)%n;
  //  cout<<rot<<endl;
   
    int ans=ri-rot;
    if(ans<0){
        //ans=n-ans-2;
        ans=n+ans;
    }
    return ans;
}
int main(){
    int n;cin>>n;
   vector<int>q;
   for(int i=0;i<n;i++){
       int temp;
       cin>>temp;
       q.push_back(temp);
   }
   int k;cin>>k;
    cout<<searchIndex(q,k);
    return 0;
}