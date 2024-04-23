import TreeNode from "./tree-node.js.";
import { prettyPrint, sortArray } from "./functions";

// const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const sortedArray = sortArray(unsortedArray);

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

  // function deleteNode(value, root) {
  //   // if (root === null) return null;

  //   if (value === root.data) {
  //     // Case 1: Leaf node
  //     if (root.left === null && root.right === null) {
  //       return null;
  //     }

  //     // Case 2: Node has only one child
  //     if (root.left === null) {
  //       return root.right;
  //     }

  //     if (root.right === null) {
  //       return root.left;
  //     }
  //     // Case 3: node has 2 children
  //     if (root.left !== null && root.right !== null) {
  //       let prev = root;
  //       let successor = root.right;
  //       while (successor.left !== null) {
  //         prev = successor;
  //         successor = successor.left;
  //       }

  //       root.data = successor.data;

  //       if (successor.right !== null) {
  //         prev.left = successor.right;
  //       } else {
  //         prev.left = null;
  //       }

  //       return root;
  //     }
  //   } else {
  //     value < root.data
  //       ? (root.left = deleteNode(value, root.left))
  //       : (root.right = deleteNode(value, root.right));
  //   }

  //   return root;
  // }

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
  return { root, insertNode, deleteNode };
}

export default BST;

// console.log(`value: ${value}`);
//       console.log(`root.data: ${root.data}`);
//       console.log("found value", root.data);
//       console.log("root.left", root.left);
//       console.log("root.right", root.right);
