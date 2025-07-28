1.Which of the following is a valid way to declare a variable in JavaScript?
a) int x = 5;
b) let x = 5;
c) const x = 5;
d) Both b and c
 Ans : Both b and c

2. What is the output of the following code?
let greeting = "Hello";
greeting = 42;
console.log(typeof greeting);


a) "string"
b) "number"
c) "object"
d) "undefined"
Ans : "number"

3.Which code will print numbers 0 to 4 in the console?
a)
for(let i = 0; i < 5; i++) {
  console.log(i);
}


b)
for(let i = 1; i <= 5; i++) {
  console.log(i);
}


c)
for(let i = 1; i < 5; i++) {
  console.log(i);
}


d) None of the above

Ans : a)
for(let i = 0; i < 5; i++) {
  console.log(i);
}

4.Write the value of x after this code executes:
let x = 10;
if (x > 5) {
  x += 2;
} else {
  x -= 2;
}

 Ans : true
let x = 10;
if (x > 5) {
  x += 2;
} else {
  x -= 2;
}

5.Which of the following is NOT a primitive data type in JavaScript?
a) String
b) Boolean
c) Object
d) Number
Ans : c)object

6.What will be the output of the following nested for loop?
for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 3; j++) {
    console.log(i, j);
  }
}


a) 1 1, 1 2, 2 1, 2 2
b) 1 1, 1 2, 2 1, 2 2, 3 1, 3 2
c) 1 1, 2 2
d) None
Ans : a) 1 1, 1 2, 2 1, 2 2

7.True or False: The operator === checks for both value and type equality in JavaScript.
Ans : True

8.Fill in the blank: The else if statement in JavaScript is used to ______.

Ans : The `else if` statement in JavaScript is used to "check multiple conditions" when the previous `if` condition is false.

9. Write the output of the following code:
let age = 16;
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Not an Adult");
}

Ans : 16 >=18 --->false------> Not an Adult

10. 
Which of these operators returns true if only one of its operands is true?
a) &&
b) ||
c) !
d) ==
Ans : b)||(OR operator)

11.Declare two variables a (number) and b (string)
Assign any values and print each with its data type using console.log().
 
let a = 20;           // number
let b = "SHINY";      // string

console.log(a, typeof a);  // Output: 20 'number'
console.log(b, typeof b);  // Output: SHINY 'string'

12.Swap variable values using a third variable
Write code to swap the values of x = 5 and y = 10, then print both after swap.
Ans :
let x = 5;
let y = 10;

let temp = x; 
x = y;        
y = temp;      

console.log("x after swap:", x); // Output: 10
console.log("y after swap:", y); // Output: 5

13.Chnseck if a number is even or odd
Given a variable n, write code using a conditional statement to print "Even" if n is even, or "Odd" if n is odd.
Ans :
let n = 3;

if (n % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
//the o/p is "odd" because remainder is 1 ,remainder should equal to 0 then it accept even numberthatis

14.Sum all numbers from 1 to 50 using a for loop
Print the result.
A :
let sum = 0;

for (let i = 1; i <= 50; i++) {
  sum += i;
}

console.log("Sum from 1 to 50:", sum);

output:Sum from 1 to 50: 1275

15.Create a multiplication table (1 to 10) using nested for loops
Output each result as i x j = result for all pairs i, j from 1 to 10.
Ans :
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
output:
1 x 1 = 1
1 x 2 = 2
...
10 x 9 = 90
10 x 10 = 100

16.Find the largest of three numbers using conditional statements
Declare three variables; use if/else to print the largest value.
Ans :
let a = 25;
let b = 42;
let c = 17;

if (a >= b && a >= c) {
  console.log("Largest number is:", a);
} else if (b >= a && b >= c) {
  console.log("Largest number is:", b);
} else {
  console.log("Largest number is:", c);
}

output:Largest number is: 42

17.Count down from 10 to 1 using a for loop
Print each number as the loop runs.
Ans :
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
 output:10
9
8
7
6
5
4
3
2
1

18.Determine if a character is a vowel or consonant
Given a variable char = 'e', write code using conditional statements to print "Vowel" or "Consonant".
Ans :
let char = 'e';

// Convert to lowercase to handle both uppercase and lowercase letters
char = char.toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log("Vowel");
} else {
  console.log("Consonant");
}
  console.log("Vowel");
output:Vowel

19.Demonstrate use of +=, -=, *=, and /= operators
Start with let num = 4, perform each operation with a value (of your choice), and print after each step.
Ans :
let num = 4;

num += 3;     // Adds 3 → 4 + 3 = 7
console.log("After += 3:", num);

num -= 2;     // Subtracts 2 → 7 - 2 = 5
console.log("After -= 2:", num);

num *= 4;     // Multiplies by 4 → 5 * 4 = 20
console.log("After *= 4:", num);

num /= 5;     // Divides by 5 → 20 / 5 = 4
console.log("After /= 5:", num);

output:
After += 3: 7
After -= 2: 5
After *= 4: 20
After /= 5: 4

20.Write a program using a conditional statement to check if a given number is positive, negative, or zero
Print "Positive", "Negative", or "Zero" accordingly.
Ans :
let number = -7; // You can change this to test different values

if (number > 0) {
  console.log("Positive");
} else if (number < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

output: Negative



