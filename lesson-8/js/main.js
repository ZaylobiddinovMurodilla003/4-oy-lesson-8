"use strict";

// 1-rasm

// 1-masala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// console.log(arr.sort((a, b) => a - b));

// 2-masala

// let uArr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// function rangeSum(arr, startIndex, endIndex) {
//   let newArr = arr.slice(startIndex, endIndex + 1);
//   let summ = 0;
//   summ = newArr.reduce((num, res) => num + res, 0);
//   console.log(summ);
// }

// rangeSum(uArr, 2, 5);

// 3-masala

// let uArray = [1, 7, 8, 9, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 7, 9, 8, 8, 9, 9, 1];

// for (let i = 0; i < uArray.length; i++) {
//   for (let j = 1; j < uArray.length; j++) {
//     if (uArray[i] == uArray[j]) {
//       uArray.splice(i, 1);
//     }
//   }
// }

// console.log(uArray);

// 4-masala

// let userArray = [12, 5, 8, 130, 44];

// console.log(
//   userArray.reduce((num, max) => (max > num ? max : num), userArray[0])
// );
// console.log(
//   userArray.reduce((num, min) => (min < num ? min : num), userArray[0])
// );

// 5-masala \\\

// let userArray = [12, 5, 8, 130, 44];

// let first = userArray[0];

// userArray.shift();
// userArray.push(first);

// console.log(userArray);

// 6-masal a

// let emptyArray = [];

// let size = Number(prompt("siz ekiriting "));

// for (let i = 0; i < size; i++) {
//   emptyArray.push(prompt(`${i} - indexdagi elementni kiriting `));
// }

// let res = emptyArray.reverse();

// console.log(res);

// 7-massala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// let odd = arr.filter((num) => num % 2 === 1);

// console.log(`${odd} uni length ${odd.length}`);

// 8-masala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// function oddIndex(arr) {
//   let emptyArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//       emptyArray.push(arr[i]);
//     }
//   }

//   console.log(emptyArray);
// }
// oddIndex(arr);

// 9-masala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// function oddIndex(arr) {
//   let emptyArray = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 === 1) {
//       emptyArray.push(arr[i]);
//     }
//   }
//   console.log(emptyArray);

//   emptyArray.sort((a, b) => a - b);

//   let max = emptyArray[emptyArray.length - 1];

//   console.log(max);
// }
// oddIndex(arr);

// 10-masala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// let min = arr.reduce((num, min) => (min < num ? min : num), arr[0]);
// let max = arr.reduce((num, max) => (max > num ? max : num), arr[0]);
// let startIndex;
// let endIndex;

// if (arr.indexOf(min) < arr.indexOf(max)) {
//   startIndex = arr.indexOf(min);
//   endIndex = arr.indexOf(max);
// } else {
//   startIndex = arr.indexOf(max);
//   endIndex = arr.indexOf(min);
// }

// console.log(startIndex);
// console.log(endIndex);

// let result = arr.splice(startIndex + 1, endIndex - startIndex);

// for (let i = 0; i < result.length; i++) {
//   result[i] = 0;
// }

// arr.splice(startIndex + 1, 0, result);

// arr = arr.flat(3);

// console.log(arr);

// 11 - masala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// function oddArray(arr) {
//   let emptyArray = arr.filter((num) => num % 2 === 1);
//   // console.log(emptyArray);

//   let size = Number(prompt("siz kiriting "));

//   if (size < emptyArray.length) {
//     console.log(emptyArray.slice(0, size));
//   }
// }

// oddArray(arr);

// 12-masala

// let arr = [55, 3, 4, 6, 7, 1, 2, 3, 55, 44, 3, 3];

// let emptyArray = [];
// for (let i = 0; i < arr.length; i++) {
//   emptyArray.unshift(arr[i]);
// }

// console.log(emptyArray);

// 13-masala

// let uArray = [1, 7, 8, 9, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 7, 9, 8, 8, 9, 9, 1];

// for (let i = 0; i < uArray.length; i++) {
//   for (let j = 1; j < uArray.length; j++) {
//     if (uArray[i] == uArray[j]) {
//       uArray.splice(i, 1);
//     }
//   }
// }

// console.log(uArray);

// 13-masalani  kodini yuqorida ishlangan 3-masaladan shunchaki ko'chirib qo'ydim

// 14-masala

let uArray = [1, 7, 8, 9, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 7, 9, 8, 8, 9, 9, 1];

let emptyArray = [];

for (let i = 0; i < uArray.length; i++) {
  if (i % 2 === 0) {
    emptyArray.push(uArray[i]);
  }
}

console.log(
  emptyArray.reduce((num, min) => (num > min ? min : num), emptyArray[0])
);
