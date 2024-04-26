import "./styles/style.css";
import "./styles/fonts.css";
import webpack_img from "./assets/images/webpack_img.webp";
import BST from "./bst.js";
import { prettyPrint, sortArray } from "./functions.js";
import script from "./driver.js";
const content = document.querySelector("#content");
// content.textContent = "Hello Webpack";
// console.log("hello?");
// console.log(content);
const title = document.createElement("h1");
title.textContent = "Webpack";
title.classList.add("greeting");
content.appendChild(title);
const myIcon = new Image();
myIcon.src = webpack_img;
content.appendChild(myIcon);

script();
// const secondArray = [30, 40, 20, 31, 34, 36, 50, 60, 65, 70, 80, 85, 75];
// // const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
// const sortedArray = sortArray(secondArray);
// console.log(sortedArray);

// const Tree = BST(sortedArray);
// // Tree.insertNode(6, Tree.root);
// console.log(Tree.root);
// Tree.insertNode(82, Tree.root);
// Tree.insertNode(81, Tree.root);
// // Tree.insertNode(83, Tree.root);
// // Tree.insertNode(84, Tree.root);
// console.log(prettyPrint(Tree.root));
// // Tree.deleteNode(50, Tree.root);
// // console.log(prettyPrint(Tree.root));
// // console.log(Tree.find(82, Tree.root));
// // console.log("first level", Tree.levelOrder(Tree.root, mult));
// // console.log("second level", Tree.levelOrderRecursion(Tree.root));
// console.log(Tree.root);

// // console.log("inOrder:", Tree.inOrder(Tree.root, mult));

// console.log(Tree.root);
// console.log("pre:", Tree.preOrder(Tree.root));
// // console.log("post:", Tree.postORder(Tree.root));

// // console.log(Tree.height(Tree.root));
// console.log(Tree.depth(Tree.root, Tree.root.right.right));
// console.log(Tree.isBalanced(Tree.root));
// Tree.reBalance(Tree.root);
// Tree.insertNode(32, Tree.root);
// Tree.insertNode(33, Tree.root);
// console.log(prettyPrint(Tree.root));
// console.log(Tree.isBalanced(Tree.root));
// console.log(Tree.inOrder(Tree.root));
// Tree.reBalance(Tree.root);
// console.log(prettyPrint(Tree.root));
// console.log(Tree.isBalanced(Tree.root));
// console.log(prettyPrint(Tree.root));
// console.log(Tree.depth(Tree.root, Tree.root.right.right.right.right));
// function mult(node) {
//   const modifiedNode = node.data * 2;
//   // node.data = node.data * 2;

//   console.log(node.data * 2);
//   return modifiedNode;
// }

// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
// function appendToArray(value, arr = []) {
//   arr.push(value);
//   return arr;
// }
