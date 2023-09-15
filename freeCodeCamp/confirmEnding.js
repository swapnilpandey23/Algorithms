/*
Problem - Confirm the Ending.
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the 
purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    //We need to validate the string we have will contain the characters the target variable carries with it.
    //Hence, creating a substring of the total length of string - length of target gives us the exact string the target have. Try it with pen paper.
    let endOfString = str.substring(str.length - target.length);
    return endOfString == target;
  }
  console.log(confirmEnding('Hello World', 'Wod')); //False
  console.log(confirmEnding('Hello World', 'World')); //True
  console.log(
    confirmEnding(
      'Walking on water and developing software from a specification are easy if both are frozen',
      'en'
    )
  ); //True
  