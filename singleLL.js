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
    //inserting node at the beginning of an sll
    // make a new node first, then check to see if lenght is 0, if so set head and tail to value
    //else temp get the current head, set the next for your new node to that head, then new head to new node
    //inc lenght
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
    // check to make sure valid input
    // then just count up the sll, find current item that = count, return item 
    get(index){
        if(index < 0 || index > this.length -1){
            return undefined
        }
        let count = 0 
        let currentHead = this.head
        while(count !== index){
            currentHead = currentHead.next
            count++ 
        }
        return currentHead
    }
    //set allows you to 'set' a new value of an old value
    // get the item at index, if it return someething change the .val to = new value, return true
    // else returns flase if nothing found 
    set(index, value){
        let toChange = this.get(index)
        if(toChange){
            toChange.val = value
            return true
        }
        return false
    }
    // insert will take an index and then insert a new value at that index
    // check to see if first or last if so use unshift or push first
    // once checked we then find the value of index -1 save that to a variable, then use that.next and save that, create a new node, node.next = temp next and then used
    // first priorvalue.next to new node

    insert(index, value){
        if(index < 0 || index > this.length){
            return false
        }
        if(index == 0){
            return !!this.unshift(value)
        }else if(index == this.length){
            return !!this.push(value)
        }else{
            let priorValue = this.get(index -1)
            let followingValue = priorValue.next
            console.log(followingValue)
            let newValue = new Node(value)
            newValue.next = followingValue
            priorValue.next = newValue
            this.length++
            return true
        }
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        if(index == 0) return !!this.shift()
        if(index == this.length - 1) return !!this.pop()
        let previousValue = this.get(index -1) 
        let toRemove = previousValue.next
        let followingValue = previousValue.next.next
        previousValue.next = followingValue
        this.length--
        return toRemove
    }
    reverse(){
        //initially flip flops head and tail
        // we will loop through the list, utilinzg temp storage of next, then set previous to node.next
        // prev becomes node and node becomes next, as it walks down the lit it flips prev/next
        var node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next
        for( var i = 0; i<this.length;i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this

    }

}


//BIG O OF SLL
// insertion 0(1), b/c we dont have to re index anything, best thing for linked list for insert and delete at beginning , use if you dont need to random access
// removal O(1) = at beginninger or O(n)
// seraching O(n)
// access O(n)




// let list = new SinglyLinkedList()
// list.push("Hello")
// list.push("Goodbye")
// list.push("OK")
// list.push("Dulce")
// console.log(list.reverse())




