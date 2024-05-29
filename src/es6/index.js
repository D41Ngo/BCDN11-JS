// 'use strict'
// 1.
// hoisting.
var var1;

console.log(var1);
var var1 = 10;
var var1 = 10;

// console.log(var2); ❌
let var2 = 20;
var2 = 30;
var2 = 40;
console.log(var2);
// let var2 = 20; ❌

const var3 = 40;
// var3 = 50;

console.log(var3);

/**
 * local
 * global
 * block
 */

var a = 10;

if (3 < 5) {
  var a = 20;
}

console.log(a);

let b = 10;

if (3 < 5) {
  let b = 20;
}

console.log("b", b);

// 2.

// function a() {}
// var a = function () {};

let aa = () => {
  console.log("aaaa");
};

const bReturn = () => 10;

var result_1 = bReturn();
console.log(result_1); // 1. 10

var result_2 = aa();
console.log(result_2); // 2. undefined

const obj1 = {
  age: 20,
};

let obj2 = {
  age: 40,
};

obj1.age = 30; // ok
obj1.name = "haha";

obj2.age = 50; // ok

//

let getInfo = (age, name = "Mị") => {
  // Nếu người dùng không truyền tham số thứ 2 thì mặc định nó sẽ là mịs
  //   if (!name) name = "Mị";

  if (age > 0 && age < 30) {
    console.log(`${name} còn trẻ ${name} muốn đi chơi.`);
  }
};

getInfo(18, "Huy");
getInfo(20);

// let getInfo2 = (name = "Mị", age) => {
//   // Nếu người dùng không truyền tham số thứ 2 thì mặc định nó sẽ là mịs
//   //   if (!name) name = "Mị";

//   if (age > 0 && age < 30) {
//     console.log(`${name} còn trẻ ${name} muốn đi chơi.`);
//   }
// };

// getInfo2(, 18);

let calcTotalNum = (...rest) => {};

// calcTotalNum(1, 2, 3, 4, 5, 6, 7, 8, 9, 9, 0); // a? 1 rest? [2, 3, 4, 5, 6, 7, 8, 9, 9, 0]
// calcTotalNum(1, 2, 3, 4, 5, 6); // a? 1 rest? [ 2, 3, 4, 5, 6]
calcTotalNum(1, 2); // a,b,c, rest
calcTotalNum(1); // a,b,c, rest
calcTotalNum(1, undefined); // a,b,c, rest

function abc(a, b, c, d, e) {}
[1, 2, 3].forEach((...rest) => {
  //   [1, 2, 3, 4, 5];
  // ...[1, 2, 3, 4, 5]
  //   abc(1, 2, 3, 4, 5);
  abc(...rest);
});

// 7. Destructuring.

const product = {
  price: 10,
  name: "Nokia",
  id: "adsifhaisdfhasiof234j2424",
  a: 10,
  b: 10,
  c: 10,
  size: {
    width: 10,
    height: 10,
  },
};

const {
  name,
  price,
  id: ID,
  size: { width, height },
  ...other
} = product;
console.log("other", other);
// const price = product.price;
// const name = product.name;
// const ID = product.id;
// const width = product.size.width
// const height = product.size.height

console.log(`price: ${price}`);
console.log(`name: ${name}`);
console.log(`id: ${ID}`);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const [num1, , num3, ...numbers] = arr;
// const num1 = arr[0]
// const num2 = arr[1]

console.log(numbers);

const userName = "user-name";

const obj_3 = {
  [userName]: "Nguyen Van A",
};
