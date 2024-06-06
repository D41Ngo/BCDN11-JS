import { SinhVien } from "./model/sinh-vien.js";
import { createSinhVien, renderTableSinhVien } from "./manage-sinh-vien.js";
function layThongTinSinhVien() {
  // return new SinhVien(msv, ten, email)
}

/**
 * Vừa nhận được phím enter để submit
 * Vừa nhận được click button để submit
 *
 * ||
 * VV
 * onsubmit của thẻ form
 */

const formEle = document.getElementById("formQLSV");

/**
 * test case:
 * - có dữ liệu
 * - không có dữ liệu
 */
formEle.onsubmit = (event) => {
  // Chặn đi sự kiện mặc định của thẻ form: reload page.
  event.preventDefault();

  // const msv = document.getElementById("txtMaSV").value;
  // const txtTenSV = document.getElementById("txtTenSV").value;
  // const txtEmail = document.getElementById("txtEmail").value;
  // const txtPass = document.getElementById("txtPass").value;
  // const khSV = document.getElementById("khSV").value;
  // const txtDiemToan = document.getElementById("txtDiemToan").value;
  // const txtDiemLy = document.getElementById("txtDiemLy").value;
  // const txtDiemHoa = document.getElementById("txtDiemHoa").value;

  // querySelectorAll
  // NodeList: mảng nhưng không phải là Array
  // NodeList -> Array
  // Array.from(NodeList)
  const listEle = document.querySelectorAll(
    "#formQLSV input, #formQLSV select"
  );

  const arrEle = Array.from(listEle);

  // const arrSinhVien = arrEle.map((ele) => {
  //   return ele.value;
  // });

  // console.log(arrSinhVien);

  const sv = {};

  listEle.forEach((ele) => {
    // console.log(ele.id, ele.value);
    // ele.id = 'txtMaSV'
    // sv[ele.id] => sv['txtMaSV']
    sv[ele.id] = ele.value;
  });

  const newSinhVien = new SinhVien(
    sv.txtMaSV,
    sv.txtTenSV,
    sv.txtEmail,
    sv.txtPass,
    sv.txtNgaySinh,
    sv.khSV,
    sv.txtDiemToan,
    sv.txtDiemLy,
    sv.txtDiemHoa
  );

  createSinhVien(newSinhVien);

  // ❌: Có thể bị lỗi.
  // new SinhVien(...sv);

  // Clear form input người dùng đã nhập vào.
  formEle.reset();
};

// Lắng nghe trang web đã tải xong.
document.addEventListener("DOMContentLoaded", () => {
  renderTableSinhVien();
});
