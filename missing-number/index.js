/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let numsIndex = {}
    for (let n of nums) {
        numsIndex[n] = 1
    }
    
    for (let i=0; i<=nums.length; i++) {
        if (numsIndex[i] !== 1) {
            return i 
        }
    }
    
};