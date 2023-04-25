//------------ forEach method --------------

// array forEach method executes a given function on every elements of an array.

const numbers = [1, 2, 3, 4, 5, 6];

// adding all array elements
let sum = 0;

numbers.forEach((item, index, arr) => {
  sum += item;
});

console.log("----- forEach method -----", sum);
console.log("----- forEach method -----", numbers);

// finding the repeated elements in the array
const letters = ["a", "b", "c", "a", "a", "c", "d", "b"];

let count = {};

letters.forEach((item, index, arr) => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});

console.log("----- forEach method -----", count);

// --------------------------------------------------------------

//------------- map method --------------
// array map method executes a given function on every elements of an array and returns a new array

// returns an array multiplied by two
const multiplyByTwo = numbers.map((item, index, arr) => {
  return item * 2;
});

console.log("----- map method -----", numbers);
console.log("----- map method -----", multiplyByTwo);

const productData = [
  {
    name: "laptop",
    price: 50000,
    count: 5,
  },
  {
    name: "phone",
    price: 15000,
    count: 15,
  },
  {
    name: "desktop",
    price: 50000,
    count: 6,
  },
];

// returns an array with object containing new calculated data about products

const totalProductValue = productData.map((item, index, arr) => {
  return {
    name: item.name,
    totalValue: item.price * item.count,
  };
});

console.log("----- map method -----", totalProductValue);

// convert an array of string numbers to array of numbers

const stringNumbers = ["1", "2", "3", "4", "5"];

const numberArray = stringNumbers.map(Number);
// const numberArray = stringNumbers.map((item) => Number(item));

console.log("----- map method -----", numberArray);

// --------------------------------------------------------------

//------------- filter method --------------
// array filter method creates a new array by removing all the elements for which the callback function returns false.

// if an item of an array turns true for a callback function then we keep it otherwise we remove it.

// array with only even numbers in array
const evenArray = numbers.filter((item, index, arr) => {
  return item % 2 === 0;
});

console.log("----- filter method ------", evenArray);

// remove  people that are under age 18

const people = [
  {
    name: "john",
    age: 20,
  },
  {
    name: "wick",
    age: 26,
  },
  {
    name: "tom",
    age: 16,
  },
];

const adults = people.filter((item) => item.age > 18);
console.log("----- filter method ------", adults);

// remove all duplicates from an array

const duplicateNumbers = [1, 2, 1, 3, 4, 10, 1, 2, 4, 1, 5, 4, 6, 1, 7, 8];

const nums = duplicateNumbers.filter((item, index, arr) => {
  return arr.indexOf(item) === index;
});

console.log("----- filter method ------", nums);

// --------------------------------------------------------------

//------------- reduce method --------------
// array reduce method executes a callback function on every element of an array and returns a single value.

// accumulator keeps the track of the value that is returned at the end;

// initial is optional if we didn't define it than the first value of array will be taken and first iteration will be skiped
let initialValue = 0;

const total = numbers.reduce((accumulator, item, index, arr) => {
  return accumulator + item;
}, initialValue);

console.log("----- reduce method ------", total);

// Get max from array

const max = numbers.reduce((accumulator, item, index, arr) => {
  if (accumulator > item) {
    return accumulator;
  } else {
    return item;
  }
}, -Infinity);

console.log("----- reduce method ------", max);

// ------------- using reduce on array of objects --------------

const totalValueOfProducts = productData.reduce((acc, item, index) => {
  return acc + item.price * item.count;
}, 0);

console.log("----- reduce method ------", totalValueOfProducts);

// --------------------------------------------------------------

//------------- slice method --------------
// array slice method returns a shallow copy of a portion of an array, meaning it will not modify the original array
// on which it is called upon

// by default starting start-index is 0 and end-index is length of array.
// --------- last index is not included ---------

// if we does only slice() without any start and end index we gets a shallow copy of an array

const numbers2 = numbers.slice(1, 4);

console.log("----- slice method ------", numbers);
console.log("----- slice method ------", numbers2);

// to get last 3 elements of the array

const lastThree = numbers.slice(-3);
console.log("----- slice method ------", lastThree);

// to get all the items from a defined index

const fromIndex = numbers.slice(2);
console.log("----- slice method ------", fromIndex);

// only want to show first three
const participants = ["John", "Wick", "Wanda", "Vission", "Tony"];

const winners = participants.slice(0, 3);
console.log("----- slice method ------", winners);

// --------------------------------------------------------------

//------------- splice method --------------
// array splice method changes an array by removing or replacing existing elements from an array
// splice method returns an array of deleted or removed elements from the array

// first argumnet is the index
// second argumnet is how many element starting from first argument is to be deleted

const newNumbers = [1, 2, 3, 4, 5, 16, 17];

const deletedNumber = newNumbers.splice(2, 3);

console.log("----- splice method ------", newNumbers);
console.log("----- splice method ------", deletedNumber);

// Adding element

const addedNumber = newNumbers.splice(2, 2, 6, 7, 8, 9);
// 6,7,8,9 are the elements that will be added to array after deleting

// const addedNumber = newNumbers.splice(2, 0, 6, 7, 8, 9); if second argument is 0, the new elements will be added after the index
// defined at first argument

console.log("----- splice method ------", newNumbers);

// --------------------------------------------------------------

//------------- sort method --------------
// array sort method sorts the elements of array by default in ascending order. It will convert the elements into string first.

const names = ["John", "Wick", "Wanda", "Vission", "Tony"];

names.sort();
console.log("----- sort method ------", names);

const numbers3 = [45, 23, 60, 86, 90, 1, 5, 543];

numbers3.sort(compareFunction);
console.log("----- sort method ------", numbers3);

function compareFunction(a, b) {
  // return < 0, a comes first
  // return = 0, nothing happens
  // return > 0, b comes firsts
  return a - b; // for ascending order
  //return b - a; // for desending order
}

// sorting object by price of products

productData.sort((a, b) => {
  return a.price - b.price;
});

console.log("----- sort method ------", productData);

// --------------------------------------------------------------

//------------- concat method --------------
// concat array method allows to merge two or more arrays into one new array

// concat does not changes the original arrays

const a = [1, 2, 3];
const b = [4, 5, 6];

const d = [7, 8, 9];

// const c = a.concat(b);
// const c = a.concat(); creates a shallow copy of array a;

// can also use to push elements inside array
// const c = a.concat(1,2)
const c = a.concat(b, d);
console.log(c);

// --------------------------------------------------------------

//------------- fill method --------------

// The array fill method changes all the elements inside an array with the provided value
// changes the array on which the fill method is called upon.
// It returns the array modified

// fill(element, start-index, end-index(not included))

const numbers4 = [1, 2, 3, 4, 5, 6];

// numbers4.fill(0);

numbers4.fill(0, 1, 4);
console.log("------- fill method ------", numbers4);

function fillInArray(n) {
  return Array(n)
    .fill(0)
    .map((_, index) => index + 1);
}

console.log("------- fill method ------", fillInArray(10));

// --------------------------------------------------------------

//------------- includes method --------------

// Using array includes method one can find if an element is included inside the array or not

const result = names.includes("vaibhav");
console.log("------- includes method ------", result);

// --------------------------------------------------------------

//------------- join method --------------

// array join method creates a new string by concatenating all the elements from that array
// by default it uses comma(,) as a separater

const countries = ["India", "China", "USA", "UK"];

// const res = countries.join();
// const res = countries.join(" ");
const res = countries.join(" - ");
console.log("------- join method ------", res);

// --------------------------------------------------------------

//------------- reverse method --------------

// we can reverse the array
// reverse method changes the original array
// const reversedNumbers = numbers.reverse();

// if we don't ant to change the original array, we first create a shallow copy
const reversedNumbers = numbers.concat().reverse();

// instead of concat we can also use spread operator
// const reversedNumbers = [...numbers].reverse();

console.log("------- reverse method ------", reversedNumbers);

// if we want to reverse the characters inside the string

const str = "Coding is fun";
const res2 = str.split("").reverse().join("");

console.log("------- reverse method ------", res2);

// --------------------------------------------------------------

//------------- push method --------------

// array push method allows us to add one or more elements at the end of the array and it also returns the length of the new array.

// numbers.push(4);

numbers.push(4, 10, 13);
console.log("------ push method ------", numbers);

const total2 = numbers.push(7, 8, 9, 10);
console.log("------ push method ------", total2);

// --------------------------------------------------------------

//------------- pop method -----------------

// array pop method will remove the last item from the array and it will return it.

const lastItem = numbers.pop();
console.log("------ pop method ------", numbers);
console.log("------ pop method ------", lastItem);

// --------------------------------------------------------------

//------------- unshift method --------------

// array unshift method allows us to add one or more elements at the beginning of the array and it also returns the length of the new array.
// opposite of push method

numbers.unshift(0);
numbers.unshift(-1);

const totalLength = numbers.unshift(-2, -3);

console.log("------ unshift method ------", totalLength);
console.log("------ unshift method ------", numbers);

// --------------------------------------------------------------

//------------- shift method -----------------

// array shift method will remove the first item from the array and it will return it.

const firstItem = numbers.shift();
console.log("------ shift method ------", numbers);
console.log("------ shift method ------", firstItem);

// --------------------------------------------------------------

//------------- indexOf method -----------------

// array indexOf method returns the index at which the given element can be found inside the array

const indexof = names.indexOf("Wick");
// and if we want to replace the element now

names[indexof] = "Vaibhav";

if (indexof > -1) {
  console.log("Yes we have Vaibhav");
} else {
  console.log("Nooooo");
}

// also have lastIndexOf for multiple elements. Starts from the end of the array
// names.lastIndexOf("John")

console.log("------ indexOf method ------", indexof);
console.log("------ indexOf method ------", names);

// --------------------------------------------------------------

//------------- every method -----------------
// the array every method executes a given function on every items of an array and returns true only if
// if the callback function returns the truthy value for all the items inside the array

const newNumbers2 = [1, 2, 3, 4, 5, -1];

function isPositive(item, index, arr) {
  return item > 0;
}

const result2 = newNumbers2.every(isPositive);
console.log("------ every method ------", result2);

// we can use this method to check on objects if all the objects inside an array has a certain propery or not

// --------------------------------------------------------------

//------------- some method -----------------
// the array some method executes a given function on every items of an array and returns true only if
// if the callback function returns the truthy value for atleast on a single items inside the array

const newNumbers3 = [1, 2, 3, 4, 5];

function greaterThanFour(item, index, arr) {
  return item > 4;
}

const result3 = newNumbers3.some(greaterThanFour);
console.log("------ some method ------", result3);

const persons = [
  {
    name: "Vaibhav",
    age: 24,
  },
  {
    name: "Satyam",
    age: 25,
  },
  {
    name: "Vinni",
    age: 25,
  },
  {
    name: "Ketan",
    age: 26,
  },
];

const isAdult = persons.some((item, index) => item.age > 18);

console.log("------ some method ------", isAdult);

// --------------------------------------------------------------

//------------- find method -----------------
// the array find method will search inside an array and it will return the first element for which the callback function
// returns a truthy value, if it dosen't find that it will return "undefined"

const names3 = ["Vaibhav", "Vinni", "Satyam", "Yash"];

// const found = names3.find(findVaibhav);

// function findVaibhav(item, index, arr) {
//   return item === "Vaibhav";
// }

const found = persons.find(findVaibhav);

function findVaibhav(item, index, arr) {
  return item.name === "Vaibhav";
}

console.log("------ find method ------", found);

// --------------------------------------------------------------

//------------- findIndex method -----------------
// the array findIndex method will search inside an array and it will return the index of first element
// for which the callback function returns a truthy value, if it dosen't find that it will return "undefined"

const resIndex = newNumbers3.findIndex(findThree);

function findThree(item) {
  return item === 3;
}

console.log("------ findIndex method ------", resIndex);

// --------------------------------------------------------------

//------------- from method -----------------
// the array from method creates a new shallow copied array from an array like iterable object

// want to convert a string of numbers to array of number

const str2 = "123456";

const res3 = Array.from(str2, mapFn);
// const res3 = Array.from(str2, Number);

function mapFn(item) {
  return Number(item);
}

console.log("------ from method ------", res3);

// if want to remove all duplicate from the array

const numbers5 = [1, 2, 3, 2, 3, 5, 1, 4, 3, 5, 6, 2, 7, 5];

const res4 = new Set(numbers5);
// first convert to set

const res5 = Array.from(res4);

console.log("------ from method ------", res5);

// --------------------------------------------------------------

//------------- isArray method -----------------
// the array isArray method checks if the passed value is an array or not

const res6 = Array.isArray(numbers);

const res7 = Array.isArray(str);

console.log("------ isArray method ------", res6);
console.log("------ isArray method ------", res7);

// --------------------------------------------------------------

//------------- flat method -----------------
// the array flat method creates a new array with all the sub array elements concatenated into it.

const arr = [1, [2, [3, 4, [5]]]];

const res8 = arr.flat(3);

console.log("------ flat method ------", res8);

// if we want falt to work for infinite number of arrays
const res9 = arr.flat(Infinity);
console.log("------ flat method ------", res9);
