// Add the own properties of canary to the array ownProps.

//A constructor function - blueprint of creating new objects.
function Bird(name){
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird('Twitter'); //Object creation - canary is an object of Bird.

let ownProperties = []; //To store properties of an object.

//It'll iterate through all the properties of canary and if found true, it'll push them in array.
for(let properties in canary){
    if(canary.hasOwnProperty(properties)){
        ownProperties.push(properties);
    }
}

console.log(ownProperties);
