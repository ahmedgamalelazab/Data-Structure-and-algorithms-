﻿


#region  Testing Jimmy.List

using ListStackQueue.jimmy.IList;

var myList = new ListStackQueue.jimmy.List.List<int>(2); // list of 2 items 

myList.Add(1);
myList.Add(2);
myList.Add(3);
myList.Add(4);
myList.Add(5);

//working fine ✅
for(int i = 0 ; i < myList.Size() ; i ++){
    Console.WriteLine(myList.Get(i));
}



#endregion