function add(a, b) {
    if (arguments.length != 2) {
        throw new Error('必须传递两个参数')
    }
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('必须传递两个正树')
    }
    return a + b;


}
//记忆函数  百搭的
function memorize(f) {
    if (typeof f !== 'function') return
    var cache = {}
    return function () {
        var key = arguments.length +
            Array.prototype.join.call(arguments, ",")
        if (key in cache) {
            return cache[key]
        } else {
            var res = f.apply(this, arguments)
            cache[key] = res
            return res
        }
    }

}
const memorizdAdd = memorize(add)
