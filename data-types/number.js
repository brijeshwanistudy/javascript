123 // one-hundred twenty-three
123.0 // same
123 === 123.0 // true

Number('123') // returns the number 123
Number('123') === 123 // true

Number("unicorn") // NaN
Number(undefined) // NaN

console.log(Number.EPSILON); //2.220446049250313e-16
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.NaN); //NaN
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.prototype); //[Number: 0]

// Number.isNaN()
// Number.isFinite()
// Number.isInteger()
// Number.isSafeInteger()
// Number.parseFloat(string)
// Number.parseInt(string, [radix])

console.log(Number.parseFloat(125).toExponential(3)); // 1.250e+2
console.log(Number.parseFloat(125.123).toFixed(2)); //125.12
console.log(Number(125).toLocaleString("ar-EG")); //"١٢٥"