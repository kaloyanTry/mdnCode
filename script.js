"strict mode";

// 1. Object literals:
// // Object literals in JS: Literals represet values in JS
// let sales = "Toyota";

// function carTypes(name) {
//   if (name === "Honda") {
//     return name;
//   } else {
//     return `Sorry, we don't sell ${name}.`;
//   }
// }

// let car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

// console.log(car.myCar);
// console.log(car.getCar);
// console.log(car.special);

// // Use numeric or string literal for the name of a property or nest an boject inside another:
// let carObj = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };
// console.log(car.manyCars.b);
// console.log(car[7]);
//////////////////////////////

// // 2. Closures: functions in a function:
// let createPet = function (name, sex) {
//   return {
//     setName: function (newName) {
//       name = newName;
//     },

//     getName: function () {
//       return name;
//     },

//     getSex: function () {
//       return sex;
//     },

//     setSex: function (newSex) {
//       if (
//         typeof newSex === "string" &&
//         (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
//       ) {
//         sex = newSex;
//       }
//     },
//   };
// };

// let pet = createPet("Vivie", "female");
// console.log(pet.getName() + " " + pet.getSex()); //Output: Vivie female

// pet.setName("Oliver");
// pet.setSex("male");

// console.log(pet.getSex()); // male
// console.log(pet.getName()); // Oliver

// Function's default value parameter and rest parameters:
// let defParams = function (a, b = 1) {
//   return a * b;
// };
// console.log(defParams(4, 7));

// let restParams = function (a, ...params) {
//   return params.map((param) => a * param);
// };
// console.log(restParams(2, 1, 2, 3)); //Output: [2*1, 2*2, 2*3]=[2,4,6]
// console.log(restParams(3, 6, 7, 8, 9));

///////////////////////////////////////////////////////////////////////////// Numbers and dates /Digital Clock:
// function JSClock() {
//   let time = new Date();
//   let hour = time.getHours();
//   let minute = time.getMinutes();
//   let second = time.getSeconds();
//   let tempTime = "" + (hour > 24 ? hour - 24 : hour);
//   tempTime += (minute < 10 ? ":0" : ":") + minute;
//   tempTime += (second < 10 ? ":0" : ":") + second;
//   return tempTime;
// }
// console.log(`The time is exactly ${JSClock()} at the moment.`);

// Changing time:
// const clock = () => {
//   let time = new Date();
//   let hour = time.getHours();
//   let minute = time.getMinutes();
//   let second = time.getSeconds();
//   let tempTime = "" + (hour > 24 ? hour - 24 : hour);
//   tempTime += (minute < 10 ? ":0" : ":") + minute;
//   tempTime += (second < 10 ? ":0" : ":") + second;
//   console.log(tempTime);
//
//   //adding a second time interval
//   setTimeout(clock, 1000);
// };
// clock();
/////////////////////////////////////////
// Regular expression:
// const re = /ab + c/; // or using RegEx object:
// const reObj = new RegExp("ab + c");

// // Arrays: Filling array:
// const arr1 = [];
// arr1.length = 8;
// for (let i = 0; i < arr1.length; i++) {
//   arr1[i] = i + 1;
// }
// console.log(arr1);

// const arr2 = [];
// arr2.length = 5;
// arr2.fill(3); // fill the array only with 3
// console.log(arr2);

// // 2D array:
// let arr2D = [];
// arr2D.length = 4;

// for (let i = 0; i < arr2D.length; i++) {
//   let arr2D2 = [4];
//   //arr2D2.length = 4;
//   arr2D[i] = arr2D2;

//   for (let j = 0; j < arr2D.length; j++) {
//     arr2D[i][j] = "[" + i + ", " + j + "]";
//   }
// }
// console.log(arr2D);

///////////////////////////////
// // Map = key value pair:
// const mapJS = new Map();
// mapJS.set("dog", "woof");
// mapJS.set("cat", "Meow");
// mapJS.set("elephant", "toot");
// // map operations:
// console.log(mapJS.get("dog"));
// mapJS.delete("elephant");
// console.log(mapJS.has("elephant"));
// console.log(mapJS.size);
// console.log(mapJS);

// for (let [key, value] of mapJS) console.log(`${key} goes ${value}`);

//////////////////////////////////////////////
// // Set:
// const setJS = new Set();
// setJS.add(1);
// setJS.add(2022);
// setJS.add("new add");
// setJS.add("foo");

// console.log(setJS.has("foo"));
// setJS.delete("foo");
// console.log(setJS);

// for (let item of setJS) console.log(item);

////////////////////////////////
// Objects:

const car = {
  make: "Opel",
  model: "Kadet",
  year: 1989,
};
console.log(car);
