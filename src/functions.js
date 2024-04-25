// Helper functions

// returns a visual representation of a tree
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

// returns a sorted array and deletes any duplicate values
function sortArray(array) {
  const sorted = [...array].sort((a, b) => {
    return a - b;
  });
  let prevElement;
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === prevElement) {
      sorted.splice(i - 1, 1);
      i--;
    }
    prevElement = sorted[i];
  }
  return sorted;
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

// function preOrder(root, callBack) {
//   if (root === null) return [];

//   let arr = [];

//   // Process the current node
//   root = callBack ? callBack(root) : root;
//   arr.push(root);

//   // Traverse the left subtree
//   let leftSubtree = preOrder(root.left, callBack);

//   // Traverse the right subtree
//   let rightSubtree = preOrder(root.right, callBack);

//   // Concatenate the arrays obtained from the left and right subtrees
//   arr = arr.concat(leftSubtree, rightSubtree);

//   return arr;
// }

export { prettyPrint, sortArray };
