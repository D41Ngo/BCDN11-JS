const product_2 = {
  id: 1,

  name: "sam sung",
  price: 10,

  rom: "256G",
  ram: "8G",
};

const { id: id_2, rom: ROM, ram, ...other_2 } = product_2;
// console.log(id);  //1 ❌
// console.log(id_2); //2 -> 1
// console.log(rom); //3 ❌
// console.log(ROM); //4 -> "256G"
// console.log(ram); //5 -> "8G"
// console.log(RAM); //6 ❌
// console.log(other_2); //7 {  name: "sam sung", price: 10 }

// ---------------------------

const arr = ["name", "age", "price", "rom", "ram"];
const obj = {};

arr.forEach((item, index) => {
  obj[item] = index;
});

console.log(obj); // ???
/**
 *
 */

// -------------------------
// Closure: Khi tạo ra một function thì nó sẽ nhớ phạm vi nó được tạo ra có những biến và giá trị gì.

// Curry function
const increment = () => {
  let value = 0;
  let id = 1;

  return () => {
    const cpValue = value;
    value++;
    return cpValue;
  };
};

const manage = () => {
  let id = 0;

  const createTodo = (name) => {
    return {
      id: id++,
      name,
      status: "in-progress",
    };
  };

  return createTodo;
};

const createTodo = manage();

manage()("JS"); //??? {id: 0}
manage()("HTML"); //??? {id: 0}
manage()("CSS"); //??? {id: 0}

createTodo("js"); // 1. {id: 0}
createTodo("html"); // 2. {id: 1}
createTodo("css"); // 3. {id: 2}

console.log(manage() === manage()); // true ? false

// console.log(increment()); // ??? function

const inc = increment();

console.log(inc()); // 1.??? 0 0 undefined 0
console.log(inc()); // 2.??? 1 0 undefined 0
console.log(inc()); // 3.??? 2 0 undefined 0
console.log(inc()); // 3.??? 2 0 undefined 0
console.log(inc()); // 3.??? 2 0 undefined 0
console.log(inc()); // 3.??? 2 0 undefined 0
console.log(inc()); // 3.??? 2 0 undefined 0
console.log(inc()); // 3.??? 2 0 undefined 0

// IIFE
function IIFE(fn) {
  return fn();
}

const handle = () => {
  return 20;
};

let a = IIFE(handle); // 20

(() => {
  console.log("aaaa");
})();
const number = 5;

// const type = number % 2 === 0 ? "chan" : "le";

// let type;

// if (number % 2 === 0) {
//   type ="Chan";
// } else {
//   type ="Le";
// }

let type = IIFE(() => {
  if (number % 2 === 0) {
    return "Chan";
  } else {
    return "Le";
  }
});

console.log('🚀 >>>::::::::: arr :::::::::', );
// for of: duyệt mảng.
for (let item of arr) {
  console.log(item);
}

// for in: duyệt qua từng key của object
console.log('🚀 >>>::::::::: object :::::::::', );
for (let key in product_2) {
  console.log(key);
}

