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

// Arrays: Filling array:
const arr1 = [];
arr1.length = 8;
for (let i = 0; i < arr1.length; i++) {
  arr1[i] = i + 1;
}
console.log(arr1);

const arr2 = [];
arr2.length = 5;
arr2.fill(3); // fill the array only with 3
console.log(arr2);

let arr2D = [];
arr2D.length = 4;
let arr2D2 = [];
arr2D2.length = 4;

let a = new Array(4);
for (let i = 0; i < 4; i++) {
  arr2D[i] = new Array(4);
  for (let j = 0; j < 4; j++) {
    arr2D[i][j] = "[" + i + ", " + j + "]";
  }
}

console.log(arr2D);
