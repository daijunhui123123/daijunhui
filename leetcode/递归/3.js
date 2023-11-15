//  斐波那契 数列  
function fb(n) {
    if (n == 1 || n == 2) {
        return 1
    }
    return f(n) + f(n - 1)
}