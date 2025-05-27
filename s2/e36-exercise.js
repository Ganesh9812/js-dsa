// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false

function sameDigits(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!frequencyCounter2[key]) {
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

const result = sameDigits(121, 211);
console.log(result);

// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

//general solution
function areThereDuplicates(...arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return true;
      }
    }
  }
  return false;
}

const result1 = areThereDuplicates(1, 2, 4, 5, 4);
console.log(result1, "result1");
// [1, 2, 3, 4, 5, 6, 7, 1, 8]

// 1 - 2, 3, 4, 5, 6, 7, 1, 8
// 2 - 3, 4, 5, 6, 7, 1, 8
// 3 - 4, 5, 6, 7, 1, 8
// 4- 5, 6, 7, 1, 8
// 5 - 6, 7, 1, 8
// 6 - 7, 1, 8
// 7 - 1, 8
// 1 - 8

//using frequency counter problem
function areThereDuplicat(...arr) {
  const frequencyCounter = {};
  for (let num of arr) {
    if (frequencyCounter[num]) {
      return true;
    }
    frequencyCounter[num] = 1;
  }
  return false;
}

const result2 = areThereDuplicat(1, 2, 4, 5, 4);
console.log(result2, "result2");

//using two pointer
//consider this as a sorted array
function areThereDuplicate(...arr) {
  let start = 0;
  let next = 1;
  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}

const result3 = areThereDuplicate(1, 2, 4, 5, 4);
console.log(result3, "result3");

// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function constructNote(msg, str) {
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let char of msg) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }
  for (let char of str) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] > frequencyCounter2) {
      return false;
    }
  }
  return true;
}
const result4 = constructNote("hihello", "hihello");
console.log(result4, "result4");

// Frequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

// findAllDuplicates([4,3,2,7,8,2,3,1]) // array with 2 and 3
// findAllDuplicates([4, 3, 2, 1, 0]) // []
// findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]) // array with 3, 2, and 1
// Time Complexity - O(n)

function findAllDuplicates(arr) {
  let duplicates = [];
  const frequencyCounter = {};

  for (let num of arr) {
    frequencyCounter[num] = (frequencyCounter[num] || 0) + 1;
  }
  for (let key in frequencyCounter) {
    if (frequencyCounter[key] > 1) {
      duplicates.push(key);
    }
  }
  return duplicates;
}

const result5 = findAllDuplicates([1, 2, 3, 3, 4, 5, 6, 3, 2]);
console.log(result5, "result5");

//using set
function findAllDuplicate(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i]);
  }
  return ans;
}

const result6 = findAllDuplicate([1, 2, 3, 3, 4, 5, 6, 3, 2]);
console.log(result6, "result6");
