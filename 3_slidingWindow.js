/*
Write a function called longestSubstringInString, which accepts a string and
returns the length of the longest substring with all distinct characters.
Please write in time complexity of O(n)
*/
const longestSubstringInString = (str) => {

    let longest = 0;
    let counter = 0; 
    let storage = {}


    for (i = 0; i < str.length; i++) { 
        if (storage[str[i]] !== undefined) {  
            i = storage[str[i]]; 
            storage = {}
            longest = Math.max(longest, counter);
            counter = 0;
        } else {
            storage[str[i]] = i
            counter++;
        }
    }
    return Math.max(longest, counter);

}

// Test Cases:
console.log(longestSubstringInString('')) //0
console.log(longestSubstringInString('rithmschool')) //7
console.log(longestSubstringInString('thisisawesome')) //6
console.log(longestSubstringInString('thecatinthehat')) //7
console.log(longestSubstringInString('bbbbbb')) //1
console.log(longestSubstringInString('longestsubstring')) //8
console.log(longestSubstringInString('thisishowwedoit')) //6