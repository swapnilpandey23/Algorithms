/*
Mutations
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.
The arguments ["hello", "hey"] should return false because the string hello does not contain a y.
Lastly, ["Alien", "line"], should return true because all of the letters in line are present in Alien.
 */

function mutation(arr) {
    //Converting both strings to lowercase.
    const firstStr = arr[0].toLowerCase();
    const secondStr = arr[1].toLowerCase();
    
    
    for(let i=0; i<secondStr.length; i++){
      if(firstStr.indexOf(secondStr[i]) < 0){ //Comparing first string with each character of second string.
        return false;
      }
    }
    return true;
  }
  
  mutation(["hello", "hey"]);
  mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);

  //The indexOf() returns the value less than 0 (i.e. -1), means character from second string not found in first string, and if block returns false right away.
  //This means that there is at least one character in the second string that is not in the first string, so they are not mutations of each other.