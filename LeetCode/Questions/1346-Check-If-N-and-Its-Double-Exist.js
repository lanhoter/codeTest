/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  if (arr.length === 0) return false;

  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(arr[i] * 2) && arr.indexOf(arr[i] * 2) !== i) {
      return true;
    }
  }
  return false;
};
