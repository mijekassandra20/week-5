/*
-Write a function called subsequence which takes in two strings and checks whether
the characters in the first string form a subsequence of the characters in the second string.
-In other words, the function should check whether the characters in the first string
appear somewhere in the second string, without their order changing.
-Write your solution with time complexity O(n) and space O(1)
*/
const subsequence = (str1, str2) => {

    let i = 0;

    for ( let j = 0; j < str1.length; j++){
        if (str1[j] === str2[i]){
            i++
        } else if (str1[j] !== str2[i]){
            if (str1[j] === str2[i+1]){
                temp = str2[i+1]
                str2[j] = temp
                i++
            }
            else {
                return false;
            }
        } 
    }

    return true;

}
// Test Cases:
console.log(subsequence('hello', 'hello world')) //true
console.log(subsequence('sing', 'sting')) // true
console.log(subsequence('abc', 'abracadabra')) // true
console.log(subsequence('abc', 'acb')) // false