function consecutiveSubstrings(string) {
  // type your code here
  //define list
  const substrings = []
  //loop thru each value
  for (let i = 0; i < string.length; i++) {
    //loop thru the next value
    for (let j = i + 1; j <= string.length; j++) {
      //push the string from value i to j onto the defined list
      substrings.push(string.slice(i, j));
    }
  }
  return substrings
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;

// Please add your pseudocode to this file
// And a written explanation of your solution
