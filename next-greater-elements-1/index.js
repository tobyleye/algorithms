/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {
    let nums2Indexes = {}
    for (let i=0; i<nums2.length; i++) {
        let num = nums2[i]
        nums2Indexes[num] = i
    }
    
    let output = []
    
    for (let num of nums1) {
        let numIndex = nums2Indexes[num]
        let found = -1
        // start loop in nums2 array from numIndex
        for (let start=numIndex; start < nums2.length; start++) {
            let nextNum = nums2[start]
            if (nextNum > num) {
                found = nextNum
                break
            }
        }
        output.push(found)
    }
    
    return output
};