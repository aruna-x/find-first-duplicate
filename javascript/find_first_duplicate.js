function findFirstDuplicate(arr) {
  let s = new Set();
  for(let i=0; i<arr.length; i++) {
    if (s.has(arr[i])) {
      return arr[i];
    }
    else {
      s.add(arr[i])
    }
  }
  return -1;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// And a written explanation of your solution

/**
 * Array => first duplicate value || -1
 * 
 * Plan:
 * 
 * naive
 * Build a set as you iterate over the array. If set returns true for any, return the element.
 * If you get to the end without return, return -1.
 * 
 * 
 * 
 */
