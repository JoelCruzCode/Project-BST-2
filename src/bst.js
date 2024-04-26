import TreeNode from "./tree-node.js.";

function BST(array) {
  let root = buildTree(array);

  function buildTree(array, start = 0, end = array.length - 1) {
    if (start > end) return null;

    let mid = Math.floor((start + end) / 2);

    const Node = new TreeNode(array[mid]);

    Node.left = buildTree(array, start, mid - 1);
    Node.right = buildTree(array, mid + 1, end);

    return Node;
  }

  function insertNode(value, root) {
    if (root === null) {
      return new TreeNode(value);
    }
    // if leaf node
    if (root.left === null && root.right === null) {
      // no duplicate values in tree
      if (value === root.data) return null;
      value < root.data
        ? (root.left = new TreeNode(value))
        : (root.right = new TreeNode(value));
      return root;
    } else {
      // traverse down tree until leaf node is reached
      value < root.data
        ? (root.left = insertNode(value, root.left))
        : (root.right = insertNode(value, root.right));

      return root;
    }
  }

  function deleteNode(value, root) {
    if (root === null) return null;

    if (value === root.data) {
      // Case 1: Leaf node
      if (root.left === null && root.right === null) {
        return null;
      }

      // Case 2: Node has only one child
      if (root.left === null) {
        return root.right;
      }

      if (root.right === null) {
        return root.left;
      }

      // Case 3: node has 2 children
      else if (root.left !== null && root.right !== null) {
        let successor = root.right;
        while (successor.left !== null) {
          successor = successor.left;
        }
        root.data = successor.data;
        root.right = deleteNode(successor.data, root.right);
      }
    } else {
      value < root.data
        ? (root.left = deleteNode(value, root.left))
        : (root.right = deleteNode(value, root.right));
    }

    return root;
  }

  function find(value, root) {
    if (root === null) return null;

    if (value === root.data) {
      return root;
    } else {
      return value < root.data
        ? find(value, root.left)
        : find(value, root.right);
    }
  }

  function levelOrder(root, callBack) {
    // traverse the tree in breadth-first level order and provide each node as an argument to the callback
    const queue = [];
    const levelOrderList = [];

    if (root === null) return null;
    queue.push(root);
    while (queue.length !== 0) {
      const currentNode = queue.shift();

      if (currentNode.left !== null) queue.push(currentNode.left);
      if (currentNode.right !== null) queue.push(currentNode.right);
      callBack ? callBack(currentNode) : levelOrderList.push(currentNode);
    }
    if (levelOrderList.length > 0) return levelOrderList;
  }

  function inOrder(root, callBack, inOrderList = []) {
    if (root === null) return null;

    inOrder(root.left, callBack, inOrderList);

    callBack ? callBack(root) : inOrderList.push(root.data);

    inOrder(root.right, callBack, inOrderList);

    if (inOrderList.length > 0) return inOrderList;
  }

  function preOrder(root, callBack, preOrderList = []) {
    if (root === null) return null;

    callBack ? callBack(root) : preOrderList.push(root.data);

    preOrder(root.left, callBack, preOrderList);

    preOrder(root.right, callBack, preOrderList);

    if (preOrderList.length > 0) return preOrderList;
  }

  function postOrder(root, callBack, postOrderList = []) {
    if (root === null) return null;

    postOrder(root.left, callBack, postOrderList);

    postOrder(root.right, callBack, postOrderList);

    callBack ? callBack(root) : postOrderList.push(root.data);

    if (postOrderList.length > 0) return postOrderList;
  }

  function height(root, h = 0) {
    if (root === null) return -1;

    let left = height(root.left, h);

    let right = height(root.right, h);
    // console.log(left, root.data, right, root.data);
    return left > right ? left + 1 : right + 1;
  }

  function depth(root, node, d = 0) {
    if (root === null) {
      return -1;
    }
    if (root === node) return d;
    d++;
    let left = depth(root.left, node, d);
    let right = depth(root.right, node, d);

    // node doesnt exist
    if (left === -1 && right === -1) {
      return -1;
    }
    if (left !== -1) left;
    return right;
  }

  function isBalanced(root) {
    if (root === null) return true; // An empty tree is considered balanced

    // Check if the heights of the left and right subtrees differ by at most one
    if (Math.abs(height(root.left) - height(root.right)) > 1) {
      return false;
    }

    // Recursively check if both left and right subtrees are balanced
    return isBalanced(root.left) && isBalanced(root.right);
  }

  function reBalance(root) {
    const inOrderList = inOrder(root);
    this.root = buildTree(inOrderList);
    return this.root;
  }

  return {
    root,
    insertNode,
    deleteNode,
    find,
    levelOrder,
    inOrder,
    preOrder,
    postOrder,
    height,
    depth,
    isBalanced,
    reBalance,
  };
}

export default BST;

// console.log(`value: ${value}`);
//       console.log(`root.data: ${root.data}`);
//       console.log("found value", root.data);
//       console.log("root.left", root.left);
//       console.log("root.right", root.right);
