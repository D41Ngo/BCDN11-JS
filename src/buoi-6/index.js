/**
 * OOP
 *
 * - Kiểu dữ liệu: Object
 *
 * - String, Number, Boolean, Undefined, NaN, Null
 */

/**
 *
 * Nhân Viên A:
 * (Property)
 * - Sdt
 * - Giới tính
 * - Địa chỉ
 * - Tên
 * - Tuổi
 * (Method)
 * - Ăn
 * - Đi
 * - Chạy
 *
 * Nhân Viên B:
 * (Property)
 * - Sdt
 * - Giới tính
 * - Địa chỉ
 * - Tên
 * - Tuổi
 * (Method)
 * - Ăn
 * - Đi
 * - Chạy
 *
 *
 * Nhân Viên C:
 * (Property)
 * - Sdt
 * - Giới tính
 * - Địa chỉ
 * - Tên
 * - Tuổi
 * (Method)
 * - Ăn
 * - Đi
 * - Chạy
 *
 * Nhân Viên D:
 * (Property)
 * - Sdt
 * - Giới tính
 * - Địa chỉ
 * - Tên
 * - Tuổi
 * (Method)
 * - Ăn
 * - Đi
 * - Chạy
 *
 */

var nhanVienD = lamNhanVien("", "", "", "", 21);

function lamNhanVien(sdt, gt, diaChi, ten, tuoi) {
  return {
    sdt: sdt,
    gioiTinh: gt,
    diaChi: diaChi,
    tuoi: tuoi,
    ten: ten,

    an() {},
    di() {},
    chay() {},
  };
}

var aSdt = "0123456789";
var aGt = "Nam";

var bSdt = "0123456789";
var bGt = "Nam";
var bDiaChi = "DN";
var bTen = "Nguyen Van A";
var bTuoi = 20;

var aDiaChi = "DN";

var cSdt = "0123456789";
var cGt = "Nam";
var cDiaChi = "DN";
var cTen = "Nguyen Van A";
var cTuoi = 20;

var aTen = "Nguyen Van A";
var aTuoi = 20;

// ------------

// { key: value, }

// object literal

var nhanVienA = {
  sdt: "0123456789",
  gt: "Nam",
  diaChi: "DN",
  tuoi: 20,
  name: "Nguyen Van A",

  12: 12,

  "quoc gia": "",
  "quoc-gia": "",

  an() {
    console.log("Nhan Vien A dang an");
  },
  di() {
    console.log("Nhan Vien A dang di");
  },
  chay() {
    console.log("Nhan Vien A dang chay");
  },
};

console.log(typeof nhanVienA); // Kiểu dữ liệu object

var nhanVienB = {
  sdt: "1234567890",
  gt: "Nam",
  diaChi: "SG",
  tuoi: 22,
  name: "Nguyen Van B",
};

var nhanVienC = {
  sdt: "128174983784",
  gt: "Nam",
  diaChi: "HN",
  tuoi: 24,
  name: "Nguyen Van C",
};

// Cách sử dụng
console.log(nhanVienA, nhanVienB);

// Lấy giá trị của đối tượng (object)
// object.key
// C1:
console.log(nhanVienA.ten);
// nhanVienA.quoc-gia;
// nhanVienA.quoc gia
// C2:
nhanVienA["diaChi"];
nhanVienA["quoc gia"];
nhanVienA["quoc-gia"];

// alert(nhanVienA.diaChi);
nhanVienA.an();
nhanVienA.di();
nhanVienA.chay();

// -----------------
// Lớp đối tượng (class)

// function
// class

class NhanVien {
  // Hàm khởi tạo
  constructor(ten, tuoi, gioiTinh, diaChi, sdt) {
    console.log("constructor");
    // Chạy hàm này khi khởi tạo một đối tượng

    // Tạo những property cho đối tượng được tạo ra từ lớp đối tượng NhanVien
    this.name = ten;
    this.tuoi = tuoi;
    this.gt = gioiTinh;
    this.diaChi = diaChi;
    this.sdt = sdt;
  }

  an() {}

  ngu() {
    // this là thể hiện của lớp đối tượng
    // this chính là đối tượng được tạo ra từ lớp đối tượng NhanVien
    console.log(this);
  }

  di() {
    console.log(this.ten + " dang di");
  }

  info() {
    this.di();

    console.log(this.name, this.tuoi, this.diaChi, this.gt, this.sdt);
  }
}

// Tạo một đối tượng nhân viên từ lớp đối tượng.
var nhanVienE = new NhanVien("Nguyen Van E", 25, "Nu", "DN", "1234567890");
// nhanVienE.di(); // "Nguyen Van E dang di"
// nhanVienE.ngu();
nhanVienE.info();

var nhanVienF = new NhanVien("Nguyen Van F", 25, "Nu", "DN", "1234567890");
// nhanVienF.di(); // "Nguyen Van F dang di"
nhanVienF.info();

// Đối tượng (object) | Lớp đối tượng (class)
// object thể hiện (instance) của lớp đối tượng

function NewNhanVien(ten, tuoi, gioiTinh) {
  this.ten = ten;
  this.tuoi = tuoi;
  this.gioiTinh = gioiTinh;

  this.di = function () {};

  this.info = function () {
    this.di();
  };
}

var nhanVienG = new NewNhanVien("Nguyen Van G", 25, "Nu");
var nhanVienH = new NewNhanVien("Nguyen Van H", 25, "Nu");

console.log(nhanVienG);

// ------------------------------------------------------
// const, let

// ** Thêm thuộc tính vào object

var sinhVien1 = {};

// 1. Thêm thuộc tính
// Nếu chưa có property thì nó sẽ tạo mới và gán giá trị.
// Nếu có property rồi thì sẽ cập nhật lại giá trị vừa gán.
sinhVien1.age = 20;

// 2. So sánh
var number1 = 10;
var number2 = number1;
number1 = 20;

console.log(number1 > number2);
console.log(number1 == number2);
number1 = number2;
console.log(number1);
console.log(number1 == number2);

var object1 = {};
// object1.a = 10;
// object1.b = 20;

var object2 = {};

console.log(object1 == object2);

// --------------------
// primitive type (stack): String, Number, Boolean, Null, Undefined.
// non-primitive  (heap): Object, Array.

var object3 = {
  a: 10,
  b: 3333,
  c: 1000,
  d: 1000000,
};

// var object4 = object3
// object4.a = 20;

// -------------------
// Vừa copy vừa thay đổi giá trị.
// var object4 = Object.assign({}, object3, { a: 20 });
var object4 = {
  ...object3, // spread
  // a: 10,
  // b: 3333,
  // c: 1000,
  // d: 1000000,


  a: 20,
};

console.log(object4);
console.log(object4 === object3);
console.log(object3);
