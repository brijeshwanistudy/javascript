//Using string mode will throw syntax error while running this file.
//'use strict';

// ---> with statement
var fun = function (x, o) {
    with(o) {
        console.log(x);
    }
}

const objWithoutPropertyX = {
    a: "No X property"
}
fun(1, objWithoutPropertyX); // 1

const objWithPropertyX = {
    x: "With X property"
}
fun(1, objWithPropertyX); // With X property

// ---> eval() function
console.log(eval('2 + 2')); //4

var x = 17;
var evalX = eval("'use strict'; var x = 42; x;");
console.assert(x === 17);
console.assert(evalX === 42);

// ---> arguments
var argFunction = function (a, b, c) {
    for (var i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
    console.log(arguments.callee); //[Function: argFunction]
    console.log(argFunction.caller); //[Function: callerFun]
}

var callerFun = function () {
    argFunction(1, 2, 3);
    // 1
    // 2
    // 3
    console.log(arguments.callee); //[Function: callerFun]
}

callerFun();