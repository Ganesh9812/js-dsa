// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let avg = (arr[left] + arr[right]) / 2;
    if (avg === num) {
      return true;
    } else if (avg < num) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

const result1 = averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8);
console.log(result1, "result1");

// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  let i = 0;
  let j = 0;
  if (!str1) {
    return false;
  }
}

function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
const result2 = isSubsequence("hello", "hello world");
console.log(result2, "result2");

// Frequency Counter / Multiple Pointer - findPair
// Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

// findPair([6,1,4,10,2,4], 2) // true
// findPair([8,6,2,4,1,0,2,5,13],1) // true
// findPair([4,-2,3,10],-6) // true
// findPair([6,1,4,10,2,4], 22) // false
// findPair([], 0) // false
// findPair([5,5], 0) // true
// findPair([-4,4], -8) // true
// findPair([-4,4], 8) // true
// findPair([1,3,4,6],-2) // true
// findPair([0,1,3,4,6],-2) // true
// findPair([1,2,3], 0) // false
// Part 1 - solve this with the following requirements:

// Time Complexity Requirement - O(n)

// Space Complexity Requirement - O(n)

// Part 2 - solve this with the following requirements:

// Time Complexity Requirement - O(n log n)

// Space Complexity Requirement - O(1)

//this is unsorted array
function findPair(arr, n) {
  if (n === 0) {
    const seen = new Set();
    for (let num of arr) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
  }

  const setVals = new Set(arr);

  for (let val of arr) {
    if (setVals.has(val + n) || setVals.has(val - n)) {
      return true;
    }
  }
  return false;
}
const result3 = findPair([6, 1, 4, 10, 2, 4], 2);
console.log(result3, "result3");
