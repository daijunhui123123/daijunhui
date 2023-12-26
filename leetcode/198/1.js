var rob = function (nums) {
    //没有状态转移方程不要动手
    const dp = [];// 最优子结构  o（n）   一位数组  缓存状态
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i - 2], dp[i - 1])
    }
    return dp[nums.length - 1]

    // if (nums.length == 0) return 0;
    // if (nums.length == 1) return nums[0];
    // var dp = [nums[0], Math.max(nums[0], nums[1])];
    // for (var i = 2; i < nums.length; i++) {
    //     dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    // }
    // return dp[nums.length - 1];
}

rob([1, 3, 4, 5, 4]); // 0