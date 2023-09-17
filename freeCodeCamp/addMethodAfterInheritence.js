//Kindly refer to inheritFromSupertype for all the comments on inheritance.

function Animal() { }

Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// After inheritance, adding an independent method of Subtype or Child Class.
Dog.prototype.bark = function(){
  console.log("Woof!");
}



// Only change code above this line

let beagle = new Dog();
console.log(beagle.constructor);
beagle.eat();
beagle.bark();