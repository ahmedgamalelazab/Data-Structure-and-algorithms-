#include<iostream>
#include<string>
#include"tree.h"

using namespace std;





int main(){

    Jimmy::tree::Tree t;
    t.insert(100);
    t.insert(50);
    t.insert(110);
    t.insert(40);
    t.insert(66);
    t.insert(230);
    t.insert(199);

    t.print();

    return 0;
}