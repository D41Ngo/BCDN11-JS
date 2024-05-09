var tangEle = document.getElementById("tang");

// onclick: mong muốn nhận vào là một function

// Cách 1:
tangEle.onclick = function () {
  console.log("hahaha");
};

// Cách 2:
// function handleTang2(){

//     return 10
// }
// tangEle.onclick = handleTang2

// Tránh ❌
// tangEle.onclick = handleTang2()

// --------------
// HTML:
// <button onclick="handleGiam()" id="giam">-</button>

// JS:
document.getElementById("giam").onclick = function () {
  handleGiam();
};
// -------------
//# Tương tác với ô input
// Nhiệm vụ: Click vào button get -> lấy giá trị của ô input -> Log ra màn hình

// Bắt đầu từ đâu.
document.getElementById("get").onclick = function () {
  //   var emailContent = document.getElementById("exampleFormControlInput1").value;

  var emailEle = document.getElementById("exampleFormControlInput1");
  var emailContent = emailEle.value;

  console.log("Giá trị của ô input là :::", emailContent);

  // Reset Ô input
  emailEle.value = "";
};

// function calc(a,b,c,e){

// }

// calc(3,4,5,6,7,8,10)
// ------------
// Boolean: true, false
// toán tử so sánh: >, <, >=, <=, ==, !=

var r1 = 3 < 5; // true
console.log("🚀 ~ r1: 3 < 5", r1);
var r2 = 3 > 5; // false
console.log("🚀 ~ r2: 3 > 5", r2);

var r3 = 3 <= 3; // true
console.log("🚀 ~ 3 <= 3:", r3);
3 <= 5; // true
console.log("🚀 ~ 3 <= 5:", 3 <= 5);

3 >= 3; // true
console.log("🚀 ~ 3 >= 3:", 3 >= 3);
3 >= 5; // false
console.log("🚀 ~ 3 >= 5:", 3 >= 5);

3 == 3; // true
console.log("🚀 ~ 3 == 3:", 3 == 3);
3 != 3; // false
console.log("🚀 ~ 3 != 3:", 3 != 3);

var num1 = 10;
var num2 = 20;

function calcSum(a, b) {
  return a + b;
}

var r4 = num1 > num2; // false
var r5 = num1 < num2; // true
var r6 = calcSum(num1, num2); // undefined | 30
var r7 = num1 > calcSum(num1, num2); // false
var r8 = num1 == num1; // true
var r9 = num1 <= num2; // true
var r10 = calcSum(num1, 0) >= num1; // true

// if else
// dieu_kien: Boolean
/**
if(<dieu_kien>){
    Nếu điều kiện đúng thì chạy code bên trong block này
} else {
    Nếu điều kiện sai thì chạy code bên trong block này
}
*/

// Number -> Boolean
// Ngầm: tự ép kiểu -> Boolean(num1)
// if (num1) {
// }

// if (num1 > num2) {
//   alert("num1 lớn hơn num2");
//   // console.log("num1 lớn hơn num2")
// } else {
//   alert("num1 bé hơn num2");
//   // console.log("num1 bé hơn num2")
// }

// if (num1 > num2) {
//   alert("num1 lớn hơn num2");
//   // console.log("num1 lớn hơn num2")
// } else {
//   if (num1 == num2) {
//     alert("num1 bằng num2");
//   } else {
//     alert("num1 bé hơn num2");
//   }
//   //...............
// }

// ---------------
// Toán so sánh kết hợp: &&, ||

// &, |: toán tử bit

// a: 11100011000111
// Bật | tắt
// bật | bật | tắt | tắt: đà nẵng: 1100
// bật | tắt | bật | tắt: sài gòn: 1010
// bật | tắt | tắt | bật: hà nội: 1001

// --------------
// 1. gắn sự kiện cho thẻ button
// 2. khi function được gọi lấy giá trị của ô input
// 3. Kiểm tra điều kiện
// 4. Thay đổi nội dụng của element kết quả

// ** Note: Mọi thứ các bạn lấy được từ trên document điều có kiểu là String

// 1. ✅
document.getElementById("bt-1").onclick = function () {
  debugger;
  //  2. ✅
  // Get element
  var inputEle = document.getElementById("chan-le");
  // Get value
  var inputValue = Number(inputEle.value);

  /**
   * Chẵn nếu chia lấy dư cho 2 = 0
   * lẻ nếu chi lấy dư cho 2 != 0
   */

  if (inputEle.value == "") {
    alert("Nhập vào giá trị ô input");
    // //////////////
  } else {
    var kqEle = document.getElementById("kq-1");

    // 3. ✅
    if (inputValue % 2 == 0) {
      // 4. ✅
      kqEle.innerHTML = "Số " + inputValue + " là số chẵn.";
    } else {
      // 4. ✅
      kqEle.innerHTML = "Số " + inputValue + " là số lẻ.";
    }

    inputEle.value = "";
  }
};

// ------
// 1. Gắn sự kiện click cho button
// 2. Lấy giá trị của 3 môn
// 3. Tính điểm trung bình
// 4. Xếp loại học lực
// 5. In ra màn hình điểm trung bình
// 6. In ra học lực

// dtb >= 8.5: giỏi
// 6.5 <= dtb < 8.5: khá
// 5 <= dtb < 6.5: trung bình
// dtb < 5: yếu

// 1. ✅
document.getElementById("bt-2").onclick = function () {
  console.log("click");

  // 2. ✅
  var diemToan = Number(document.getElementById("toan").value);
  var diemLy = Number(document.getElementById("ly").value);
  var diemHoa = Number(document.getElementById("hoa").value);
  var hocLuc = "";

  // 3. ✅
  var dtb = (diemHoa + diemLy + diemToan) / 3;

  // 4. ✅
  if (dtb >= 8.5) {
    // Gioi
    hocLuc = "Giỏi";
  } else {
    // 6.5 <= dtb < 8.5: Không code như này
    // ||
    // ||
    // VV
    // VV
    // Phải là như thế này
    // 6.5 <= dtb && dtb < 8.5
    if (6.5 <= dtb && dtb < 8.5) {
      // Kha
      hocLuc = "Khá";
    } else {
      if (5 <= dtb && dtb < 6.5) {
        // Trung binh
        hocLuc = "Trung Bình";
      } else {
        // Yeu
        hocLuc = "Yếu";
      }
    }
  }

  // 5. ✅
  // - toFixed: làm tròn chữ số thập phân
  document.getElementById("dtb").innerHTML =
    "Điểm trung bình: " + dtb.toFixed(2);

  // 6.
  document.getElementById("hoc-luc").innerHTML = "Học " + hocLuc;
};

// ---------------------------

// var number10 = 10;
// var loai = "";

// if (number10 % 2 == 0) {
//   loai = "Chan";
// } else {
//   loai = "Le";
// }

// console.log("**** So " + number10 + " " + loai);

// Toán tử ba ngôi (ternary): <dieu_kien> ? neu_dk_dung_lay_gia_tri_nay : neu_dk_sai_lay_gia_tri_nay
// Thường sử dụng khi mà kiểm tra 1-2 điều kiện.

var number10 = 10;
var loai = number10 % 2 == 0 ? "Chan" : "Le";

console.log("**** So " + number10 + " " + loai);

// --------------------------
var bit = 1;

// var bongDen = "";
// if (bit == 1) {
//   bongDen = "Bat";
// } else {
//   bongDen = "Tat";
// }

var bongDen = bit == 1 ? "Bat" : "Tat";
// -------------------------

var thang = 1; // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12

/**
 * thang == 1 => in ra màn hình là tháng một
 */

// alert('Tháng không hợp lệ, Yêu cầu nhập lại')

// 1. Gắn hàm cho element trigger làm thay đổi giao diện
function inThang() {
  console.log(".......");
  // 2. Kiểm tra giá trị người dùng nhập vào có hợp lệ hay không.
  // 3. Kiểm tra input người dùng nhập nhập vào là tháng bao nhiêu (một, hai, ba).
  // 4. In ra màn hình.

  // 2.
  // lấy element
  var thangEle = document.getElementById("thang");
  // lấy giá trị
  var thangValue = thangEle.value; // String
  // ép kiểu: convert 12.4 -> 12, 12.6 -> 12: làm tròn tháng người dùng nhập vào.
  var thangNum = Math.floor(Number(thangValue)); // Number;

  // 3.
  /**
   * [TEST]
   * 1. 0, -1, -2
   * 2. 1, 2, 3, 12.4, 3.5
   * 3. 13, 14, 15
   */
  if (thangNum <= 0 || thangNum > 12) {
    alert("Tháng không hợp lệ, Yêu cầu nhập lại");
  } else {
    debugger;
    // if (thangNum == 1) {
    //   var result = "Tháng Một";
    //   console.log(result);
    // }

    // if (thangNum == 2) {
    //   var result = "Tháng Hai";
    //   console.log(result);
    // }

    // if (thangNum == 3) {
    //   var result = "Tháng Ba";
    //   console.log(result);
    // }

    // // --------------

    // if (thangNum == 1) {
    //   var result = "Tháng Một";
    //   console.log(result);
    // } else {


    //   if (thangNum == 2) {
    //     var result = "Tháng Hai";
    //     console.log(result);
    //   } else {
    //     if (thangNum == 3) {
    //       var result = "Tháng Ba";
    //       console.log(result);
    //     } else {
    //       if (thangNum == 4) {
    //         var result = "Tháng Bốn";
    //         console.log(result);
    //       }
    //     }
    //   }
    // }

    //

    // break: dừng lại không làm tiếp tục.
    // vòng lặp.

    // thangNum 
    // 1, 2, 3, 6
    switch(thangNum){
      case 1: { // thangNum == 1
        var result = "Tháng Một";
        console.log(result);

        break;
      }
      case 2: { // thangNum == 2
        var result = "Tháng Hai";
        console.log(result);

        break;
      }
      case 3: {
        var result = "Tháng Ba";
        console.log(result);

        break;
      }

      default: {
        console.log("Thang :::", thangNum)
      }
    }
  }
}

document.getElementById("in").onclick = inThang;

/**
 * switch                   |                   if else
 * 
 * so sánh giá trị          |               Khoảng giá trị
 * bằng nhau
 * 
 */


