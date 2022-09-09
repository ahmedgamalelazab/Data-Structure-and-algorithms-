#ifndef TREE_H
#define TREE_H

#include<memory>
#include<iostream>

namespace Jimmy::tree {

    class Tree {

        public:

        Tree(){            
            root = nullptr;
        }

        void insert(int data){
            root = insert(data , root);
        }

        void print(){
            print(root);
        }

        private:        
         class Node {            
            public:
                Node* left;
                Node* right;
                int data;
                Node(int data, Node* r , Node* l){
                    this->left =l;
                    this->right = r;
                    this->data = data;
                }

         };

        //internal data
         private:

        Node* root;


         //operations 
         private:
        Node* insert(int data , Node* t){
            if(t == nullptr){
              return new Node(data , nullptr, nullptr);
            }
            if(data < t->data){
               t->left = insert(data , t->left);
            }else if(data > t->data){
                t->right = insert(data , t->right);
            }else{
                //duplication then do nothing
            }
            return t;
        }

        void print(Node* t){
            if(t == nullptr){
                return;
            }
            print(t->left);
            std::cout<<t->data<<std::endl;
            print(t->right);
        }
    };


};

#endif //TREE_H