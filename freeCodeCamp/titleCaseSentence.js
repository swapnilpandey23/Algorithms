/*
JS DSA Problem - Title Case a Sentence
Return the provided string with the first letter of each word capitalized. 
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

//Basically the challenge is to capitalize each word of a string.

function titleCase(str)
{
    let words = str.toLowerCase().split(' ');
    for(let i=0; i<words.length; i++){
        //Assigning the index we are iterating to case converted (required) string.
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); //We can say it as formula to capitalize.
    }
    return words.join(' ');
}

console.log(titleCase("I'm a gitHub codeSpace"));

//BREAKDOWN OF THE FORMULA:
/*
1.words[i].charAt(0) = targeting every index's first character.
2.toUpperCase() = converting the first character to uppercase character. According to ASCII sheet difference between a lowercase string and uppercase string is 32.
3. +words[i].slice(1) = concatenating the rest of string from index of 1 or second character in that string.

So, when you call capitalize("example"), it will:
 - Capitalize the first letter 'e' to 'E'.
 - Remove the first letter, leaving 'xample'.
 - Concatenate 'E' with 'xample'.
*/