/*
JavaScript Data Structure and Algorithm Problem.

Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity,
the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax
 arr[i].
*/

//THE CLASSIC APPROACH O(n*m), n = no. of sub-arrays, m = element in sub-arrays.

function largestInSubArrays(array){
    let finalArray = [];    //Initializing an empty array to store the max of sub-arrays.
    for(let i=0; i<array.length; i++){  //Outer loop which would iterate through sub-array.
        let maxOfSubArray = array[i][0];  //Initializing a variable to store 0 index (1st element) of each sub-array.
        for(let j=1; j<array[i].length; j++){   //Inner loop which would iterate through the element of sub-array starting from index 1.
            if(array[i][j] > maxOfSubArray){    //Comparing the element with each element of particular sub-array.
                maxOfSubArray = array[i][j];    //If any other element is bigger assign it to our initialized variable.
            }
        }
        finalArray.push(maxOfSubArray); //Add the final maximum element into our empty array after every inner loop.
    }
    return finalArray;
}

console.log(largestInSubArrays([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

//THE ES6 METHOD APPROACH O(n*m). 
/*
array.map() returns a new array after the instructed operations everytime implemented.
It takes a callback function as an argument, hence this makes array.map() a higher order function.
Along with it, callback function passed is expected to be a pure function, i.e. It dosen't have side effect or changes on the original array 
*/

function largestInSubArrays1(array){
    return array.map(subArrays=>Math.max(...subArrays)); //It takes subArrays as callback argument and uses spread operator (...) to open up the subArrays and Math.max is  used to find maximum of each sub array.
}
const result = largestInSubArrays1([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);
console.log(result); // This should return [5, 27, 39, 1001]

/*Further explaination : 
Basically the array.map(subArrays) would map to each subArray just like a loop.
Then within each subArray spread operator (...) would spread it, i.e [1,2,3,4] will become 1,2,3,4.
Now Math.max(...subArray), i.e. Math.max(1,2,3,4) which would give the value 4 as maximum.
And as we discussed that array.map() returns new array without affecting original array.
return array.map() would return a new array without affecting the original array passed in our function.
*/