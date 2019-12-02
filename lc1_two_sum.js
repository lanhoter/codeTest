/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = (nums, target) => {
    if (!Array.isArray(nums) || Object.prototype.toString.call(target) !== "[object Number]")
        return;
    let arr = [],
        i,
        j,
        len = nums.length;
    for (i = 0; i < len; ++i) {
        j = arr[target - nums[i]];
        if (j !== undefined) return [j, i];
        arr[nums[i]] = i;
    }
}

console.log(twoSum([3, 3], 6))