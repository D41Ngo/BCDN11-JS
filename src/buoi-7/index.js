var hocVien1 = {};
var hocVien2 = {};
var hocVien3 = {};

var bcdn11 = {
  hocVien1: hocVien1,
  hocVien2: hocVien2,
  hocVien3: hocVien3,
};

// Array: lặp

// 1. Cách tạo 1 Array.
// c1.
var bcdn11 = [];
// c2.
var bcdn11 = new Array(); // (0.001%)

var numbers = [1, 2, 3, 4, 5];
var listName = ["Toan", "Linh", "Hieu", "Huy", "Hoa"];
// listName.length;//5

// listName[listName.length] = "Duc";

// listName.length;//6

var arr1 = [1, 2, "Hello", true, null, undefined, function () {}];

// 2. Lấy giá trị từ array
console.log(listName[0]);
console.log(listName[4]);
console.log(listName[2]); //Hieu
console.log(numbers[1]);

// 3. Cập nhật giá trị phần tử của array
numbers[1] = 10;
numbers[2] = 20;

console.log(numbers);

// 4. Lấy số lượng phần tử có trong array
console.log(numbers.length);
console.log(listName.length);

// "a".toUpperCase();
// new String("a").toUpperCase() -> String

// 5. Lấy phần từ cuối cùng của mảng.
listName[listName.length - 1];

// at: method của array.
// truyền vào số dương thì giống với listName[0|1|2].
// số âm thì sẽ bắt đầu từ cuối mảng.
console.log(listName.at(-1));

// 6. Lặp qua từng phần tử của mảng.

console.log("---- for ----");
for (var i = 0; i <= listName.length - 1; i++) {
  console.log(listName[i]);
}

console.log("---- forEach ----");
var fe1 = listName.forEach(function (item, index) {
  console.log(index, item);
});
console.log("🚀 >>>::::::::: fe1 :::::::::", fe1);
class FakeArray {
  constructor(arr) {
    this.arr = arr;
  }

  forEach(fn) {
    for (var i = 0; i <= this.arr.length - 1; i++) {
      fn(this.arr[i], i);
    }
  }

  push(value) {
    this.arr[this.arr.length] = value;

    return this.arr.length;
  }

  map(fn) {
    var newArr = [];

    for (var i = 0; i <= this.arr.length - 1; i++) {
      var item = fn(this.arr[i], i);
      newArr.push(item);
    }

    return newArr;
  }
}

var arr = new FakeArray([...listName]);

arr.forEach(function (item, index) {
  if (index % 2 == 0) {
    console.log(item, index);
  }
});

var caLopUpdate_ = arr.map(function (item) {
  return item.toUpperCase();
});

console.log(caLopUpdate_);

// 7. Thêm, Xóa.

// Đầu, Cuối
// Cuối:
// - Thêm
console.log("🚀 >>>::::::::: push :::::::::");
var rs1 = listName.push("Duc");
console.log(listName);
console.log(rs1);
// - Xóa
console.log("🚀 >>>::::::::: pop :::::::::");
var rs2 = listName.pop();
console.log(listName);

// Đầu:
// - Thêm
console.log("🚀 >>>::::::::: unshift :::::::::");
listName.unshift("Duc");
console.log(listName);
// - Xóa
console.log("🚀 >>>::::::::: shift :::::::::");
listName.shift();
console.log(listName);

// 8. Method của array.
// ** Nó có làm thay đổi mảng gốc hay không.
// - Join: chuyển array -> string (không thay đổi mảng gốc)
console.log(listName.join("--------"));
// - Slice: (không thay đổi mảng gốc)
console.log("🚀 >>>::::::::: truoc :::::::::", listName);
var newArr = listName.slice(0, 2);
console.log("🚀 >>>::::::::: newArr :::::::::", newArr);
console.log("🚀 >>>::::::::: sau :::::::::", listName);
newArr = listName.slice(1, 4); // 1,2,3
console.log("🚀 >>>::::::::: newArr :::::::::", newArr);
// - Splice: (index, so_luong_phan_tu_muon_xoa, gia_tri_1, gia_tri_2 )
// - Làm thay đổi mảng gốc
listName.splice(1, 1, "Duc");
console.log(listName);
listName.splice(4, 0, "Linh");
console.log(listName);

// - Concat: Không làm thay đổi mảng gốc.
var listNameOn = ["Cam", "Manh", "Anh", "Linh", "Nhan", "Lam", "Duc"];

var caLop = listName.concat(listNameOn);
console.log("🚀 >>>::::::::: caLop :::::::::", caLop);

// - map: return một mảng mới, từng phần tử của mảng đó là giá trị của function return
// - Không thay đổi mảng gốc.

var caLopUpdate = caLop.map(function (item) {
  return item.toUpperCase();
});

console.log(caLopUpdate);

// - filter: trả về mảng mới thỏa mảng điều kiện.
// - true sẽ lấy.
// - false loại bỏ.
// - Không thay đổi mảng gốc.
var caLopFilter = caLopUpdate.filter(function (item) {
  return item !== "DUC";
});
console.log(caLopFilter);

// 9. So sánh
var arr1 = [1, 2];
var arr2 = [4, ...arr1, 3, ...arr1];

console.log(arr1 == arr2); // !false = true
console.log(arr2)
// !!true = true

// 10. Spread
