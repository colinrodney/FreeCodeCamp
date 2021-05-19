/* 

In ES5 We usually define a CONSTRUCTOR FUNCTION
and use the 'new' keyword to create an instance of an object.
*/

let spaceShuttle = function (planet) {
  return (this.planet = planet); // the 'this' keyword represents the object which is calling the function (spaceShuttle)
};

//create new spaceShuttle OBJECTS named 'challenger1' and 'challenger2'
let challenger1 = new spaceShuttle("earth");
let challenger2 = new spaceShuttle("mars");

let challenger1planet = challenger1.planet;
let challenger2planet = challenger2.planet;

console.log(`challenger1 is going to planet: ${challenger1planet}`);
console.log(`challenger2 is going to planet: ${challenger2planet}`);

/* 
ES6: Using class syntax, which
replaces the constructor function
 
class Shuttle {
  constructor(planet) {
    this.planet = planet;
  }
}

// ShuttleA, ShuttleB is a new object of class Shuttle
const shuttleA = new Shuttle("alpha");
const shuttleB = new Shuttle("bravo");

let shuttleAplanet = shuttleA.planet;
let shuttleBplanet = shuttleB.planet;

console.log(shuttleAplanet); // alpha
console.log(shuttleBplanet); // bravo
*/
