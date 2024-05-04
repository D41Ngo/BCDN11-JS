/**
 * Bước 1: Phải lấy được element mà chúng ta muốn thao tác.
 * Bước 2: Chỉnh thành màu đỏ
 */

/**
 * - document.getElementById(<ID>)
 * - tìm một element trên file html bằng id
 */
// - Biết có id ở trên giao file html
// - Nên nó sẽ trả về element chúng ta cần lấy
var h1Ele = document.getElementById("hello");
console.log(h1Ele);
// - id chưa có trên file html
// - Nên nó sẽ trả về giá trị null

// Có thể xem 2 cái là một
// undefined
// null

// -- can thiệp thay đổi style của một element
h1Ele.style.color = "red";
h1Ele.style.fontSize = "50px";
h1Ele.style.backgroundColor = "blue";
// -- thay đổi nội dung bên trong
h1Ele.innerHTML = "Ngô Tấn Đại";

h1Ele.id = "hi";

console.log(document.getElementById("hello"));
console.log(document.getElementById("hi"));

//#region Lấy nội dung
var h2Ele = document.getElementById("h2");
var textH2 = h2Ele.innerHTML;
console.log(textH2);
console.log(h2Ele.id);
//#endregion

// -- [Get] [Set] --
var h3Ele = document.getElementById("h3");
console.log(h3Ele);
h3Ele.style.color = "green";

// console.log('Cyber soft')
var h4Ele = document.getElementById("h4");
console.log(h4Ele.innerHTML); // [Get]
// h4Ele.innerHTML = "huhu"; // [Set]

//# function: hàm, chức năng
// - Khai báo
function tinhTong() {
  // Code
  console.log("tinh tong");
  var a = 1;
  var b = 2;
  var tong = a + b;
  console.log(tong);
}
// - Sử dụng :: Gọi function
tinhTong();
tinhTong();
tinhTong();
tinhTong();

//#region toggle lamp
function handleToggle() {
  console.log("toggle");
  var on = document.getElementById("bat");
  var off = document.getElementById("tat");

  on.style.display = "inline-block";
  off.style.display = "none";
}
//#endregion

//#region Counter
// Sử dụng ép kiểu: string -> number
function handleTang() {
  var countEle = document.getElementById("count");
  var count = Number(countEle.innerHTML);

  count = count + 1;

  countEle.innerHTML = count;
}

function handleGiam() {
  // Lấy element
  var countEle = document.getElementById("count");
  //   Lấy nội dung của element
  var count = countEle.innerHTML;
  //   ép kiểu từ string -> number
  var countNum = Number(count);

  //   giảm giá trị countNum đi trừ 1 sau đó gán lại cho biến newCount
  //   var newCount = countNum - 1;
  var newCount = --countNum;

  //   Xét giá trị cho element count
  countEle.innerHTML = newCount;
}
//#endregion

function handleChangeColor(color) {
  var bgcEle = document.getElementById("bgc");

  bgcEle.style.backgroundColor = color;
}

function handleRed() {
  var bgcEle = document.getElementById("bgc");

  bgcEle.style.backgroundColor = "red";
}

function handleBlue() {
  var bgcEle = document.getElementById("bgc");

  bgcEle.style.backgroundColor = "blue";
}

// Tham số function
// a, b: tham số (parameter)
function calcSum(a, b) {
  var sum = a + b;

  console.log(sum);
}

// 4,5: đối số (argument);
calcSum(4, 5);
console.log("-------");
calcSum(3);
console.log("-------");

//
function print(name) {
  console.log("Xin Chào " + name);
}

print("Nguyễn Văn A");
print("Nguyễn Văn B");

/**
 * 1. Function không có tham số (parameter).
 * 2. Function có tham số (parameter).
 * 3. Scope - Phạm vi sử dụng biến.
 * - Global
 * - Local (function)
 * - Block (loading...)
 * 4. Trả về giá trị.
 */

var count2 = 20;

function aaa() {
  var count2 = 10;

  console.log(count2); // 1. 10
}



// aaa();

// console.log(count2); // 2. 20 | undefined

// ------------------
function concatString(str1, str2) {
  var result = str1 + "-----" + str2;

  return result;
}

var count3 = 30;

var str = concatString('Hello', 'World');

console.log(str);

