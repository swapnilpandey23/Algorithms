//FREECODECAMP JS DATA STRUCTURE AND ALGO. PROBLEM.

/*
We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments,
and returns a new array. elem represents an element that may or may not be present on one or more of
the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the 
passed array such that any array nested within arr containing elem has been removed.
 */

//Both code will return [] 'empty array' because all sub array contains element = 3.

//METHOD - 1
function filteredArray(arr, elem){
    let newArr = [];
    // Only change code below this line
    for(let i=0; i<arr.length; i++){     //Iterating through the array.
      //If any array that does not contain the element passed as param, push it into the newArr to make a filtered array. 
      if(arr[i].indexOf(elem) == -1){    //indexOf() returns -1 if not found, and index number if found.
           newArr.push(arr[i]);                                                   
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


//METHOD - 2
  function filteredArray(arr, elem){
    let newArr = [];
    // Only change code below this line
    for(let i=0; i<arr.length; i++){     //Iterating through the array of sub-arrays.
      let subArray = arr[i];      
      //It'll ckeck if any sub-array that does not contains/includes the element, push it into the newArr to make a filtered array.                                                    
      if(!subArray.includes(elem)){  
        newArr.push(subArray);
      }
    }
    // Only change code above this line
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));