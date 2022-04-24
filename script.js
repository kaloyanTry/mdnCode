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

// const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

// console.log(car.myCar);
// console.log(car.getCar);
// console.log(car.special);

// // Use numeric or string literal for the name of a property or nest an boject inside another:
// const carObj = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };
// console.log(car.manyCars.b);
// console.log(car[7]);
//////////////////////////////

// 2. Closures: functions in a function:
const createPet = function (name, sex) {
  return {
    setName: function (newName) {
      name = newName;
    },

    getName: function () {
      return name;
    },

    getSex: function () {
      return sex;
    },

    setSex: function (newSex) {
      if (
        typeof newSex === "string" &&
        (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
      ) {
        sex = newSex;
      }
    },
  };
};

const pet = createPet("Vivie", "male");
console.log(pet.getName() + " " + pet.getSex()); // Vivie

pet.setName("Oliver");
pet.setSex("male");

console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver
