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
          return this;
        }
      }
      if (value > currentValue.value) {
        if (currentValue.right) {
          currentValue = currentValue.right;
        } else {
          currentValue.right = new Node(value);

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

  BFS() {
    let que = [];
    let visited = [];

    que.push(this.root);
    while (que.length > 0) {
      let current = que.shift();
      visited.push(current.value);
      if (current.left) {
        que.push(current.left);
      }
      if (current.right) {
        que.push(current.right);
      }
    }
    console.log(visited);
    return visited;
  }

  DFSpreorder() {
    let data = [];
    let current = this.root;
    //the way this works is you start at this.root, you will then run helper function traverse
    // push that value into data, then check to see if left, will then call travers on node.left
    // wil lthen check to see if if left and repat all the way down to the endof left side
    // it will then go back up to one level and see if there is a right
    // then will run down that right side, and contiue like this
    function traverse(node) {
      data.push(node.value);
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

  DFSPostOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      if (node.right) {
        traverse(node.right);
      }
      data.push(node.value);
    }
    traverse(current);
    return data;
  }

  DFSInOrder() {
    let data = [];
    let current = this.root;

    function traverse(node) {
      if (node.left) {
        traverse(node.left);
      }
      data.push(node.value);
      if (node.right) {
        traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }
}

let tree = new BST();

tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);

// console.log(tree.find(2));
console.log(tree.DFSInOrder());

//when to use each?
// all are O(n) time, but space is more worrisome
//if you have alot of nodes that you neeed to work with
// think of how many items in a que you wil have to store fi big tree (breadth first)
// so want to use DFS if wider tree (so more nodes)
// if you have fewer nodes then you can use breadth first
// more times than not you will need to use DFS because most trees are more complext and wide

//in order
// used commonly with a BST b/c you can then get a nice in order list of items
//pre order
// good to use ot 'flatten' a tree because it will give you a snapshot of that stree
//post order ?? not sure
// all area super easy to swap between since only changing one line of code
