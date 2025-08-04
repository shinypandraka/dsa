1.Create an Object
o Write code to create a student object with properties: name, age, and grade.
// Creating a student object
let student = {
    name: "Shiny",
    age: 25,
    grade: "A"
};

// Displaying the object
console.log(student);
2.Access Object Properties
o Given the student object, print the value of the name property using dot notation
// Student object
let student = {
    name: "Shiny",
    age: 16,
    grade: "A"
};

// Accessing and printing the name property
console.log(student.name);
3.Add a Property to an Object
o Add a new property email to the student object and give it any value.
// Student object
let student = {
    name: "Shiny",
    age: 25,
    grade: "A"
};

// Adding a new property
student.email = "shinypandraka@gmail.com";

// Displaying updated object
console.log(student);
4.Update a Property Value
o Update the grade property of the student object to "A+".
// Student object
let student = {
    name: "Shiny",
    age: 25,
    grade: "A",
    email: "shinypandraka@gmail..com"
};

// Updating the grade property
student.grade = "A+";

// Displaying updated object
console.log(student);
5.Delete a Property
o Remove the age property from the student object
// Student object
let student = {
    name: "Shiny",
    age: 25,
    grade: "A+",
    email: "shinypandraka@gmail.com"
};

// Deleting the age property
delete student.age;

// Displaying updated object
console.log(student);
6.Object Method: Simple Function
o Add a method greet to the student object that prints "Hello, my name is [name]".
// Student object
let student = {
    name: "Shiny",
    grade: "A+",
    email: "shinypandraka@gmail.com",
    
    // Method
    greet: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

// Calling the method
student.greet();
7.Object Method: Using this Keyword
o Modify the greet method to use this.name instead of directly using the property
name.
// Student object
let student = {
    name: "Shiny",
    grade: "A+",
    email: "shinypandraka@gmail.com",
    
    // Method using this keyword
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Calling the method
student.greet();
8.Loop Through Object Properties
o Write a for...in loop that prints all keys and values in the student object
// Student object
let student = {
    name: "Shiny",
    grade: "A+",
    email: "shinypandraka@gmail.com"
};

// Loop through keys and values
for (let key in student) {
    console.log(key + ": " + student[key]);
}
9.Check If Property Exists
o Use the hasOwnProperty method to check if the object has a property named grade.
// Student object
let student = {
    name: "Shiny",
    grade: "A+",
    email: "shinypandraka@gmail.com"
};

// Check if property exists
if (student.hasOwnProperty("grade")) {
    console.log("Property 'grade' exists.");
} else {
    console.log("Property 'grade' does not exist.");
}
10.Create Multiple Objects
o Create an array called students containing three different student objects. Print the
name of each student using a loop.
// Array of student objects
let students = [
    { name: "Shiny", age: 25, grade: "A" },
    { name: "manisha", age: 24, grade: "B+" },
    { name: "nagendra", age: 27, grade: "A+" }
];

// Loop through and print names
for (let i = 0; i < students.length; i++) {
    console.log(students[i].name);
}

