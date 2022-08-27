
  // Write your algorithm here
  function isPalindrome(name) {
    // Write your algorithm here
    const newName = name.toLowerCase()

    // reverses the string
    let reversedName = newName.split('').reverse().join('');

    return newName === reversedName

  }


  // function isPalindrome(name) {
  //   for (let i = 0; i < name.length / 2; i++) {
  //     if (name[i] !== name[name.length - 1 - i]) {
  //       return false
  //     }
  //     return true;
  //   }

  // }


/*
  Add your pseudocode here
define a function is that with tha name parameter.
followed by a defination of a variable to hold the passed string
use the split('') method to split the string
reverse of the string passed as an argument;
Join the array of characters into one string
 if reversed string matches string
 return true
 else if reversed string does not match string
 return false
*/

/*
  Add written explanation of your solution here

 Split the string into an array
  * Reverse the string using the reverse inbuilt method
  * Join the strings to using join() to form one string
  * compare the string that was passed as an arguement with the new string formed

*/


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
