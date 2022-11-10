/**
* @param {number} a
* @param {number} b
* @return {boolean}
*/
const isFactor = (a,b)  => {
    return a % b === 0
}

/**
* @param {string} a
* @return {string} 
*/
const reverse = (string) => {
     return string.split('').reverse().join('')
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

var reverseStr = function(s, k) {
    let reversedString = ''
    let index = 0
    while (index < s.length) {
        if (isFactor(index, k*2)) {
            let substring = s.slice(index, index+k)
            let reversedSubstring = reverse(substring)
            reversedString += reversedSubstring
            index += k
        } else {
            reversedString += s[index] 
            index += 1
        }   
    }
    return reversedString
};

