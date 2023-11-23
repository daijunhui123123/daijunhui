function add(x, y) {
    if (typeof x === 'number' && typeof (y) === 'number') {
        return x + y
    }
}
add('hello', 2)
console.log(typeof 'hello');//string
console.log(typeof 123);  //number
console.log(typeof true);//布尔
console.log(typeof undefined);//underfined
console.log(typeof Symbol(1));  //symbol
console.log(typeof 123n);//bigint
console.log(typeof null); // object
console.log(typeof ({}));  // object
console.log(typeof ([]));  // object
console.log(typeof (new Date())); // object
console.log(typeof (function () { }))  // function