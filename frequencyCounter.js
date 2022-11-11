/* 
- Given an array nums of size n, return the majority element.
- The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the 
majority element always exists in the array.
- Please solve using a linear time complexity and using the frequency counter pattern
*/

const solution = (nums) => {

    const n = nums.length;

    if (n < 1 || n > 5 * 104){
        return -1
    }
    

    let storeNum = {}

    for (let n of nums){
        if(n < -109 || n > 109) return -1

        storeNum[n] = (storeNum[n] || 0) + 1

    }

    const getValues = Object.values(storeNum)
    const max = Math.max(...getValues)

    for (let key in storeNum){
        if (storeNum[key] === max){
            return key
        }
    }
}

console.log(solution([3,2,3]))
console.log(solution([2,2,1,1,1,2,2]))
