function hasTargetSum(array, target) {
  let index = 0;
  let startNumber = 1;

  while (index < array.length) {
    while (startNumber < array.length) {
      if (array[index] + array[startNumber] === target) {
        return true;
      }
      startNumber++;
    }
    index++;
    startNumber = index + 1;
  }
  return false;
}

/* 
  0(n^2)
*/

/* 
  pseudocode
*/

/*
  Loops through the array comparing each number to the other number in the array and eliminating the numbers that we've alread compared 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4, 3, 5, 4, 3], 6));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([0, 3, 5, 4, 6], 6));

}

module.exports = hasTargetSum;
