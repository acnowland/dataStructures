/*
What is a LL?
    - list of data(nodes) with no indexes that points(pointer) to the
    next element
    - had a head/tail/length property
    - random access not allowed
    vs array --> indexedin order, insertion and deletion expensive, can be accessed quickly with index
    - so use LL when you care about insertion and deletion
    when you dont need access

*/

//peice of data - val
// reference to next node - next

class Node{
    constructor(val){
        this.val = val
        this.next = null
    }
}

// let first = new Node("Hi")
// first.next = new Node("there")

class SinglyLinkedList{
    constructor(){
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode 
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this;
    }

    pop(){
        if(this.length == 0){
            return undefined
        }else{
            let currentNode = this.head
            while(currentNode){
                
            }
        }

    }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push(99)

