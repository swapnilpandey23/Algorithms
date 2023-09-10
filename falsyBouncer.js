/*
Falsy Bouncer
Remove all falsy values from an array. Return a new array; do not mutate the original array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean.
 */

//Classic Approach
function falsyBouncer(arr){
    let truthyArr = [];
    for(let i=0; i<arr.length; i++){   //Iterate through every element in the array
        if(arr[i]){     //Add element in truthyArray if condition is true, i.e. element is true.
            truthyArr.push(arr[i]);
        }
    }
    return truthyArr;
}

//JavaScript approach
function falsyBouncer2(arr){
    return arr.filter(Boolean); //Array.prototype.filter() expects a function that returns a Boolean value which takes a single argument and returns true for truthy value or false for falsy value.
}

console.log(falsyBouncer([7, "ate", "", false, 9]));
console.log(falsyBouncer([false, null, 0, NaN, undefined, ""]));
console.log(falsyBouncer2(([7, "ate", "", false, 9])))
console.log(falsyBouncer2([false, null, 0, NaN, undefined, ""]));
