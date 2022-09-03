/**
    * List class which internally wrap Array
*/

using ListStackQueue.jimmy.IList;

namespace ListStackQueue.jimmy.List;

public class List<T> : ListStackQueue.jimmy.IList.IList<T> where T : new()
{

    public List(int initialSize)
    {
        arr = new T[initialSize];
        size = 0;
    }
    public List()
    {
        arr = new T[DEFAULT_CAPACITY];
        size = 0;
    }
    public bool Add(T element)
    {
        return Add(Size() , element );
    }

    public bool Contains(T element)
    {
       //linear search 
       for (int i = 0; i < Size(); i++)
       {    
            if(arr[i]!.Equals(element)){
                return true;
            }
       }
       return false; // can't find any element 
    }

    public T Get(int idx)
    {
        return arr[idx];
    }

    public int GetElementPos(T element)
    {
        //we can use better algorithm in the future 
        for(int i = 0 ; i < Size(); i++){
            if(arr[i]!.Equals(element)){
                return i;
            }   
        }
        return -1;
    }

    public bool Insert(int idx, T element)
    {
        return Add(idx , element);
    }

    public bool IsEmpty()
    {
        return Size() == 0;
    }

    public bool Remove(T element)
    {
      int pos = GetElementPos(element);
      return Remove(pos);
    }

    public bool RemoveElementAt(int idx)
    {
        return Remove(idx);
    }

    public int Size()
    {
        return size;
    }

    public bool UpdateElement(T old, T newElement)
    {
        int pos = GetElementPos(old);
        arr[pos] = newElement;
        return true;
    }

    public bool UpdateElementAt(int idx, T element)
    {
        arr[idx] = element;
        return true;
    }

    public IEnumerable<T> Where(Func<T , bool> pred)
    {
        foreach (var item in arr)
        {
            if(pred(item)){
                yield return item;
            }
        }
    }

    //utils 
    private bool Add(int idx, T element)
    {
        if(arr.Length == Size()){
            EnsureCapacity(Size() * 2 + 1);
        }
        if (idx > Size() || idx < 0)
        {
            throw new IndexOutOfRangeException();
        }
        //asume that the i will = to size of the array 
        int i;
        //loop until we reach out the idx 
        for (i = Size(); i > idx; i--)
        {
            //shift all the elements one move to the right 
            arr[i] = arr[i - 1];
        }
        //insert at 0 will take o(N) time to shift all the elements 
        arr[i] = element;
        size ++;
        return true;
    }

    private bool Remove(int idx){
        if(idx > Size() || idx < 0){
            throw new IndexOutOfRangeException();
        }
        int i ;
        for( i = idx ; i < Size() -1 ; i ++){
            arr[i] = arr[i+1];
        }
        size --;
        return true;
    }

    private void EnsureCapacity(int newCapacity){
        if(newCapacity < Size()){
            return;
        }
        //ref to old 
        T [] old = arr;
        //expand the arr to new capacity 
        arr = new T [newCapacity];
        //copying the elements which make the performance a little bit bad 
        for (int i = 0; i < old.Length; i++)
        {
            arr[i] = old[i];
        }

    }
 
    //data 
    private T[] arr;
    int size;

    private static int DEFAULT_CAPACITY = 10;


}