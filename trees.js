// creating Node and Initial tree structure

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    //first check to see if there is a root, if not assign new value to new node
    if (this.root === null) {
      this.root = new Node(value);
      console.log(this);
      return this;
    }

    let currentValue = this.root;

    while (currentValue) {
      if (value === currentValue.value) {
        return undefined;
      }
      if (value < currentValue.value) {
        if (currentValue.left) {
          currentValue = currentValue.left;
        } else {
          currentValue.left = new Node(value);
          console.log(this);
          return this;
        }
      }
      if (value > currentValue.value) {
        if (currentValue.right) {
          currentValue = currentValue.right;
        } else {
          currentValue.right = new Node(value);
          console.log(this);
          return this;
        }
      }
    }
  }

  find(value) {
    if (this.root === null) {
      return false;
    }

    let currentValue = this.root;

    while (currentValue) {
      if (currentValue.value === value) {
        return true;
      } else if (value < currentValue.value) {
        currentValue = currentValue.left;
      } else if (value > currentValue.value) {
        currentValue = currentValue.right;
      }
    }
    return false;
  }
}

let tree = new BST();

tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(2);
tree.insert(7);
tree.insert(15);

console.log(tree.find(2));

//10
//5     //13
//2    //7      //15