let count = 0;
const fibonacci = function (n) {
    count++
    return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}