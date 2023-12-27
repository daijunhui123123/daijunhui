var threeSum = function (nums) {
    let result = [];
    nums.sort((a, b) => a - b);// 方便去重
    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] > 0) break;
        if (i > 0 && nums[i] === nums[i - 1]) continue;// 跳出重复元素
        let L = i + 1, R = nums.length - 1;
        while (L < R) {
            let sum = nums[i] + nums[L] + nums[R];
            if (sum === 0) {
                result.push([nums[i], nums[L], nums[R]]);
                while (L < R && nums[L] === nums[L + 1]) L++;
                //性能优化
                while (L < R && nums[R] === nums[R - 1]) R--;
                L++;
                R--;
            } else if (sum < 0) {
                L++;
            } else if (sum > 0) {
                R--;
            }
        }
    }
    return result;
};

// 测试



// Test case 1:
console.log("#Test case 1:");
console.assert(JSON.stringify(threeSum([-1, 0, 1, 2, -1, -4])) === JSON.stringify([[-1, 0, 1], [-1, -1, 2]]), "Test case 1 failed");