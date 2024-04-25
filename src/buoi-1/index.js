console.log("Liên kết thành công");

// ** Toán tử (operator) - dành cho kiểu dữ liệu Number
// + - * /
// %

var x = 10;
var b = 20;

var y = x + b;
console.log("y = x + b :::", y);
y = x - b;
console.log("y = x - b :::", y);
y = x * b;
console.log("y = x * b :::", y);

// ** JS: 5 / 3 = 1.66666667 -> Math.floor(1.6666667) -> 1
// ** Khác: 5 / 3 = 1
y = x / b;
console.log("y = x / b :::", y);

var z = 0.1;

console.log("5 % 3 :::", 5 % 3);
console.log("5 % 4 :::", 5 % 4);
console.log("5 % 5 :::", 5 % 5);

// ** Bài tập 1:
var a = 3; //
var b = 4; //
var canhHuyen; //
// sử dụng công thức
// canhHuyen*canhHuyen = a*a + b*b
// canhHuyen = căn bậc hai (a*a + b*b)
// console.log(Math.sqrt(9))

// Code:::::
canhHuyen = Math.sqrt(a * a + b * b); //
// Code:::::

console.log(canhHuyen);

// ** Bài tập 2:
// input: n = 345
// output: 3 + 4 + 5 = 12
var n = 343;
var output;

var hangTram = Math.floor(n / 100);
var hangChuc = Math.floor((n % 100) / 10);
var hangDonVi = Math.floor(n % 10);

output = hangTram + hangChuc + hangDonVi; //

console.log("Output :::", output);

// -----------------------------------
// 345 / 100 = 3
// 345 % 100 = 45 => 45 / 10 = 4
// 345 % 10 = 5

// -- Math.floor: làm tròn xuống
// -- Math.ceil: Làm tròn lên
// -- Math.round: The value to be rounded to the nearest integer.
// Math.round(3.54) => 4
// Math.round(3.44) => 3
// -----------------------------------

// -- Tính tiền lương nhân viên
var soNgayLam = 30;
var luong1Ngay = 100_000;
var tongLuong = soNgayLam * luong1Ngay;

console.log("tong luong :::", tongLuong);

// -- Tính giá trị trung bình
var a = 24;
var b = 323;
var c = 43534;
var d = 4234;
var e = 921;

var giaTriTB;

giaTriTB = (a + b + c + d + e) / 5;

console.log("Giá trị trung bình :::", giaTriTB);
// ------------------------------
// ** Nối chuỗi: +
var aa = "Hello";
var bb = "World";

var hl = aa + " " + bb; // "HelloWorld"

console.log(hl);
console.log("haha" + " " + "hihi");

// ------------------------------
// ** Ép kiểu dữ liệu

// 438
// 43521
console.log(4 + "3" + 5 + 2 + 1); // ??? 43521

// ** Kiểm tra kiểu dữ liệu: typeof

console.log(typeof 3);
// "3" -> 3 => Number("3") -> 3
console.log(typeof "3");
console.log(typeof Number("3"));

var strNum = "3";

var num = Number(strNum);
var strNum2 = String(num);

console.log("typeof strNum :::", typeof strNum);
console.log("typeof num :::", typeof num);
console.log("typeof strNum2 :::", typeof strNum2);

console.log(4 + "3" + 5 + 2 + 1); // ??? 43521
// 4 + '3' => String(4) + '3' => '43'
// '43' + 5 => '43' + String(5) => '435'
// '435' + 2 => '435' + String(2) => '4352'
// '4352' + 1 => '4352' + String(1) => '43521'


