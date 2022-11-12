/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function (s) {
  let index = 0;

  while (index < s.length) {
    let char = s[index];
    let adjacentChar = s[index + 1];
    
    if (char === adjacentChar) {
      s = s.replace(`${char}${adjacentChar}`, "");
      // go back one index
      if (index !== 0) {
        index -= 1;
      }
    } else {
      index += 1;
    }
  }

  return s;
};
