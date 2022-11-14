// sorted (in ascending order) integer array nums of n elements
// and a target value, write a function to search target in nums.
// If target exists, then return its index, otherwise return -1.
// Please write in time complexity of O(log n)

const binaryIterativeSearch = (nums, target) => {

    let min = 0;
    let max = nums.length - 1

    while (min < max) {
        let middleIndex = Math.floor((min + max) / 2)

        if (target === nums[middleIndex]) {
            return middleIndex;
        } else if (target < nums[middleIndex]) {
            max = middleIndex - 1;
        } else {
            min = middleIndex + 1
        }
    }

    return -1;

}

console.log(binaryIterativeSearch([-1, 0, 3, 5, 9, 12], 9)) // 4
console.log(binaryIterativeSearch([-2, -1, 0, 1, 2, 3, 4], -1)) // 1