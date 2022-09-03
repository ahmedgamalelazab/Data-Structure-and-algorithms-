


#region  Testing Jimmy.List

using ListStackQueue.jimmy.IList;

var myList = new ListStackQueue.jimmy.List.List<int>(2); // list of 2 items 

//adding working fine
myList.Add(1);
myList.Add(2);
myList.Add(3);
myList.Add(4);
myList.Add(5);

//testing removing 
//working ✅
// myList.Remove(2);
// myList.Remove(1);

//inserting working
// myList.Insert(3, 100);

// myList.UpdateElementAt(1, 100);
// myList.UpdateElement(4,500);

// //working fine ✅
// for(int i = 0 ; i < myList.Size() ; i ++){
//     Console.WriteLine(myList.Get(i));
// }


foreach (var elem in myList.Where(e=>e > 3))
{
    Console.WriteLine(elem);
}



#endregion