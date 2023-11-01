var nums = [1, 1, 2]
// 输出；2 ，nums=[1，2，-]
var removeDuplicates = function (nums) {
    // var res = [];
    // for (i = 0; i < nums.length; i++) {
    //     if (!res.includes(nums[i])) {
    //         res.push(nums[i])
    //     }
    // }
    // return res
    for (i = 0; i < nums.length; i++) {

        if (nums[i] == nums[i + 1]) {
            nums.splice(i + 1, 1)
            i--

        }
    }
};
console.log(removeDuplicates(nums));
