// objects are basically a collection of multiple values
// we can have values and variables that are primitive values like numbers or strings or booleans
// or it can have something like objects, which bundles multiple values
// like arrays, functions or objects.

// There is not blueprints that objects in javascript need to follow.
// can create any property or method we want to

// ------------------ Creating Object ----------------

var person = {}; // an empty object

// ---- can add properties to object like ----
person.name = "Vaibhav";

// also no data type restriction, can change string to number
person.name = 1;

// ---- can access properties of object like ----
console.log(person.name);

// ------------------- Creating object with properties upfront ------------------

var person2 = {
  name: "Vaibhav Kadwey",
  age: "24",
  position: "Developer",
  addres: {
    city: "Indore",
    state: "M.P.",
  },
};

console.log(person2["age"]); // Accessing data using square bracket notation

// ------------------------------------------------------------------------------------------------------

var emp1 = {};

emp1.firstName = "Michael";
emp1.lastName = "Jordon";
emp1.gender = "M";
emp1.designation = "R Manager";

console.log(emp1);

// to create another employee we need to write all this again

var emp2 = {};
emp2.firstName = "John";
emp2.lastName = "Wick";
emp2.gender = "M";
emp2.designation = "Assistant to R Manager";

console.log(emp2);

// when we have to create many objects with similar properties, it becomes very tedious to write
// repeatative code. To solve this problem we use functions

function createEmployeeObject(firstName, lastName, gender, designation) {
  var newObj = {};
  newObj.firstName = firstName;
  newObj.lastName = lastName;
  newObj.gender = gender;
  newObj.designation = designation;

  return newObj;
}

var emp3 = createEmployeeObject("Steve", "Smith", "M", "Manager");

console.log(emp3);

// --------------------------- Constructor Functions ----------------------

// Constructor functions is used to create object

function CreateEmployee(firstName, lastName, gender, designation) {
  //   var this = {};
  this.firstName = firstName;
  this.lastName = lastName;
  this.gender = gender;
  this.designation = designation;
  //   return this;
}

// Class to create an object

// class CreateEmployee {
//     constructor(firstName, lastName, gender, designation) {
//         //   var this = {};
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.gender = gender;
//         this.designation = designation;
//         //   return this;
//     }
// }

var emp4 = new CreateEmployee("Ricky", "Ponking", "M", "Senior Manager");
// to tell Javascript that we are calling a constructor function is to add "new" keyword
console.log(emp4);

// 1. if we call a normal function with "new" keyword, the function will work normally.
// 1. normal function uses camelCase for naming functions.

// 2. if we call a constructor function without "new" keyword than the function will return undefined.
// 2. constructor function uses CapitalCase for naimg convention.

// "new" keyowrod helps to return the "this" object from the constructor function.

function getData() {
  console.log(this);
  // In a function defined in global scope the "this" keyword points to the global object
}

function GetData() {
  console.log(this);
  // In constructor function the "this" keyword points to the new empty object created
}

new GetData();

// calling a method on object : than "this" keyword refers to that object

// obj.getMethod() // Here "this" refers to obj.

// -----------------------------------

function Bicycle(cadence, speed, gear, tirePressure) {
  this.cadence = cadence;
  this.speed = speed;
  this.gear = gear;
  this.tirePressure = tirePressure;

  this.inflateTires = function () {
    this.tirePressure += 3;
  };
}

const cycle1 = new Bicycle(50, 20, 4, 25);
cycle1.inflateTires();

console.log(cycle1);

const cycle2 = new Bicycle(30, 10, 2, 5);
cycle2.inflateTires();

console.log(cycle2);

function Mechanic(name) {
  this.name = name;
}

var mike = new Mechanic("Mike");
// now we want to give access to mike to inflate tire of any bike.
// the inflateTire method is inside bicycle objects.
// to share this method we can give a function instance to mike

mike.inflateTires = Bicycle.inflateTires;
mike.inflateTires?.call(cycle1);

// --------------------- Prototypes in javascript -------------------

// prototype is a concept in javascript which lets you build objects using a template or blueprint.

// Whenever a function is created in javascript a function object is created.
// along with function object a prototype object is also created.

// When we create an object using this function, the object gets a property __proto__
// that points to this prototype object.

// To access this function from prototype we uses
// ---------------- NOT RECOMMENDED -----------------
// var a = new Foo()
// var proto = a.__proto__
// proto.constructor // this returns us the function

function Foo(name) {
  this.name = name;
}

Foo.prototype.getName = function () {
  return this.name;
};

const name1 = new Foo("Vaibhav");

console.log(name1);

const a = name1.getName();
console.log(a);

// A global function named Object is avialable in JS.

// -------------Inheritance ---------------

function Employee(name) {
  this.name = name;
}

Employee.prototype.getName = function () {
  return this.name;
};

var emp1 = new Employee("Vaibhav");

emp1.getName();

function Manager(name, dept) {
  this.name = name;
  this.dept = dept;
}

Manager.prototype.getDept = function () {
  return this.dept;
};

var mgr = new Manager("Vinni", "IT");

mgr.getDept();

mgr.__proto__.__proto__ = Employee.prototype;

mgr.getName();
