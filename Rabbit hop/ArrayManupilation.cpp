#include <iostream>
using namespace std;


int main()
{
cout<<"\nEnter the number of boxes: ";
int n, flag = 0;
cin>>n;

if(n>0 && n<=10){
    int a[n];
    for(int i = 0; i<n; i++){
        cout<<"\nEnter the number of chocolates in the box "<<i+1<<":";
        cin>>a[i];
        if(i==0 && a[i]%2!=0){
            cout<<"\nSorry!!! The first box always should contain positive even no. of chocolates";
            return 0;
        }
        else{
            if(a[i]%2==0){
                flag++;
            }
        }
}

cout<<"\nNo. of chocolates in each box: ";
for(int i = flag-1;i<n;i++){
    cout<<a[i]<<" ";
}
}
else{
    cout<<"\nInvalid input";
}




return 0;
}
