/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    let totalNums = 0
    for (let n of nums) {
        totalNums += n;
    }
    
    let supposedTotal = 0;
    for (let i=0; i<=nums.length; i++) {
        supposedTotal+= i
    }

    return supposedTotal - totalNums
    
};
