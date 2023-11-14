//对象的创建   
var obj = {}//  对象自变量  

var obj2 = new Object();//  构造函数  


// 这俩个没有区别   

//自定义构造函数
function Car(color) {
    this.name = 'BMW';
    this.height = 1400;
    this.long = 4900;
    this.weight = 1000;
    this.color = color;
    //  new的原因
    //  var this={
    // this.height = 1400;
    // this.long = 4900;
    //this.weight = 1000;
    //this.color = color;


    //return  this

}
//  



let car = new Car('green');  //实例对象==this
let car1 = new Car('pink');
console.log(car)//   car={xxx}


// 构造函数实例化对象  他们相互独立