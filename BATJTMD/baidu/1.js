//es6   类
//类和对象有什么
// 类时抽象的    定制
//对象是具体的
class SingleDog {
    constructor() {

    }
    // static getInstance= null; 静态属性
    //属于类上的方法
    static getInstance() {
        // console.log('类的方法')
        //返回实例
        if (!SingleDog.instance) {
            SingleDog.instance = new SingleDog()
        }
        return SingleDog.instance
    }
    // 共有的方法  属于实例上的
    show() {
        console.log('单身贵族')
    }
}
// 设计模式      一个类只实例化一次   封装
//第一次new  不实力例化  直接返回实例
// new的角度   搞不定  & {}
// 总领导   弹窗
const s1 = SingleDog.getInstance();//  生成对象   拿到对象的引用  
const s2 = SingleDog.getInstance();
// //  如何  让他们相等  
// console.log(s1 == s2);//  False   内存中不一样
console.log(SingleDog.getInstance())