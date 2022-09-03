/**
    * IList interface will provider the concrete classes with contract , force all the children to implement the CRUD on any type of list 
*/

public interface IList<T>
{
    int Size();
    bool IsEmpty();
    T Get(int idx);
    bool Add(T element);
    bool Remove(T element);
    bool Contains(T element);
    int GetElementAt(int idx);
    bool RemoveElementAt(int idx);
    bool Insert(int idx , T element);
    bool UpdateElement(T old , T newElement);
    IEnumerable<T> Where(Func<bool , T>pred); 
    bool UpdateElementAt(int idx , T element);   
} 

