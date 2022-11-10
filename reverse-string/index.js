/**
 * @param {string} s
 * @return {string}
 */

 const reverse = s => {
    // let reversedString = ''
    // for (let i=s.length-1; i>=0; i-- ) {
    //     reversedString += s[i]
    // }
    // return reversedString
    return s.split('').reverse().join('')
}

var reverseWords = function(s) {
    let output = s.split(' ').map(word => reverse(word)).join(' ')
    return output
    
};