//怎么办 ？ 递归带来的内存问题
// 递归的优点是什么？  简单   性能不好
//如果不往执行栈中push太多函数，是不是
// 入栈过的 函数是没有必要在入栈的，记忆法

//俩种方法
//             10
//           9        8
//       8    7     7   6
//    7  6  6   5   
const f = []; //全局作用域
const climbStairs = function (n) {
    //退出条件
    if (n == 1) return 1;
    if (n == 2) return 2;
    if (f[n] === undefined) {

        f[n] = climStairs(n - 1) + climStairs(n - 2);//递归公式


    }

    return f[n];
}
