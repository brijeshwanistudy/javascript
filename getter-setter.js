// When defining getters and setters using object initializers all you need to do is to prefix a getter method 
// with get and a setter method with set.

var o = {
    a: 7,
    get b() {
        return this.a + 1;
    },
    set c(x) {
        this.a = x / 2;
    }
};
console.log("Objet o: ", o); //{ a: 7, b: [Getter], c: [Setter] }
console.log("o.a: ", o.a); // 7
console.log("o.b: ", o.b); // 8 <-- At this point the get b() method is initiated.
o.c = 50 //   <-- At this point the set c(x) method is initiated
console.log(o.a); // 25

//Getters and setters can also be added to an object at any time after creation using the Object.defineProperties method.
var o = {
    a: 0
};

Object.defineProperties(o, {
    'b': {
        get: function () {
            return this.a + 1;
        }
    },
    'c': {
        set: function (x) {
            this.a = x / 2;
        }
    }
});

o.c = 10; // Runs the setter, which assigns value 5 to the 'a' property
console.log(o.b); // 6
console.log(" 'b' in o: ", 'b' in o); // true

// Deleting object properties
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log('a' in myobj); // false