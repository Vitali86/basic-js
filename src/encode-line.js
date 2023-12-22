const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split('');
  let encodedLine = [];
  let symb = '';
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) symb = arr[0];
    if (arr[i] === symb) {
      count += 1;
    } else  {
      if (count > 1) encodedLine.push(count);
      count = 1;
      encodedLine.push(symb);
      symb = arr[i];
    }
    if (i === (arr.length - 1) && count > 1) {
      encodedLine.push(count);
      encodedLine.push(symb);
    }
    if (i === arr.length - 1 && count === 1) {
      encodedLine.push(symb);
    }
  }
  return encodedLine.join('');
}

module.exports = {
  encodeLine
};
