/**
 * @param {number[]} nums
 * @return {number[]}
 */

 const circularLoop = (array, startIndex) => {
    let curIndex = startIndex;
    return  {
        next() {
            if (curIndex === array.length -1) {
                curIndex = 0
            } else {
                curIndex+= 1
            }
            if (curIndex === startIndex) {
                throw new Error('loop exhausted')
            }
            return array[curIndex]
        }
    }
}

var nextGreaterElements = function(nums) {
    
    let output = []
    for (let i = 0; i<nums.length; i++) {
        let curNum = nums[i]
        let loop = circularLoop(nums, i)
        while (true) {
            try {
                 let num = loop.next()
                 if (num > curNum) {
                    output.push(num)
                    break
                }
            } catch {
                // we have completed our loop and we still couldn't 
                // find a greater number
                output.push(-1)
                break
            }
            
        }
    }
    return output
};