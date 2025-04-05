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

 function printMultiplicationTable(n) {
    let table = []
   
    for (let i = 1; i <=10; i++) { 
        table.push(`${n} * ${i} = ${n * i}`)
    }
    return table
}


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


sumOfN(5)
printMultiplicationTable(2)
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


