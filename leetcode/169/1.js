var majortyElement = function (nums) {
    // o(n) 时间复杂度   O（1)空间复杂度   投票算法  支持/反对
    let count = 0;
    let candidate = 0;
    for (let i = 0; i < nums.length; i++) {
        if (count === 0) {
            candidate = nums[i];
        }
        if (nums[i] === candidate) {
            count++;
        }
        else {
            count--;
        }
    }
    return candidate; // 众数

}