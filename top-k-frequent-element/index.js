/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let numFrequency = {}
    for (let n of nums) {
        let initialFrequency = numFrequency[n] ?? 0
        numFrequency[n] = initialFrequency+1
    }
    let sortedNumFrequency = Object.entries(numFrequency).sort((a,b) =>  b[1] - a[1])
    let output = sortedNumFrequency.slice(0, k).map(([ num ]) => Number(num))
    return output
};