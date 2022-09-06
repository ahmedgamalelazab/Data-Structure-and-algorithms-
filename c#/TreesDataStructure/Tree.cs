namespace TreesDataStructure;

//coding Tree Data Structure . 
    // Binary Tree , Not Balanced Tree , worst Case O(N) Search if the insertion is Targetting one side of the Tree 


public class Tree <T> where T : IComparable<T>
{
    public Tree()
    {
        root = null; // on initializing the tree the root will be null
    }

    public void insert(T element)
    {
        root = insert(element,root!);
    }

    ///deleting Nodes : 
    //case 1 : the target Node has no children . [easy to delete]
    //case 2 : the target Node has one child -> right one or left one 
    //case 3 : the target node has two children [worst one]
        //handling the 3rd case : simply replace the value with the smallest right left Node value 
        //then remove the duplicated tree .
    public void Remove(T element){
        root = Remove(element , root!);
    }   

    private Node? Remove(T element, Node t){
        if(t == null){
            return t;
        }
        if(element.CompareTo(t.data) < 0){
            t.left = Remove(element,t.left);
        }else if(element.CompareTo(t.data) > 0){
            t.right = Remove(element,t.right);
        }else if(t.left != null && t.right != null){
            t.data = FindMin(t.right)!.data;
            t.right = Remove(t.data , t.right); // remove the item
        }else {
            t = (t.left != null) ? t.left : t.right!;
        }
        return t;
    }

    public T? FindMin(){
        return FindMin(root!)!.data ?? default(T)!;
    }      

    private Node? FindMin(Node t){

        if(t == null){
            return null;
        }

        while(t.left != null){
            t = t.left;
        }

        return t;

    }
    private Node insert(T element, Node t)
    {
        if (t == null)
        {
            return new Node(element, null, null);
        }

        if (element.CompareTo(t.data) < 0)
        {
            t.left = insert(element , t.left);
            
        }else if (element.CompareTo(t.data) > 0)
        {
            t.right = insert(element , t.right);
        }
        else
        {
            //duplicated entry don't do anything 
        }

        return t;
    }


    public void Print()
    {
        Print(root!);
    }

    private void Print(Node t)
    {
        if (t == null)
        {
            return;
        }
        
        Print(t.left);
        Console.WriteLine(t.data);
        Print(t.right);
    }
    
    
    private class Node
    {
        public Node(T element , Node? l = null , Node? r = null)
        {
            data = element;
            left = l;
            right = r;
        }
        public Node(T element) : this(element , null , null)
        {
            
        }
        
        public  T data;
        public Node left;
        public Node right;
    }
    
    
    
    
    
    
    
    //data
    private Node? root;

}