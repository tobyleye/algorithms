/**
 * @param {number[]} nums
 * @return {number}
 */
 var findDuplicate = function(nums) {
    let numsIndex = {}
    for (let n of nums) {
        if (numsIndex[n]) {
            return n
        }
        numsIndex[n] = true
    }
    
};