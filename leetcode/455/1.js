// 暴力破解  逻辑  O（N^2）
// o(Nlogn)   快排  归并排序     排序+ 双指针
// 策列选择    双指针



const findContentChild = function (g, s) {
    g = g.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let gi = 0, si = 0, res = 0;
    while (gi < g.length && si < s.length) {
        if (g[gi] <= s[si]) {
            res++;
            gi++;
            si++;
        } else {
            sj++;
        }
    }
    return res;
}