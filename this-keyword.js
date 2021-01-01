// IN BROWSERS ONLY, the window object is also the global object:
// console.log(this === window); // true

// a = 37;
// console.log(window.a); // 37

// this.b = "MDN";
// console.log(window.b) // "MDN"
// console.log(b) // "MDN"

function f1() {
    return this;
}

// In a browser:
//f1() === window; // true

// In Node:
console.log(f1() === globalThis); // true

// In strict mode, however, if the value of this is not set when entering an execution context, 
// it remains as undefined, as shown in the following example:
function f2() {
    'use strict'; // see strict mode
    return this;
}
console.log(f2() === undefined); // true

//To set the value of this to a particular value when calling a function, use call(), or apply() as in the examples below.
// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {
    a: 'Custom'
};

// We declare a variable and the variable is assigned to the global window as its property.
var a = 'Global';

function whatsThis() {
    return this.a; // The value of this is dependent on how the function is called
}

whatsThis(); // 'Global' as this in the function isn't set, so it defaults to the global/window object
whatsThis.call(obj); // 'Custom' as this in the function is set to obj
whatsThis.apply(obj); // 'Custom' as this in the function is set to obj

// ####### JUST ANOTHER EXAMPLE
function add(c, d) {
    return this.a + this.b + c + d;
}

var o = {
    a: 1,
    b: 3
};

// The first parameter is the object to use as
// 'this', subsequent parameters are passed as 
// arguments in the function call
add.call(o, 5, 7); // 16

// The first parameter is the object to use as
// 'this', the second is an array whose
// members are used as the arguments in the function call
add.apply(o, [10, 20]); // 34