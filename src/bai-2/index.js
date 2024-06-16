import { SinhVien } from "./model/sinh-vien.js";
import {
  createSinhVien,
  isEdit,
  renderTableSinhVien,
  updateSinhVien,
  mapper,
} from "./manage-sinh-vien.js";
import { Validator } from "./model/validator.js";
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

const listEle = document.querySelectorAll("#formQLSV input, #formQLSV select");

formEle.onsubmit = (event) => {
  // Chặn đi sự kiện mặc định của thẻ form: reload page.
  event.preventDefault();

  forceValidate();

  // Nếu còn có lỗi thì không cho submit
  if (!isValid()) {
    return;
  }

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
    Number(sv.txtDiemToan),
    +sv.txtDiemLy,
    +sv.txtDiemHoa
  );

  if (isEdit) {
    updateSinhVien(newSinhVien);
  } else {
    createSinhVien(newSinhVien);
  }

  // ❌: Có thể bị lỗi.
  // new SinhVien(...sv);

  // Clear form input người dùng đã nhập vào.
  formEle.reset();
};

// Lắng nghe trang web đã tải xong.
document.addEventListener("DOMContentLoaded", () => {
  renderTableSinhVien();
});

/**
 *
 * 1. Validate khi người dùng rời khỏi input
 * 2. Tạo một biến lưu trữ những ô input mà người dùng đã từng đi qua.
 * - visited
 * - touches ✅
 *
 * 3. Chưa nhập dữ liệu nhưng nhấn button submit
 * - Xét cho biến lưu trữ toàn bộ ô input là người dùng đã đi qua.
 * - Validate
 */
/**
 * msv: bắt buộc, ký tự chữ, ít nhất là 3 ký tự, nhiều nhất là 10 ký tự.
 * name: bắt buộc, ký tự chữ, ít nhất là 2 ký tự, nhiều nhất là 50 ký tự.
 * email: bắt buộc, email.
 * password: bắt buộc, có ít nhất 1 ký tự in hoa + 1 ký tự số + 1 ký tự đặc biệt.
 * birthday: bắt buộc.
 * course: bắt buộc.
 * math: bắt buộc, number, ít nhất 0, nhiều nhất 10.
 * physic: bắt buộc, number, ít nhất 0, nhiều nhất 10.
 * chemistry: bắt buộc, number, ít nhất 0, nhiều nhất 10.
 */

function handleValidate() {
  const filterSinhVien = Object.entries(sinhVien).filter(([key, value]) => {
    return value.touch === true;
  });

  filterSinhVien.forEach(([key, value]) => {
    switch (key) {
      case "msv":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isOnlyString()
          .min(3)
          .max(10).message;
        break;
      case "name":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isOnlyString()
          .min(2)
          .max(50).message;
        break;

      case "email":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isEmail().message;
        break;

      case "password":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isPassword()
          .min(6)
          .max(20).message;
        break;

      case "birthday":
        sinhVien[key].errMsg = new Validator(value.value).isRequire().message;
        break;
      case "course":
        sinhVien[key].errMsg = new Validator(value.value).isRequire().message;
        break;
      case "math":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isNumber()
          .min(0)
          .max(10).message;
        break;
      case "physic":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isNumber()
          .min(0)
          .max(10).message;
        break;
      case "chemistry":
        sinhVien[key].errMsg = new Validator(value.value)
          .isRequire()
          .isNumber()
          .min(0)
          .max(10).message;
        break;
      default:
        break;
    }
  });
}

function handleBlur(event) {
  // value
  sinhVien[mapper[event.target.id]].value = event.target.value;

  // validate
  // 1. Chỉ validate những ô input đã từng đi qua.

  // Convert Object -> Array: Object.entries(obj), Object.keys(obj), Object.values(obj)

  handleValidate();

  renderForm();
}

const mapperErrors = {
  spanMaSV: "msv",
  spanTenSV: "name",
  spanEmailSV: "email",
  spanMatKhau: "password",
  spanNgaySinh: "birthday",
  spanKhoaHoc: "course",
  spanToan: "math",
  spanLy: "physic",
  spanHoa: "chemistry",
};
function renderForm() {
  const listEleErrs = document.querySelectorAll(
    "#formQLSV input + span, #formQLSV select + span"
  );

  listEleErrs.forEach((ele) => {
    const key = mapperErrors[ele.id];

    if (sinhVien[key].touch) {
      ele.innerHTML = sinhVien[key].errMsg;
    }
  });
}

function handleFocus(event) {
  // event.target: ele mà chúng ta thêm sự kiện vào.
  // console.log("id", event.target.id);

  // if (event.target.id === "txtMSV") {
  //   sinhVien.msv.touch = true;
  // }

  // Xét touch
  sinhVien[mapper[event.target.id]].touch = true;
}

function isValid() {
  return Object.values(sinhVien).every((item) => {
    return item.errMsg === "";
  });
}

// dành cho trường hợp số 3;
function forceValidate() {
  // Cập nhật tất cả đều là đã từng đi qua.
  Object.values(sinhVien).forEach((item) => {
    item.touch = true;
  });

  handleValidate();

  renderForm();
}

class DefaultValue {
  constructor(touch = false, value = "", errMsg = "") {
    this.touch = touch;
    this.value = value;
    this.errMsg = errMsg;
  }
}

const sinhVien = {
  msv: new DefaultValue(),
  name: new DefaultValue(),
  email: new DefaultValue(),
  password: new DefaultValue(),
  birthday: new DefaultValue(),
  course: new DefaultValue(),
  math: new DefaultValue(),
  physic: new DefaultValue(),
  chemistry: new DefaultValue(),
};

listEle.forEach((ele) => {
  ele.onblur = handleBlur;

  ele.onfocus = handleFocus;
});
