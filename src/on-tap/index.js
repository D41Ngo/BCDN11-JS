/**
 * =======================================
 * ============= Kiểu dữ liệu ============
 * =======================================
 */

//===========================
var ch1_a;
console.log(ch1_a); // ???
ch1_a = 10;
console.log(ch1_a); // ???

var ch1_a = 20; // (error | ok) ???
console.log(ch1_a); // ???

//===========================
var ch1_a = 20;
var ch1_b = ch1_a;
console.log(ch1_b); // ???
console.log(ch1_a >= ch1_b); // ???
console.log(ch1_a > ch1_b); // ???

//===========================
var ch1_s1 = "abc";
var ch1_s2 = "abcd";
console.log(ch1_s1 == ch1_s2);
console.log(ch1_s1 >= ch1_s2);
console.log(ch1_s1 <= ch1_s2);

//===========================
var ch1_s3 = "abc";
var ch1_s4 = "aBc";
console.log(ch1_s3 == ch1_s4);
console.log(ch1_s3 >= ch1_s4);
console.log(ch1_s3 <= ch1_s4);

//===========================
var ch1_b1 = true;
var ch1_b2 = true;
console.log(ch1_b1 == ch1_b2);

//===========================
var ch1_b3 = true;
var ch1_b4 = !!ch1_b3;
console.log(ch1_b4);

//===========================
console.log(true && true && false);
console.log(true && true && true);
console.log(true && (true || true));
console.log(true && (true || false));
console.log(true || (true && false));
console.log(true || (true && true));

//===========================
var ch1_obj1 = {};
console.log(ch1_obj1); // ???
ch1_obj1.age = 10; // (error | ok) ???
console.log(ch1_obj1); // ???

//===========================
var ch1_obj2 = {};
var ch1_obj3 = {};
console.log(ch1_obj2 == ch1_obj3); // ???

//===========================
var ch1_obj4 = {};
var ch1_obj5 = { ...ch1_obj4 };

ch1_obj4.age = 20;
console.log(ch1_obj4); // ???
console.log(ch1_obj5); // ???
console.log(ch1_obj4 == ch1_obj5);

//===========================
var ch1_obj7 = {};
var ch1_obj8 = ch1_obj7;

ch1_obj7.age = 20;
console.log(ch1_obj7); // ???
console.log(ch1_obj8); // ???
console.log(ch1_obj7 == ch1_obj8); // ???

//===========================
var ch1_o9 = {
  age: 20,
  name: "ch1_o9",
};
var ch1_o10 = {
  age: 21,
  age: 20,
  age: 20,
  age: 20,
  age: 20,
  age: 20,
  age: 20,
  age: 100,
  ...ch1_o9,
  ...ch1_o9,
};

console.log(ch1_o9); // ???
console.log(ch1_o10); // ???
console.log(ch1_o10 == ch1_o9); // ???

//===========================
var ch1_a1 = [1, 2, 3];
var ch1_a2 = [1, 2, 3];
console.log(ch1_a1[1] == ch1_a2[1]); // ???
console.log(ch1_a1 == ch1_a2); // ???

//===========================
var ch1_a3 = [1, 2, 3];
var ch1_a4 = ch1_a3;
console.log(ch1_a3[1] == ch1_a4[1]); // ???
console.log(ch1_a3 == ch1_a4); // ???

//===========================
var ch1_a5 = [1, 2, 3];
var ch1_a6 = [...ch1_a5, ...ch1_a5];
console.log(ch1_a5); // ???
console.log(ch1_a6); // ???
console.log(ch1_a6[1] == ch1_a5[1]); // ???
console.log(ch1_a5 == ch1_a6); // ???

/**
 * =======================================
 * ==== Function | If Else | Ternary =====
 * =======================================
 */
//===========================
var ch2_q1 = 3 % 2 == 0 ? "hello" : "world";
console.log(ch2_q1);

//===========================
// Thứ tự log ra như thế nào? vd: 1,2,3,4,5,6
if (true) {
  console.log(1);
} else {
  console.log(2);

  if (false) {
    console.log(3);
  } else {
    console.log(4);
  }

  console.log(5);
}
console.log(6);

//===========================
// Thứ tự log ra như thế nào? vd: 1,2,3,4,5,6
console.log(1);
function a() {
  console.log(2);
  b();
  console.log(3);
  d();
  console.log(5);
}
function b() {
  console.log(6);
  c();
  console.log(7);
}
function c() {
  console.log(8);
}
function d() {
  console.log(9);
}
a();
//===========================
var num = 10;
function calcSum(a, b) {
  return a + b + num;
}

var ch2_r1 = calcSum(num, num, num);
console.log(ch2_r1); //???
var ch2_r2 = calcSum(3, 5, 20);
console.log(ch2_r2); //???

num = 11;
var ch2_r3 = calcSum(4, 6, 21);
console.log(ch2_r3); //???

//===========================
function calcSum2(num) {
  var total = 0;
  for (var i = 0; i < num; i++) {
    if (i == 5) {
      return i;
    }

    total += i;
  }
}

var ch2_r4 = calcSum2(10);
var ch2_r5 = calcSum2(4);

console.log(ch2_r4);
console.log(ch2_r5);
console.log(calcSum2(20));
console.log(calcSum2(3));

//===========================
var aaa = 10;

function printB() {
  console.log(aaa); // 1. 10
}


function printA() {
  var aaa = 20;

  printB();

  console.log(aaa); // 2. 20
}
printA();

//===========================
var age = 20;

var age_2 = age;

console.log(age_2);

function change(obj) {
  // var obj = Ox1231233423;
  obj.age = 20;
}

var obj = {};
// change(Ox1231233423);

console.log(obj); // ???
