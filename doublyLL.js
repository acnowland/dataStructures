/*
doubly linked lists
 - similar but each node has a pointer to next and previous node
 - now supe reasy to go inreverse, or reverse the liust or pop
 - takes up more memory
*/

class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0 
    }
}

let list = new DoublyLinkedList()
