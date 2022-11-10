// TODO Problem 1: In 3-4 sentences, please explain what BIG O NOTATION is.

    // BIG O NOTATION represents the computational difficulty of completing a task as the data increases.
    // In simplest term, it is a way to measure an algorithm's efficiency and computes the complexity of a code. 
    // BIG O NOTATION, focuses on the worse cases scenerio. 

// TODO Problem 2: For each of the time complexities shown below:
    //? - Name the complexity
    //? - Rank from 1-5 (1 being the best, 5 being the worst)
    //? - Describe in 1-2 sentences of the complexity
    //? - Provide a code example of how the complexity works

        //? 1. Constant Time Complexity - O(1)
            // - Ranks as 1
            // - This is the most ideal scenario. It does not depend on the input size, so the runtime will always be the same regardless of the size.
            // - example:
            //     const arr = [2, 4, 6, 8, 9, 10]
            //     arr.push(12)

        //? 2. Logarithmic Time Complexity - O(log n)
            // - Ranks as 2
            // - It never looks at the elements of all inputs. Instead, it goes through only half your input than the full size.
            // - example:
            const numbers = [1, 3, 6, 9, 12, 15, 18, 21, 24, 27]

            const logTime = (arr) => {
                let numberOfIterations = 0;
            
                for( i = 1; i < arr.length; i *= 3){
                    numberOfIterations++
                }
            return numberOfIterations
            }
        
    //? 3. Linear Time Complexity - O(n)
        // - Ranks as 3
        // - It looks through at the element one by one. There is a 1:1 relationship between data size and time completion.
        // - All loops are examples of linear.
        // - example: 
            const numbers2 = [1, 2, 3, 4, 5]

            for ( i = 0; i < numbers.length; i++){
            console.log(numbers2[i])
           }

    //? 4. Quadratic Time Complexity - O(n^2)
        // - Ranks as 4
        // - It is when you increase the input size by multiplication factor. Double loops or nested loops are example.
        // - example:
            const nums1 = [1, 2, 3, 4, 5]
            const nums2 = [1, 2, 3, 4, 5]

            let sum = 0

            for (i = 0 ; i < nums1.length; i++){
                for(j = 0; j < nums2.length; j++){
                    sum = nums1[i] + nums2[j]
                    console.log(sum)
                }
            }

    //? 5. Factorial Time Complexity - O(n!)
        // - Ranks as 5
        // - It is one of the worst possibilities. It gets more complex the bigger your input size is.
        // - example:
            const factorial = (n) => {
                let num = n; 
            
                if (n === 0) return 1;
                for (let i = 0; i < n; i++) {
                    num = n * factorial(n - 1); 
                }
            
                return num; 
                
            }
            
            console.log(factorial(4))
            
// TODO Problem 3: Name 3 reasons why we care about Big O and we care about code performance. 

// 1. Scalability
// 2. Time is money
// 3. Demontrate code competency in interviews

// TODO Problem 4: What is the problem of using a time method such as performance.now() to measure how “fast” a code runs on our machines

// It is not efficient because performance may vary depending on how fast your computer can process the task, so the time will be different for every computer. 

// TODO Problem 5: Given the following piece of code:

//? Explain what the TOTAL time complexity is
    // Since the function had 1 constant, 2 linear and 1 nested for loop, it would be 1 + n + n + n^2

//? Explain what the CONSOLIDATED time complexity is

    // Since the function had 1 constant, 2 linear and 1 nested for loop,
    // it would condense to n^2, neglecting the constants and other higher ranking time complexities.

const someFunction = (arr1) => {
    arr1.push(1).pop() // O(1) + O(1) = 2(O) => 1
   
    for (let i = 0; i < arr1.length; i++) { // O(n)
    console.log('do something 2')
    }
   
    for (let i = 0; i < arr1.length; i++) { // O(n)
    console.log('do something 3')
    }
   
    for (let i = 0; i < arr1.length; i++) { // O(n)
        for (let i = 0; i < arr1.length; i++) { // O(n)
            console.log('do something 3')
            }
        } // O(n) * O(n) = 2(n^2) => O(n^2)
   }

// TODO Problem 6: Given the following piece of code:

//? Explain what the TOTAL time complexity is
    // Since the function had 1 constant, 1 linear and a nested 3 loops, then the total time complexity is 1 + n(1) + n^3

//? Explain what the CONSOLIDATED time complexity is
    // Since the function had 1 constant, 1 linear and a nested 3 loops
    // It would condense to n^3, neglecting the constants and other higher ranking time complexities.

const someFunction1 = (arr1) => {
    let sum = arr1[1] + arr1[2] // O(1)
   
    while (condition) { // O(n)
        sum = arr1[5] + arr1[7] // O(1)
    } // / O(n) * O(1) = O(n)
   
    for (let i = 0; i < arr1.length; i++) { // O(n)
        for (let i = 0; i < arr1.length; i++) { // O(n)
            for (let i = 0; i < arr1.length; i++) { // O(n)
                console.log('do something 3')
                }
            }
        }
   } // O(n) * O(n) * O(n) = O(n^3)

// TODO Problem 7: Please explain in 3-5 sentences why we can ignore constants and consolidate our time complexities. 
   // We ignore constants because they really do not have an impact to our Big O. Big O focuses on the worse case scenario where it has an impact because it has much bigger computation and complex. The more it grows and becomes complex, the more heavy it becomes and will have a bigger impact on the performance of a code. Whereas constants really don't matter because they do not have large inputs and so they are neglected.

// TODO Problem 8: In 2-3 sentences, please explain what space complexity is and why we care. 
   // Space Complexity refers to the total memory used by a program. It helps in order to analyze how much additional memory is needed to allocate for our program, especially when there are storing of data involved. 
   // It is important for us to know what algorithm is optimal to use, because the smaller memory a program uses, the better and faster it is, as it can save more space.

// TODO Problem 9: Given the following data TYPES, label what the space complexity is for each one:
// - Boolean - O(1) Constant Space Complexity 
// - Undefined - O(1) Constant Space Complexity
// - Null - O(1) Constant Space Complexity
// - Numbers - O(1) Constant Space Complexity
// - String - O(n) Linear Space Complexity
// - Array - O(n) Linear Space Complexity
// - Object - O(n) Linear Space Complexity

// TODO Problem 10: Give two reasons when you should use a array and when you should use a object. 
// If you want a fast access to an element and wants to create an ordered collection, then you should use ARRAYS.
// If you want to create a collection where order do not matter and fast accessing is not a big deal, the you should use OBJECTS.

// TODO Problem 11: Given the following object methods, label what the TIME complexity is for each one: 
const obj = {
    name: 'tony'
}
//inserting
obj.age = 44; // O(1) Constant Time Complexity

//removing
delete obj.age; // O(1) Constant Time Complexity

//searching 1
obj.hasOwnProperty['name'] // O(n) Linear Time Complexity

//searching 2
for (const prop in obj) { // O(n) Linear Time Complexity
    console.log(obj[prop])
}

//accessing
obj.age //44 // O(1) Constant Time Complexity

//retrieving keys
Object.keys(obj) // O(1) Constant Time Complexity

//retrieving values
Object.values(obj) // O(1) Constant Time Complexity

// TODO Problem 12: Given the following array methods, label what the TIME complexity is for each one:

const arr2 = [1, 2, 3, 4, 5, 6, 7];

//inserting 1
arr2.push(8) // O(1) Constant Time Complexity

//inserting 2
arr2.unshift(0) // O(n) Linear Time Complexity

//removing 1
arr2.pop() // O(1) Constant Time Complexity

//removing 2
arr2.shift() // O(n) Linear Time Complexity

//searching 1
const findNumber = arr2.find(num => num === 2) // O(1) Constant Time Complexity

//searching 2
for (let i = 0; i < arr2.length; i++) { // O(n) Linear Time Complexity
    if (arr2[i] === 2) {
        return arr2[i]
    }
}
//retrieving
const getNumber = arr2[3] // O(1) Constant Time Complexity

//method 1
const double = arr2.map(num => num * 2) // O(n) Linear Time Complexity

//method 2
const removeAndAddNewNumber = arr2.splice(1, 1, 5) // O(n) Linear Time Complexity

//method 3
const getSum = arr2.reduce((total, num) => total + num, 0) // O(n) Linear Time Complexity

//method 4
for (const num of nums) { // O(n) Linear Time Complexity 
    console.log(num * 2)
}

//method 5
const convertToString = arr2.join(' ') // O(n) Linear Time Complexity 

//method 6
const reversed = arr2.reverse();  // O(n) Linear Time Complexity

// TODO Problem 13: For each one of these code blocks, please identify the time & space complexity and explanation of why it is. 

//? Problem 1:

    // TOTAL Time Complexity is O(n) * O(1) 
    // CONSOLIDATED Time Complexity is LINEAR => O(n)
    // Explanation: The function had 1 linear which is the for loop and 1 constant which is if conditional statement.

    // Space complexity is CONSTANT => O(1)
    // Explanation: It is Constant, because the function is just iterating the array and is not adding to its memory.

    function findFirstIndexOfNumber(number, array) { // space complexity is O(n)
        for (let i = 0; i < array.length; i++) { // O(n)
            if (array[i] === number) { // O(1)
                return i; 
            }
        }

        return -1
    }

//? Problem 2:

    // TOTAL Time Complexity is O(n) * O(1) * O(1)
    // CONSOLIDATED Time Complexity is => O(n)
    // Explanation: The function had 1 linear which is the forEach loop and 2 constants which is the conditional statement and push method.

    // Space complexity is LINEAR => O(n) 
    // Explanation: It is Linear, because the function is iterating an array in order to find its index. When it finds, it pushes it inside the arrayOfIndexes, returning an array where the indices are stored.

    function findEachIndexOfNumber(number, array) { // space complexity is O(n) 
        let arrayOfIndexes = []; 

        array.forEach(function (element, index) { // O(n)
            if (element === number) { // O(1)
                arrayOfIndexes.push(index);  // O(1)
            }
        });
        return arrayOfIndexes;
    }

//? Problem 3: 

    // TOTAL Time Complexity is O(1) + O(1) + O(1)
    // CONSOLIDATED Time Complexity is => O(1)
    // Explanation: The function had 3 conditional satements and the three are all constant.

    // Space complexity is CONSTANT => O(1) 
    // Explanation: It is Constant, because the function is just comparing between the arrays and there's no growth in the data.

    const array = [36, 14, 1, 7, 21];

    function higherOrLower(array) { // space complexity is O(1)  
        if (array[array.length - 1] > array[0]) { // O(1) 
            return "Higher";
        } else if (array[array.length - 1] < array[0]) {  // O(1) 
            return "Lower";
        } else { // O(1)
            return "Neither";
        }
    }


//? Problem 4: 

    // TOTAL Time Complexity is O(n) * O(1) 
    // CONSOLIDATED Time Complexity is => O(n)
    // Explanation: The function had 1 for loop and 1 operation to compute the sum.

    // Space complexity is CONSTANT => O(1) 
    // Explanation: It is Constant, because we are only updating and returning the sum, and there is no growth in the data.

    const array3 = [1, 2, 3, 4, 5, 6, 7, 8];

    function determineSumOfSequentialArray(array3) { // space complexity is O(1) 
        let sum = 0;

        for (let i = 0; i < array3.length; i++) { // O(n)
            sum += array3[i]; // O(1)
        }

        return sum;
    }

//? Problem 5: 

    // TOTAL Time Complexity is O(1) 
    // CONSOLIDATED Time Complexity is => O(1)
    // Explanation: The function only had 1 operation that solves the total sum of the array .

    // Space complexity is CONSTANT => O(1) 
    // Explanation: It is constant, because we are only returning the sum and there is no growth in the data.

    const arrays = [1,2,3,4,5,6,7,8];

    function determineSumOfSequentialArray(arrays) { // space complexity is O(1) 
        return arrays.length * (arrays.length + 1)/2; // O(1)
    }

//? Problem 6:
    
    // TOTAL Time Complexity is O(1) + O(1) + O(log n) + O(log n)
    // CONSOLIDATED Time Complexity is => O(log n)
    // Explanation: The function had 2 conditional statements that are constant and 2 conditional statements that scans through as sorted array to find an index of number and return only those from middle index up to the last until it finds the number equal to which was passed as argument and then repeats until the number returns the index of the number. 

    // Space complexity is CONSTANT => O(1) 
    // Explanation: Because there is no growth in the data and we are only scanning through an array to return a value.

    function searchSortedArray(number, array, beginIndex = 0, endIndex = array.length - 1) { // space complexity is O(1)
        let middleIndex = Math.floor((beginIndex + endIndex) / 2);

        if (array[middleIndex] === number) { // O(1) 
            return middleIndex;

        } else if (beginIndex >= endIndex) { // O(1)
            return -1;

        } else if (array[middleIndex] < number) { // O(log n)
            beginIndex = middleIndex + 1;
            return searchSortedArray(number, array, beginIndex, endIndex);

        } else if (array[middleIndex] > number) { // O(log n)
            endIndex = middleIndex - 1;
            return searchSortedArray(number, array, beginIndex, endIndex);
        }
    }

//? Problem 7:

    // TOTAL Time Complexity is O(n) * O(n) * O(1) * O(1)
    // CONSOLIDATED Time Complexity is => O(n^2)
    // Explanation: The function had 2 forEach loops, 1 conditional statement and 1 push method.

    // Space complexity is LINEAR => O(n) 
    // Explanation: It is linear, since we are pushing the indexes of the same elements between the two arrays into a new array called arrayOfPairs. And so there is growth in the data of our program.

    const array1 = [3, 7, 9, 12, 15, 18, 32];
    const array2 = [3, 3, 7, 41, 76];

    function compareArrays(array1, array2) { // space complexity is O(n)
        let arrayOfPairs = [];

        array1.forEach(function (e, i) { // O(n)
            array2.forEach(function (e2, i2) { // O(n)
                if (e === e2) { // O(1)
                    arrayOfPairs.push([i, i2]); // O(1)
                }
            });
        });

        return arrayOfPairs;
    }

//? Problem 8: 

    // TOTAL Time Complexity is (O(1)+ O(1) + O(1)) * O(n) * O(n) * O(1) * ((O(n) + O(1)) + O(1)
    // CONSOLIDATED Time Complexity is => O(n^3)
    // Explanation: The function had 2 assigning of values 1 while loop, 1 for loop, 1 conditional statement, and 1 function that is executed when called inside the if statement and 2 operations for count.

    // Space complexity is CONSTANT => O(1) 
    // Explanation: Because there is no growth in the data and we are only reassigning and swapping the elements in an array.

    function sortByValue(array) { // space complexity is O(1)
        function swap(array, index1, index2) { // space complexity  is O(1)
            let temporaryValue = array[index1]; // O(1)
            array[index1] = array[index2]; // O(1)
            array[index2] = temporaryValue; // O(1)
        }
        let count = 1;
        while (count < array.length) { // O(n)
            let swapCount = 0;
            for (let i = 0; i < array.length - count; i++) { // O(n)
                if (array[i] > array[i + 1]) { // O(1)
                    swap(array, i, i + 1); // O(n)
                    swapCount++; // O(1)
                }
            }
            count++; // O(1)
        }
        return array;
    }

//? Problem 9:

    // TOTAL Time Complexity is O(n) * O(n) * O(1)
    // CONSOLIDATED Time Complexity is => O(n^2)
    // Explanation: The function had 1 forEach loop, 1 conditional statement that checks that elements of an array if it includes a specific element and 1 push method.

    // Space complexity is LINEAR => O(n) 
    // Explanation: There is growth in the data because we are pushing the duplicate elements between 2 arrays into a new array called dupeArray.

    function returnDupes(array, array2) { // space complexity is O(n)
        let dupeArray = [];

        array.forEach(function (element) { // O(n)
            if (array2.includes(element)) { // O(n) 
                dupeArray.push(element); // O(1)

            }
        });

        return dupeArray;
    }

//? Problem 10:

    // TOTAL Time Complexity is n + n + 1
    // CONSOLIDATED Time Complexity is => O(n)
    // Explanation: The function 1 filter function, 1 condition and 1 operation.

    // Space complexity is CONSTANT => O(1) 
    // Explanation: It is constant since there is no growth in the data and we are only returning the total of the filtered array.

    function sumFilteredData(array) { // space complexity is O(1)

        return array.filter(function (element) { // O(n)

            return ((element > 5) && (element < 20)) 
        }).reduce(function (valueToAdd, currentValue) { // O(n)
            return valueToAdd + currentValue; // O(1)
        }, 0);
    }


