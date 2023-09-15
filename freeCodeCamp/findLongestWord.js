/*
freeCodeCamp JS Data Structure and Algorithm certification problem.
Find the Longest Word in a String
Return the length of the longest word in the provided sentence.
Your response should be a number. */


function longestWordLength(str){
    let words = str.split(' '); //if you do split('') it'd make an array of characters, to make array of words keep in mind to put a whitespace.
    let longestWordLength = 0;

    //It's a for of loop, Word is a variable which would iterate throughout our words array.
    for (const word of words){  
        //To remove any non-alphanumeric character from string, It's optional if not required in the problem.
        let cleanWord = word.replace(/\W/g,'');  //replace() takes two args, (what to replace, value to ne replaced with).
        if(cleanWord.length > longestWordLength){   //Comparison to check the longest word length.  
            longestWordLength = cleanWord.length;   //Assigning the longest length of word after comparison.
        }  
    }
    return longestWordLength;
}
//It contains non-alphanumeric characters but due to our regex(15th line) it'll clean the word and output 9 as codespace is 9 character long word.
console.log(longestWordLength("This  is a git$hub codespac#e"));    


// TO FIND THE LONGEST WORD OF THE STRING
function longestWord(str){
    let words = str.split(" ");
    let longestWord = "";
    let longestWordLength = 0;
    for(const word of words){
        let cleanWord = word.replace(/\W/g,''); //Try removing second argument(,'') and you'll see undefined at the place of special characters in the console.
        if(cleanWord.length > longestWordLength){
            longestWord = cleanWord;    //Assign the word to longest word whose length is longest in the entire string.
            longestWordLength = cleanWord.length;
        }
    }
    let result = `Longest Word is ${longestWord} and it's length is ${longestWordLength}`;
    return result;
} 

console.log(longestWord("This  is a git$hub codespac#e and i am lovi#$ng it"));