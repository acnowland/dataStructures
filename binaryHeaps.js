// heaps are a category of tree
// min binary heap --> means that every node deeper is larger than its parent
// max binary heap --> each parent node is greater than its sibling nodes
//used alot when making priority ques*********
//used alot to help traversing graphs
//when storing a heap it is to be though of like a tree structure, but stored in an array
// each number will have 2 children and so on
//so            100
//90    //80
//79    6050    40

//would be [100,90,80,79,60,50,40]
// each parent has its children located at 2n+1 (90 at index 1 , 2(1) +1--. its children is 79/60)
//each child has its parent locaed at (n-1)/2.floor()

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(number) {
    this.values.push(number);

    if (this.values.length === 1) {
      return this.values;
    }
    let currentIndex = this.values.length - 1;
    let parentIndex = Math.floor(currentIndex - 1 / 2);

    while (this.values[parentIndex] < number) {
      let parentValue = this.values[parentIndex];
      this.values[parentIndex] = number;
      this.values[currentIndex] = parentValue;
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex - 1 / 2);
    }
    return this;
  }
}

let bh = new MaxBinaryHeap();
bh.insert(7);
bh.insert(10);
bh.insert(15);
bh.insert(3);
bh.insert(40);
bh.insert(17);

console.log(bh);
