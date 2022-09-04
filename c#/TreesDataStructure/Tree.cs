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
        root = insert(element,root);
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
        Print(root);
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