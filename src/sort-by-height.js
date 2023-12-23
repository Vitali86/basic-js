const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let sortArr = [];
  let newArr = [];
  arr.forEach((el) => {
    if (el !== -1) sortArr.push(el);
  });
  sortArr.sort(function (a, b) {
    return b - a;
  });
  console.log(sortArr);
  for (let i = 0; i < arr.length; i++){
    if (arr[i] === -1) {
      newArr.push(-1)
    } else {
      newArr.push(sortArr.pop());
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight
};
// sortByHeight([4, 2, 9, 11, 2, 16])