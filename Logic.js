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
