// Ways of creating objects in JS

// ---> Object initializers
let man1 = {
    fName: "John",
    lName: "Doe",
    getFullName: function () {
        return `${this.fName} ${this.lName}`;
    }
}
console.log("man1: ", man1); //{ fName: 'John', lName: 'Doe' }
console.log("man1.fName: ", man1.fName); //John
console.log("man1.getFullName: ", man1.getFullName()); //John Doe

let man2 = {
    fName: "John",
    lName: "Doe"
}
console.log("man2: ", man2); //{ fName: 'John', lName: 'Doe' }
console.log("man2.fName: ", man2.fName); //John

console.log("man1 == man2", man1 == man2); //false
console.log("man1 === man2", man1 === man2); //false


// ---> Using a constructor function & new keyword
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

var mycar = new Car('Eagle', 'Talon TSi', 1993);
console.log("mycar: ", mycar); //Car { make: 'Eagle', model: 'Talon TSi', year: 1993 }

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

var rand = new Person('Rand McKinnon', 33, 'M');

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
console.log("car1: ", car1);
// Output
// Car {
//     make: 'Eagle',
//     model: 'Talon TSi',
//     year: 1993,
//     owner: Person {
//         name: 'Rand McKinnon',
//         age: 33,
//         sex: 'M'
//     }
// }


// ---> Using the Object.create method

// Animal properties and method encapsulation
var Animal = {
    type: 'Invertebrates', // Default value of properties
    displayType: function () { // Method which will display type of Animal
        console.log(this.type);
    }
};

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType(); // Fishes