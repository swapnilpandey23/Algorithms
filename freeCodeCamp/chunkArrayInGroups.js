/*
Chunky Monkey
Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
*/

function chunkArrayInGroups(arr, size) {
    let newArr = [];  //Initializing an empty array to store chunks of the array.
    for(let i=0; i<arr.length; i=i+size){   //Iterating through array while skipping the part to be chunked in loop's logic.
      newArr.push(arr.slice(i,i+size));     //Slicing the array into desired chunk and pushing it to empty array, every iteration will create a new array inside root array.
    }
    return newArr;
  }
  
  console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));