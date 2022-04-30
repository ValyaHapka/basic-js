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
  let result = 0;
  let array = [];
  for (let arr = 1; arr < matrix.length; arr++) {
    for (let i = 0; i < matrix[arr].length; i++) {
      // console.log(matrix[arr[i]])
      if (matrix[arr - 1][i] !== 0) {
        array.push(matrix[arr][i])
      }
    }
  }
  console.log(array);
}
getMatrixElementsSum([
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3]])
module.exports = {
  getMatrixElementsSum
};
