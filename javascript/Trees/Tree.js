

module.exports= {

    
    BinarySearchTree : class BinaryTree {
        
        constructor(){
            this.root = null;
        }

        insert(data){
            this.root = insert(data , this.root);
        }

        print(){
            print(this.root);
        }
    }



}

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