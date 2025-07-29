// 1.Reverse a String:
// Write a program to reverse a given string. Example: Input: "hello" Output: "olleh"
// let input = "hello";
// let reversed = input.split("").reverse().join("");
// console.log(reversed);  // Output: "olleh"
// 2.Count Vowels in a String:
// Count the number of vowels (a, e, i, o, u) in a given string.
// let input = "hello world";
// let count = 0;

// for (let char of input.toLowerCase()) {
//   if ("aeiou".includes(char)) {
//     count++;
//   }
// }

// console.log("Vowel count:", count);  // Output: 3
// 3.Check for Palindrome:
// Write a function to check if a string is a palindrome (reads the same backward as
// forward).
// function isPalindrome(str) {
//   let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   return cleaned === cleaned.split("").reverse().join("");
// }

// console.log(isPalindrome("madam"));        // true  
// console.log(isPalindrome("racecar"));      // true  
// console.log(isPalindrome("hello"));        // false
// console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
// 4.Find the Maximum Element in an Array:
// Given an array of numbers, find and print the largest value.
// let numbers = [3, 7, 2, 9, 5];
// let max = Math.max(...numbers);
// console.log("Maximum value:", max);  // Output: 9
// 5.Sum of Array Elements:
// Write a program to calculate the sum of all numbers in an array.
// let numbers = [3, 7, 2, 9, 5];
// let sum = 0;

// for (let num of numbers) {
//   sum += num;
// }

// console.log("Sum of array elements:", sum);  // Output: 26
// 6.Remove Duplicates from an Array:
// Given an array, remove duplicate elements and print the new array
// let array = [1, 2, 2, 3, 4, 4, 5];
// let uniqueArray = [...new Set(array)];

// console.log("Array without duplicates:", uniqueArray);  
// // Output: [1, 2, 3, 4, 5]
// 7.Concatenate Two Arrays:
// Write code to concatenate two arrays and show the combined result.
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];

// let combined = array1.concat(array2);
// console.log("Concatenated array:", combined);  
// // Output: [1, 2, 3, 4, 5, 6]
// 8.Find Index of an Element in Array:
// Given an array and an element, print the index position of the element if it exists,
// otherwise print -1.
// let array = [10, 20, 30, 40, 50];
// let element = 30;

// let index = array.indexOf(element);
// console.log("Index:", index);  // Output: 2 (or -1 if not found)
// 9.Sort an Array in Ascending Order:
// Write a function to sort a given array of numbers in ascending order.
// let array = [5, 2, 9, 1, 7];

// array.sort((a, b) => a - b);  // Custom compare function for numbers

// console.log("Sorted array:", array);  
// // Output: [1, 2, 5, 7, 9]
// 10.Replace Character in a String:
// Write a program to replace all occurrences of a specified character with another character
// in a string.
// let str = "banana";
// let result = str.replace(/a/g, "o");

// console.log("Modified string:", result);  
// // Output: "bonono"

