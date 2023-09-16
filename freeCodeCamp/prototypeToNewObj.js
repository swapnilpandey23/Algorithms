/*
Change the Prototype to a New Object
Up until now you have been adding properties to the prototype individually:
*/

// Constructor function
function Dog(name) {
    this.name = name;
  }
  
  // Adding prototype properties to Dog as object
  Dog.prototype = {
    numLegs : 4,
    eat : function(){
      console.log('nom nom nom');
    },
    describe : function(){
      console.log("My name is :" + " " + this.name)
    }
  };

  let woof = new Dog('woof');   // Object creation of Dog.
  console.log(woof.name);
  woof.describe();
  woof.eat();