/*
Problem - Where do I Belong
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).
Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).
*/

//CLASSIC METHOD.
function getIndexToIns(arr,num){
    arr.sort((a,b)=>a-b); //It will sort the array in ascending order, it mutates the array and returns reference to original array.
    for(let i=0; i<arr.length; i++){
        //Iterate through the array and check if number is less than or equal to the element at the current index. 
        if(num<=arr[i]){
            return i;  //if yes then, return the index because we are looking for lowest index at which num can be stored.
        }
    }
    return arr.length; //if the number is bigger than all the elements in array, simply return the length of array, i.e. last index.
}

//JavaScript or ES6 Method
function getIndexToIns(num, arr){
    //It'll create a new array of those elements only which are smaller than num.
    return arr.filter(element => element < num).length;
    //Suppose 2 elements are smaller than num so, it'll create the array of those elements, which means the num would be third element in the array i.e. at 2nd index, hence it'd return the length of array as 2.
}