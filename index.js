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
        // will first check to see if nothing there, so if no head
        // then we will make head and tail the new node
        if(!this.head){
            this.head = newNode
            this.tail = newNode 
        // if there is a head, then we set the next tail to new node
        // so will track next, and then set tail to newnode too 
        }else{
            this.tail.next = newNode
            this.tail = newNode
        }
        // increase length of singleLL, and return list
        this.length++
        return this;
    }
    // so for pop the problem is that we cant just access the last item
    // so we need to run down whole list until current.next == nul
    // we will track the one previous t that number as well, then set that previous
    // number to the current tails, then tail.next == null and return the last number 
    pop(){
        if(!this.head){
            return undefined
        }
        let currentNode = this.head
        let pre = currentNode
        while(currentNode.next){
            pre = currentNode
            currentNode = currentNode.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail = null
        }
    // special case, if only 1 item b/c we never set head tial to be null
        return currentNode


    }

    //shift, removing node from beginning of LL 
    // find current node and currentnode.next, set this.head to next node, check lengh if - change to nulls
    // return removed item 
    shift(){
        if(!this.head){
            return undefined
        }
        let priorHead = this.head
        let newHead = this.head.next
        this.head = newHead
        this.length--
        if(this.length == 0){
            this.head = null
            this.tail = null
        }
        return priorHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = val
            this.tail = val
        }else{
            let priorHead = this.head
            newNode.next = priorHead
            this.head = newNode
            this.length++
            return this
        }
    }
}

let list = new SinglyLinkedList()
list.push("Hello")
list.push("Goodbye")
list.push("OK")
list.push("Dulce")
list.unshift("Adam")

console.log(list)


