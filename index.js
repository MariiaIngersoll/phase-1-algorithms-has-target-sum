function hasTargetSum(array, target) {
   for (let i =0; i <array.length; i++)
   for (let j = i +1; j < array.length; j++) 
   if (array[i] + array[j] === target) {
    return true
   }
   
   return false



  // Write your algorithm here
  // take the first number from an array 
  // add this number and the following number
//  if total equils to the number from second agrument of the function then return true 
// if not then keep adding the first number to the third number and so on 


}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate through the array
  itearte through the rest of the array 
  add two valies together 
*/

/*
  Add written explanation of your solution here
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
}

module.exports = hasTargetSum;
