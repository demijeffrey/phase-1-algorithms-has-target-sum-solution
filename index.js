function hasTargetSum(array, target) {
  // Write your algorithm here

  for(i = 0; i < array.length; i++) {
    const compNum = target - array[i]
    for(j = i + 1; j < array.length; j++) {
      if(array[j] === compNum) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  
  Quadradic Runtime
  O(n^2)

*/

/* 
  Add your pseudocode here

  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false

*/

/*
  Add written explanation of your solution here

  The hasTargetSum() function takes an array and a target number as a parameter. The first for loop
    iterates through the array and creates a new variable 'compNum' which is the target number 
    minus array[1] (each element in the array). Taking the new 'compNum', we use another for loop
    (j) to iterate throught the rest of the elements in the array and compare them to the compNum
    looking for a match. If the compNum is the same as a number in the array, the function will
    return true. If the array does NOT have a match to the compNum, the function will return false.

*/

// You can run `node index.js` to view these console logs
// if (require.main === module) {
//   // add your own custom tests in here
//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

//   console.log("");

//   console.log("Expecting: true");
//   console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

//   console.log("");

//   console.log("Expecting: false");
//   console.log("=>", hasTargetSum([1, 2, 5], 4));
// }

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("");
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}


module.exports = hasTargetSum;
