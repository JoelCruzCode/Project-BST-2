import "./styles/style.css";
import "./styles/fonts.css";
import webpack_img from "./assets/images/webpack_img.webp";
import BST from "./bst.js";
import { prettyPrint, sortArray } from "./functions.js";

const content = document.querySelector("#content");
// content.textContent = "Hello Webpack";
console.log("hello?");
console.log(content);
const title = document.createElement("h1");
title.textContent = "Webpack";
title.classList.add("greeting");
content.appendChild(title);
const myIcon = new Image();
myIcon.src = webpack_img;
content.appendChild(myIcon);
const secondArray = [30, 40, 20, 32, 34, 36, 50, 60, 65, 70, 80, 85, 75];
// const unsortedArray = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const sortedArray = sortArray(secondArray);
console.log(sortedArray);

const Tree = BST(sortedArray);
// Tree.insertNode(6, Tree.root);
console.log(Tree.root);
Tree.insertNode(82, Tree.root);
// Tree.insertNode(81, Tree.root);
Tree.insertNode(83, Tree.root);
Tree.insertNode(84, Tree.root);
console.log(prettyPrint(Tree.root));
Tree.deleteNode(50, Tree.root);
console.log(prettyPrint(Tree.root));
// function component() {
//   const element = document.createElement("div");

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   return element;
// }
