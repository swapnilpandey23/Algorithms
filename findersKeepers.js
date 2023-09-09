/*
freeCodeCamp JS DSA Problem -> Finders Keepers
Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
This means that given an element x, the 'truth test' is passed if func(x) is true. If no element passes the test, return undefined.
*/

//The challenge is to return first even number in the array.

function findElements(arr,func)
{
    let num = 0; //initializing a variable to store the elements of array
    for(let i=0; i<arr.length; i++){
        num = arr[i]; //looping and storing each element of array one by one
        if(func(num)){  //if it tests falsy, we go to next element, if true then we return the number.
            return num;
        }
    }
    return undefined;   //if none elements satisfies the function, return undefined.
}


console.log(findElements([1,2,3,57,8,10,12],num => num % 2 === 0));

//Pro tip - Don't use if(!func(num)){return undefined}, If func(num) is falsy for any element, it immediately returns undefined. 
//This means it stops as soon as it finds an element for which func returns false.