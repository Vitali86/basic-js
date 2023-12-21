const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const nArr = String(n).split('');
  // console.log(nArr);
  let newArr = [];
  for (let i = 0; i < nArr.length; i++){
    newArr.push(delD(nArr, i));
  }
  function delD(array, index) {
    const arr = Object.assign([], array);;
    arr.splice(index, 1);
    return Number(arr.join(''));
  }
  return Math.max(...newArr);
  // return console.log(newArr, nArr);
}

module.exports = {
  deleteDigit
};