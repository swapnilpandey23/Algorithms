// This program shows inheritance in JavaScript, refer to comments, I've tried to comment out operations as simple as I could. 


function Animal() { }

// Prototype of a constructor function. 
Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() {}
function Bird() {}

// Only change code below this line

// *** Using Object.create instead of new keyword (for sake of inheritance due to some extended functionality) to instantiate.
// *** Object.create(obj) creates a new object and sets obj as new object's prototype.
// *** By doing this we are giving Dog.prototype instance(to be Subtype after the command of Animal Supertype) to use the features of Animal (Supertype, for better understanding think of it as parent.) 
Dog.prototype = Object.create(Animal.prototype);
Bird.prototype = Object.create(Animal.prototype);

// Creating instance of the Subtypes(Child).
let duck = new Bird();
let labrador = new Dog();

// Using Supertype method with Subtype's instances.
labrador.eat();
duck.eat();