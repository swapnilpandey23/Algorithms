/*
Truncate a String

Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
 */


function truncateString(str, num) {
    let finalStr = ""; //Initialize a variable to store the truncated string.
    if(str.length > num){
     let newStr = str.substring(0,num); //Create a truncated string of same length of the given max string length.
     finalStr = newStr + '...'; //Append or concat '...' with the end of string.
     return finalStr;
     //If not longer than the given max string length, return the string.
    }else{
      return str;
    }
  
  }
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8)); //num (Max string length) smaller than string
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)); //num same length of string.
  console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)); //num bigger than string.
