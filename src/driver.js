import BST from "./bst.js";
import { prettyPrint, sortArray } from "./functions.js";

function script() {
  const unsortedArray = [30, 40, 20, 31, 34, 36, 50, 60, 65, 70, 80, 85, 75];
  const sortedArray = sortArray(unsortedArray);
  const Tree = BST(sortedArray);
  console.log("is balanced?", Tree.isBalanced(Tree.root));

  console.log("preOrder", Tree.preOrder(Tree.root));
  console.log("inOrder", Tree.inOrder(Tree.root));
  console.log("postORder", Tree.postOrder(Tree.root));

  console.log("inserting nodes 101, 170, 181, 190, 124");
  Tree.insertNode(101, Tree.root);
  Tree.insertNode(170, Tree.root);
  Tree.insertNode(181, Tree.root);
  Tree.insertNode(190, Tree.root);
  Tree.insertNode(124, Tree.root);

  console.log("is balanced?", Tree.isBalanced(Tree.root));

  console.log("rebalancing");
  Tree.reBalance(Tree.root);

  console.log("is balanced?", Tree.isBalanced(Tree.root));

  console.log("preOrder", Tree.preOrder(Tree.root));
  console.log("inOrder", Tree.inOrder(Tree.root));
  console.log("postORder", Tree.postOrder(Tree.root));
}

export default script;
