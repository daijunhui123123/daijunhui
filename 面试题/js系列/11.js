function Person(name, age) {
    this.name = name;
    this.age = age;
}


let Person1 = myNew(Person, '张三', 30)

function myNew(...args) {
    let obj = {};
    // 获取构造函数
    obj.__proto__ = args[0].prototype;
    // 改变构造函数this指向
    const res = args[0].apply(obj, args.slice(1));// 构造函数的结果  

    return (typeof res === 'object' && res != null) ? res : obj;

}