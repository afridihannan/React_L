#include <iostream>
#include <string>
using namespace std;

int main()
{
    string s;
    getline(cin, s);
    // for(char i:s)cout<<i;
    string ans = "i";
    int num;
    string p = "";
    int n = 0;
    //cout<<s.size();
    for (int i = 0; i < s.size(); i++)
    {
        if (s[i] == ' ')
        {
            if (ans.size() < p.size())
            {
                ans = p;
                num = n;
            }
            p = "";
            n = 0;
        }
        else
        {
            p += s[i];
            n++;
        }
    }
    if (p.size() > ans.size())
    {
        for (int i = 0; i < p.size(); i++)
        {
            cout << p[i];
        }
    }
    else
    {
        for (int i = 0; i < ans.size(); i++)
        {
            cout << ans[i];
        }
    }
    cout << endl;
    cout << num;
    return 0;
}