/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    let output = []
    for (let i=0; i<temperatures.length; i++) {
        let currentTemp = temperatures[i]
        let nDays = 0
        for (let j = i+1; j<temperatures.length; j++) {
            let nextTemp = temperatures[j]
            if (nextTemp > currentTemp) {
                nDays = j - i
                break
            }
        }
        output.push(nDays)
        
    }
    return output
};