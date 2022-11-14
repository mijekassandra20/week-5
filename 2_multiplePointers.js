/*
-Write a function called subsequence which takes in two strings and checks whether
the characters in the first string form a subsequence of the characters in the second string.
-In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.
-Write your solution with time complexity O(n) and space O(1)
*/

const subsequence = (str1, str2) => {

    let j = 0;
    let i = 0;

    while ( i < str1.length && j < str2.length){
        if (str1[i] === str2[j]){
            i++
        }
        j++
    }

    return i === str1.length;

}


// Test Cases:
console.log(subsequence('hello', 'hello world')) //true
console.log(subsequence('sing', 'sting')) // true
console.log(subsequence('abc', 'abracadabra')) // true
console.log(subsequence('abc', 'acb')) // false