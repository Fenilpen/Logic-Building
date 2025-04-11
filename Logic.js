qustion
Playing with Variables
Task:
Perform the following mathematical operations
on the provided variables a and b

Add
Subtract
Multiply
Divide
Increment
Decrement
Reminder




Questions 
{1} Playing with Types

Task 1:
Write a function stringToNumber that takes a string input and tries to convert it to a number. If the conversion fails, return "Not a number".

Task 2:
Write a function flipBoolean that takes any input and converts it to its boolean equivalent, then flips it. For example, true becomes false, 0 becomes true, etc.

Task 3:
Write a function whatAmI that takes an input and returns a string describing its type after conversion. If it's a number, return "I'm a number!", if it's a string, return "I'm a string!"

Task 4:
Write a function isItTruthy that takes an input and returns "It's truthy!" if the value is truthy in JavaScript, or "It's falsey!" if it's falsey.


Answers

1/
function stringToNumber(input) {
    let num = Number(input)
    if (isNaN(num)){
        let conv = "Not a number"
        return conv
    } else {
        return num 
    }``
}

2/
function flipBoolean(input) {
    let conv = Boolean(input)
    return !conv
}

3/
function whatAmI(input) {
    const converted = Number(input); 

    if (!isNaN(converted)) {
        return "I'm a number!";
    } else if (typeof input === 'string') {
        return "I'm a string!";
    } else {
        return "I'm something else!";
    }


}

4/
function isItTruthy(input) {

    if (input){
        return   "It's truthy!"
    }
    else {
        return "It's falsey!"
    }
}

whatAmI("fenil")
stringToNumber("11")
flipBoolean(0)
isItTruthy("fenil")



qustions 
Loops
Task 1: Sum of First N Natural Numbers
Write a function sumOfN(n) that returns the sum of the first n natural numbers

Task 2: Multiplication Table
Write a function printMultiplicationTable(n) that returns the multiplication table for n. Values return in the array must be of the format 2 * 2 = 4

Task 3: Count Vowels in a String
Write a function countVowels(str) that returns the number of vowels (in both lower & uppercase) in the given string str.


answers

function sumOfN(n) {
    let result = 0
    for (let i = 0; i <= n; i++) {
        result += i
    }
    return result
}
sumOfN(5)

 function printMultiplicationTable(n) {
    let table = []
   
    for (let i = 1; i <=10; i++) { 
        table.push(`${n} * ${i} = ${n * i}`)
    }
    return table
}
printMultiplicationTable(2)


function countVowels (str) {
    let total = 0
    let vowels = "aeoiuAEOIU"
    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            total = total + 1
        }
    }
    return total
}
countVowels('abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ')  





qustions
Higher-Order Functions and Arrow Functions

All the following tasks must be strictly be writtern in arrow functions only.

Task 1: Using Array Methods
Write a function squareNumbers(arr) using map() and arrow functions

Task 2: Custom Filter Function
Create a function filterEvenNumbers(arr) using filter() and arrow functions

Task 3: Sum of Positive Numbers
Write a function sumPositiveNumbers(arr) that takes an array of numbers and returns the sum of all positive numbers using filter() and reduce() with arrow functions

Task 4: Transform Array of Objects
Write a function getNames(arr) that takes an array of objects where each object has a name property, and returns an array of just the names using map() and arrow functions

Task 5: Find the Longest Word
Write a function findLongestWord(arr) that takes an array of strings and returns the longest word using reduce() and an arrow function

answers

task 1

const squareNumbers = (arr) => {
   return arr.map((e) => e * e)
    
}
squareNumbers([1,2,3,4,5,6])

task 2
const filterEvenNumbers = (arr) => {
    return arr.filter((e) => e % 2 === 0)
};

filterEvenNumbers([22,33,44,55,66,77])

task 3
const sumPositiveNumbers = (arr) => {
    let fil = arr.filter((e) => e > 0 )
   return fil.reduce((a,e) => a = a + e ,0)
};
sumPositiveNumbers([0.1,1,2,0.7,3])

task 4
const getNames = (arr) => {
    return arr.map((e) => e.name )
};

getNames([
   {name: "Alice"}, 
   {name: "Bob"},
   {name: "Charlie"}
])

task 5
const findLongestWord = (arr) => 
   arr.reduce((a,e) => e.length > a.length ? e : a ,"");

findLongestWord(['banana','three','abcd'])

qustions

Nested Functions and Context
Task 1: Using this in Objects

Create an object person with a method introduce() that uses this
additionally add properties of name & age that will result in Hi, my name is Hitesh and I am 19.5 years old on calling introduce()


Task 2: Function within a function
Write a function outer() that contains another function inner() and returns a value of 'Inner function called' on calling outer()

answers

task 1
const person = {
    name: 'Hitesh',
    age: 19.5,
    introduce : function () {return `Hi, my name is ${this.name} and I am ${this.age} years old`}
};


task 2
function outer() {
   let lat
   
    function inner(){
         lat = 'Inner function called' 
    }
    inner()
    
    return lat
}

outer()
    
