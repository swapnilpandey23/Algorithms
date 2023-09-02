/*
Restrict Possible Usernames***

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alpha-numeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters. */

function checkUsername(userName) {
  const userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/gi;
  let result = userCheck.test(userName);
  return result;
}
console.log(checkUsername('JackOfAllTrades'));

/*
Explanation:

1. ^ - start of input
2. [a-z] - first character is a letter
3. [a-z]+ - following characters are letters
4. \d*$ - input ends with 0 or more digits
5. | - or
6. ^[a-z] - first character is a letter
7. \d\d+ - following characters are 2 or more digits
8. $ - end of input
 */
