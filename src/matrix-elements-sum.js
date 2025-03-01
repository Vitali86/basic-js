const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let reverseMatrix = [];
  let sum = 0;

  for (let i = 0; i < matrix[0].length; i++){
    let column = [];
    for (let j = 0; j < matrix.length; j++){
      column.push(matrix[j][i]);
    }
    reverseMatrix.push(column);
  }
// console.log(reverseMatrix);
  reverseMatrix.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) break;
      sum += arr[i];
    }
  })
  
  return sum;
}

module.exports = {
  getMatrixElementsSum
};
// getMatrixElementsSum([[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]]);