function* countAppleSales() {
    let saleList = [3, 7, 5]
    for (let i = 0; i < saleList.length; i++) {
        yield saleList[i]
    }
}

let appleStore = countAppleSales() // Generator { }
console.log(appleStore.next()) // { value: 3, done: false }
console.log(appleStore.next()) // { value: 7, done: false }
console.log(appleStore.next()) // { value: 5, done: false }
console.log(appleStore.next()) // { value: undefined, done: true }

//console.log(appleStore.next(generatorFunctionArg)) // { value: undefined, done: true }

// ---> yield*
function* func1() {
    yield 42;
}

function* func2() {
    yield* func1();
}

const iterator = func2();

console.log(iterator.next().value);
// expected output: 42