// var a =1 ;
// function foo (a){
//     var a=2;
//     function a() {

//     }
//     var b =a;
//     console.log(a);
// }
// foo(3);
function fn(a) {
    console.log(a); // function a() {}  123 
    var a = 123
    console.log(a); // 123
    function a() { }
    console.log(a);  // 123
    var b = function () { }//函数表达式  
    console.log(b);  // function() {}
    function d() { }
    var d = a
    console.log(d);  // 123
}
//   AO ={
//         a:undefined   1   function a() {}  123 ,
//         b:undefined   b = function() {} ,
//         d:undefined     function d() {},
//   }

fn(1)