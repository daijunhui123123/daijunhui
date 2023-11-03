// 递归 
// 自顶而上
//每个条件
function climStairs(n) {
    if (n == 1) return 1;
    if (n == 2) return 2;
    return climStairs(n - 1) + climStairs(n - 2)
}