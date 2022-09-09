

module.exports= {

    
    BinarySearchTree : class BinaryTree {
        
        constructor(){
           
        }

        insert(data){
            root = insert(data , root);
        }

        print(){
            print(root);
        }

        Remove(element){
            root = Remove(element , root);
        }
    }



}

/**
 * @type {BinaryNode}
 */
var root  = null;

class BinaryNode {

    constructor(data , left , right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

/**
 * 
 * @param {any} data 
 * @param {BinaryNode} node 
 */
function insert(data , node){

    if(node == null){
        return new BinaryNode(data , null , null);
    }
    if(data < node.data){
        node.left = insert(data , node.left);
    }else if(data > node.data){
        node.right = insert(data , node.right);
    }else {

    }
    return node;
}

//deleting Node from the tree 

/**
 * 
 * @param {any} element 
 * @param {BinaryNode} t 
 * @returns {BinaryNode}
 */
function Remove(element , t){

    if(t === null){
        return t;
    }
    if(element < t.data){
        t.left = Remove(element , t.left);
    }else if(element > t.data){
        t.right = Remove(element , t.right);
    }else if(t.left != null && t.right !=null){
        t.data = FindMin(t.right).data;
        t.right = Remove(t.data , t.right);
    }else 
        t = (t.left != null) ? t.left : t.right;
    return t;
}

/**
 * 
 * @param {BinaryNode} t 
 */
function FindMin(t){
    if(t == null){
        return t;
    }
    while(t.left != null){
        t = t.left;
    }
    return t;
}


/**
 * 
 * @param {BinaryNode} node 
 */
function print(node){
    if(node == null){
        return;
    }
    print(node.left);
    console.log(node.data);
    print(node.right);
}