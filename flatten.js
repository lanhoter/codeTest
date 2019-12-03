'use strict'

const intialArr = [1, 2, 3, [4, [5], [6, [7, 8], [9, 10]], [10, 11, [12, [13, 14]]]]]

let arrays = [[1, 2, 3], [4, 5], [6]];

// flatten one level
function flat(arr) {
    let res = [];
    for (let i = 0; i < arr.length; ++i) {
        Array.isArray(arr[i]) ? res = res.concat(flat(arr[i])) : res.push(arr[i])
    }
    return res;
}

// deep flatten
function flatDeep(array, deep) {
    let res = [];
    for (let i = 0; i < array.length; ++i) {
        Array.isArray(array[i]) && deep >= 1 ? res = res.concat(flatDeep(array[i], deep - 1)) : res.push(array[i])
    }
    return res;
}

// flatten js
// const flatten = arr => arr.reduce((acc, cur) => (Array.isArray(cur) ? [...acc, ...flatten(cur)] : [...acc, cur]), [])

const flatten = arr => arr.reduce((acc, cur) => (Array.isArray(cur) ? acc.concat(flatten(cur)) : acc.concat(cur)), [])


console.log(flat(arrays))
console.log(flatDeep(intialArr, 4))
console.log(flatten(intialArr))