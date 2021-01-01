'use strict;'
const obj1 = {
    a: 1,
    b: 2
};

const obj2 = {
    c: 3
}

// ---> Object.assign()
Object.assign(obj2, obj1);
console.log(obj2); // { c: 3, a: 1, b: 2 }

obj1.b = 34;
Object.assign(obj2, obj1);
console.log(obj2); // { c: 3, a: 1, b: 34 }

// ---> Object.defineProperty
Object.defineProperty(obj1, 'd', {
    value: 50,
    writable: false,
    enumerable: true
});
console.log(obj1); // 50

// ---> Object.entries
for (const [key, value] of Object.entries(obj1)) {
    console.log(`${key}: ${value}`);
}
// a: 1
// b: 34
// d: 50

// ---> Object.freeze
const obj = {
    prop: 42
};
Object.freeze(obj);
Object.isFrozen(obj); //true
obj.prop = 33;
// Throws an error in strict mode
console.log(obj.prop)

// ---> Object.seal
// Here we can change existing properties
// Object.isSealed(obj);

// ---> Object.getOwnPropertyDescriptor
const object1 = {
    property1: 42,
    property2: 20
};
const descriptor1 = Object.getOwnPropertyDescriptor(object1, 'property1');
console.log(descriptor1); // { value: 42, writable: true, enumerable: true, configurable: true }
console.log(descriptor1.configurable); // expected output: true
console.log(descriptor1.value); // expected output: 42
const allDescriptors = Object.getOwnPropertyDescriptors(object1);
console.log(allDescriptors);
// {
//   property1: { value: 42, writable: true, enumerable: true, configurable: true },
//   property2: { value: 20, writable: true, enumerable: true, configurable: true }
// }

// ---> Object.getOwnPropertySymbols
const symObj = {};
const a = Symbol('a');
const b = Symbol.for('b');
symObj[a] = 'localSymbol';
symObj[b] = 'globalSymbol';
const objectSymbols = Object.getOwnPropertySymbols(symObj);
console.log(objectSymbols); //[ Symbol(a), Symbol(b) ]
console.log(objectSymbols[0]);

// ---> Object.is
const comp1 = {
    a: 2
}

let comp2 = {
    a: 2
}
console.log(Object.is(comp1, comp2)); //false
comp2 = comp1;
console.log(Object.is(comp1, comp2)); //true

// ---> Object.isExtensible & Object.isExtensible
const extObj = {};
console.log(Object.isExtensible(extObj)); // expected output: true
Object.preventExtensions(extObj);
console.log(Object.isExtensible(extObj)); // expected output: false

// ---> Object.keys & Object.values
const keyValObj = {
    key1: 'val1',
    key2: 'val2'
}
console.log(Object.values(keyValObj)); //[ 'val1', 'val2' ]
console.log(Object.keys(keyValObj)); //[ 'key1', 'key2' ]