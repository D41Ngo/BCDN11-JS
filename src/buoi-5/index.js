/**
 * Mục đích của vòng lặp:
 * - Giúp chúng ta thực hiện lặp lại một tính năng gì đó.
 */

/**
 * - while (1%)
 * - do while (1%)
 * - for (98%)
 */

// 1. while
/**
 * while(dieu_kien_chay_vong_lap){
 *      Nếu điều kiện đúng thì sẽ chạy vòng trong block này
 * }
 */
var soLuong = 6;
//1. Khai báo biến đếm số lần lặp
var count = 0;
// var count = 1; 1 -> 6: 6
// 0 -> 5: 6

// 2. Điều kiện để chạy vòng lặp
while (count < soLuong) {
  console.log("Làm bánh");

  // 3. Tăng giá trị của biến đếm
  count += 1;

  // Hết
}

document.getElementById("lam").onclick = function () {
  // Lấy giá trị từ ô input -> ép kiểu
  var soLuong = Number(document.getElementById("banh").value);

  //1. Khai báo biến đếm số lần lặp
  var count = 0;

  // 2. Điều kiện để chạy vòng lặp
  while (count < soLuong) {
    // 3. Logic
    console.log("Làm bánh");

    // 4. Tăng giá trị của biến đếm
    // Sau khi thực hiện xong logic thì tăng giá trị biến đếm
    count += 1;
  }
};

/**
 * do {
 *    - Chạy 1 lần trước khi kiểm tra điều kiện.
 *    - Nếu điều kiện đúng thì sẽ chạy vòng trong block này.
 * }while(dieu_kien_de_chay_vong_lap)
 */
// Kiểm tra điều kiện trước khi chạy
while (false) {
  console.log("hello while");
}

// Chạy 1 lần trước khi kiểm tra điều kiện để lặp.
do {
  console.log("hello do");
} while (false);

// ----------------

var soLuong2 = 10;
// 1. Khai báo biến đếm
var count2 = 0;

do {
  // 3. Logic
  console.log("[DO] Làm bánh.");

  // 4. Tăng giá trị của biến đểm
  count2++; // count2 += 1;

  // 2. Điều kiện để lặp
} while (count2 < soLuong2);
// 0 -> 9: 10 lần

// 3. for

/**
for( [1. Khai báo biến đếm] ; [2. Điều kiện để lặp] ; [3. Tăng giá trị của biến đểm] ) {
    [4. LOGIC]
}
*/

var soLuong3 = 20;

for (var count3 = 0; count3 < soLuong3; count3++) {
  console.log("[For] Làm bánh.");
}

// -----------------------
document.getElementById("log-1").onclick = function () {
  // +"3" -> 3 <===> Number("3") -> 3

  var n = +document.getElementById("n-1").value;

  // ---------
  var count1 = 1;

  while (count1 <= n) {
    console.log(count1);

    count1++;
  }

  // ----------
  var count2 = 1;

  do {
    console.log(count2);

    count2++;
  } while (count2 <= n);

  // -----------
  for (var count3 = 1; count3 <= n; count3++) {
    console.log(count3);
  }

  //   ----
};

function useDoWhile() {
  var count = 0;

  do {
    count++;
    console.log(count);
  } while (count < n);
}

// n(n + 1)/2;

document.getElementById("log-2").onclick = function () {
  var n = +document.getElementById("n-2").value;

  var tong = forTinhTong(n);

  document.getElementById("kq-log-2").innerHTML =
    "Tổng từ 1 -> " + n + ": " + tong;
};

function tinhTong(n) {
  return (n * (n + 1)) / 2;
}

function whileTinhTong(n) {
  // 2. Tính tổng
  var tong = 0;
  var count = 1;

  while (count <= n) {
    tong += count;

    count++;
  }

  return tong;
}

function doWhileTinhTong(n) {
  var tong = 0;
  var count = 1;

  do {
    tong += count;

    count++;
  } while (count <= n);

  return tong;
}

function forTinhTong(n) {
  var tong = 0;

  for (var count = 1; count <= n; count++) {
    tong += count;
  }

  return tong;
}

// {
//   var tong = 10;
//   {
//     console.log(tong); // ✅
//   }
// }
// console.log(tong);// ❌

document.getElementById("log-3").onclick = function () {
  var n = +document.getElementById("n-3").value;

  var tong = whileTongCacSoLe(n);

  document.getElementById("kq-log-3").innerHTML = "Tổng : " + tong;
};

function whileTongCacSoLe(n) {
  var tong = 0;
  var count = 1;

  while (count <= n) {
    tong += count;

    count += 2;
  }

  return tong;
}

function doWhileTongCacSoLe(n) {
  var tong = 0;
  var count = 1;

  do {
    if (count % 2 != 0) {
      tong += count;
    }

    count += 1;
  } while (count <= n);

  return tong;
}

function forTongCacSoLe(n) {
  var tong = 0;

  for (var count = 1; count <= n; count += 2) {
    tong += count;
  }

  return tong;
}

// -------------------
for (var i = 0; i < 10; i++) {
  if (i == 3) {
    continue;
  }

  if (i == 7) {
    break;
  }

  console.log(i);
}

function abc() {
  console.log(1);
  return 3;



















  
  console.log(2);
}

function tenHam(n) {
  var tong = 0;
  var count = 1;

  while (count <= n) {
    tong += count;

    count += 2;

    if (count == 5) {
      return tong;
    }
  }
}

// ------------------
for (var i = 0; i < 10; i++) {
  for (var j = 0; j < 10; j++) {
    console.log(i, j);
  }
}
// ------------------
var a;
var b;
var c;

var a, b, c; // (1%)
