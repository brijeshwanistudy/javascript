//=================================================================================================================================
// null data type
// The value null represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.
//=================================================================================================================================

var nullVariable = null;

console.log('\n\n### Null: ');
console.log('nullVariable: ', nullVariable); //null
console.log('typeof null: ' + typeof null); //Object
console.log('null === null: ', null === null); //true
console.log('null == null: ', null == null); //true
console.log('1 + null: ', 1 + null); //1

//=================================================================================================================================
// undefined data type
// The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.
//=================================================================================================================================

var undefinedVariable;

console.log('\n\n### Undefined: ');
console.log('undefinedVariable: ', undefinedVariable); //undefined
console.log('typeof undefined: ' + typeof undefined); //undefined
console.log('undefined === undefined: ', undefined === undefined); //true
console.log('undefined == undefined: ', undefined == undefined); //true
console.log('undefinedVariable === undefined: ', undefinedVariable === undefined); //true
console.log('undefinedVariable == undefined: ', undefinedVariable == undefined); //true

//=================================================================================================================================
// Compare null & undefined
//=================================================================================================================================
console.log('\n\n### Null & Undefined comparison: ');
console.log('null === undefined: ', null === undefined); //false
console.log('typeof null == typeof undefined: ', typeof null == typeof undefined); //false
console.log('null == undefined: ', null == undefined); //true