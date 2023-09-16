/* Add all of the own properties of beagle to the array ownProps.
 Add all of the prototype properties of Dog to the array prototypeProps. */

 // Constructor function
function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;    // Prototype property - to be appended in all the objects of Dog.
  
  let beagle = new Dog("Snoopy");   //Object Creation
  
  // Empty arrays to hold properties info.
  let ownProps = [];
  let prototypeProps = [];
  
  // Iterate through properties of object beagle.
  for(let property in beagle){
    if(beagle.hasOwnProperty(property)){    // To add beagle's own property in ownProps array, if returned true.
      ownProps.push(property);
    }else{
      prototypeProps.push(property);    // If else returned false, add other i.e. prototype properties to prototypeProps array.
    }
  }