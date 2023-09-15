/*
Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs.
*/

//Basically we have to insert our first array into second, at given index, without affecting the first array's element.

//Required Solution Method.
function sliceAndSplice(arr1,arr2,index)
{
    let newArr = arr2.slice(); //Copying the arr2 to newArr;
    //.splice(index,toDelete,toAdd);
    newArr.splice(index,0,...arr1); //It alters the array from index i.e. 1, 0 items to be deleted, adds arr1's element from index 1 and shifts the existing newArr element after the arr1 elements when inserted.
    return newArr;
}

//Classic Solution Method
function sliceAndSplice2(arr1, arr2, n) 
 {
    let newArr = [...arr2]; //Using spread operator to copy the arr2 in newArr.
    for(let i=0; i<arr1.length;i++){
        newArr.splice(n,0,arr1[i]);
        n++;
    }
    return(newArr);
}

console.log(sliceAndSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(sliceAndSplice([1, 2, 3], [4, 5, 6], 1));
console.log(sliceAndSplice2(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));
console.log(sliceAndSplice2([1, 2, 3], [4, 5, 6], 1));

//We are copying the second array, because we've to operate on the 2nd array according to the question, we've to return both arrays without affecting.