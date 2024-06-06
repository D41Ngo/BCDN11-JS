import { fetchApi } from "./config.js";

export const listSinhVien = [];
const toastEle = document.getElementById("liveToast");

export let isEdit = false;
let idStudentEdit = null;

function render(response) {
  const tbodyEle = document.getElementById("tbodySinhVien");

  const content = response
    .map((item) => {
      return `
        <tr>
            <td>${item.msv}</td>
            <td>${item.name}</td>
            <td>${item.email}</td>
            <td>${item.birthday}</td>
            <td>${item.course}</td>
            <td>${tinhDiemTrungBinh(
              item.math,
              item.physic,
              item.chemistry
            )}</td>
            <td>
                <button class="btn btn-warning" onclick="suaSinhVien('${encodeURI(
                  JSON.stringify(item)
                )}')">Sửa</button>
                <button class="btn btn-danger" onclick="xoaSinhVien('${
                  item.id
                }')">Xóa</button>
            </td>
        </tr>
    `;
    })
    .join("");

  // render ra giao diện
  tbodyEle.innerHTML = content;
}

export const renderTableSinhVien = () => {
  /**
   * 1. Gọi Api để lấy danh sách sinh viên về.
   * 2. Render danh sách ra giao diện.
   */

  // Lấy dữ liệu
  // students: promise
  const studentsPromise = fetchApi("student", {
    method: "GET",
  });

  //   then: Lắng nghe response thành công.
  //   catch: Lắng nghe response thất bại.
  studentsPromise
    .then((response) => {
      if (response.ok) {
        // Chuyển dữ liệu nhận được là JSON và parse về kiểu dữ liệu JS.
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((response) => {
      render(response);
    })
    .catch((err) => {
      console.log({ err });
    });
};

export const createSinhVien = (sv) => {
  console.log(1);

  fetchApi("student", {
    method: "POST",
    body: JSON.stringify(sv),
  })
    // .then(() => {})
    // .catch(() => {})
    .finally(() => {
      console.log(2);
      renderTableSinhVien();
    });

  console.log(3);
};

const mapper = {
  txtMaSV: "msv",
  txtTenSV: "name",
  txtEmail: "email",
  txtPass: "password",
  txtNgaySinh: "birthday",
  khSV: "course",
  txtDiemToan: "math",
  txtDiemLy: "physic",
  txtDiemHoa: "chemistry",
};

const handleInput = () => {
  // Cứ mỗi lần nhập vào thì sẽ gắn lại giá trị cũ. ngăn chặn nhập giá trị mới.
  ele.value = sv.msv;
};

export const suaSinhVien = (sv) => {
  isEdit = true;

  sv = JSON.parse(decodeURI(sv));

  idStudentEdit = sv.id;

  console.log("🚀 >>>::::::::: sv :::::::::", sv);

  /**
   * 1. Đưa dữ liệu của sinh viên lên lại trên form.
   * 2. Không cho chỉnh sửa mã sinh viên.
   */

  /**
   * 1. Lấy được tất cả các ô input.
   * 2. Nhận diện được.
   */

  const listEle = document.querySelectorAll(
    "#formQLSV input, #formQLSV select"
  );

  listEle.forEach((ele) => {
    // let value = '';

    // switch (ele.id) {
    //   case "txtMaSV":
    //     value = sv.msv;
    //     break;
    //   case "txtTenSV":
    //     value = sv.name;
    //     break;
    // }

    // mapper[ele.id];

    // sv[mapper[ele.id]]
    ele.value = sv[mapper[ele.id]];

    // 2....
    if (ele.id === "txtMaSV") {
      // UI.
      ele.disabled = "true";

      // Không cho phép nhập.
      ele.addEventListener("input", handleInput);
    }
  });
};
window.suaSinhVien = suaSinhVien;

export const xoaSinhVien = (id) => {
  console.log({ id });

  fetchApi(`student/${id}`, {
    method: "delete",
  })
    .then((response) => {
      if (response.ok) {
        // Chuyển dữ liệu nhận được là JSON và parse về kiểu dữ liệu JS.
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((response) => {
      console.log(response);

      /**
       * 1. Show toast
       * 2. Thay đổi nội dung của toast
       * 3. Tự động tắt toast sau 3s
       */

      toastEle.classList.add("show");

      // document.querySelector

      /**
       * querySelector
       * querySelectorAll
       * getElementById
       *
       * của element
       */
      // document.querySelector("#idLiveToast .toast-body");
      const toastBodyEle = toastEle.querySelector(".toast-body");

      toastBodyEle.innerHTML = `Xóa sinh viên: ${response.name} thành công`;

      // Sau 3s thì ẩn toast
      setTimeout(() => {
        toastEle.classList.remove("show");
      }, 3000);

      // Nếu như thành công thì sẽ render lại table sinh viên.
      renderTableSinhVien();
    })
    .catch((err) => {
      console.log(err);
    });
};
// Thêm thuộc tính xoaSinhVien vào đối tượng window là một function để cho phép bên phía file HTML có thể gọi được function xoaSinhVien
window.xoaSinhVien = xoaSinhVien;

export const updateSinhVien = (sv) => {
  isEdit = false;

  console.log(sv);

  fetchApi(`student/${idStudentEdit}`, {
    method: "put", // "PUT"
    body: JSON.stringify(sv),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((response) => {
      console.log(response);

      /**
       * Mở chặn của input msv
       */
      const msvEle = document.getElementById("txtMaSV");
      msvEle.disabled = false;
      msvEle.removeEventListener("input", handleInput);
      idStudentEdit = null;

      renderTableSinhVien();
    })
    .catch((error) => {
      console.log(error);
    });
};

const tinhDiemTrungBinh = (...diems) => {
  let total = 0;

  for (let diem of diems) {
    // total += diem;
    total = total + diem;
  }

  return (total / diems.length).toFixed(2);
};

const _tinhDiemTrungBinh = (...diems) => {
  const total = diems.reduce((total, item) => {
    return total + item;
  }, 0);

  return total / diems.length;
};

class FakeArray {
  constructor(arr) {
    this.arr = arr;
  }

  reduce(fn, init = this.arr[0]) {
    let total = init;

    for (let item of this.arr) {
      // total += diem;
      total = fn(total, item);
    }

    return total;
  }
}

document.getElementById("btnSearch").onclick = () => {
  const searchEle = document.getElementById("txtSearch");

  fetchApi(`student?name=${searchEle.value}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response.statusText);
      }
    })
    .then((resp) => {
      render(resp);
    })
    .catch((error) => {
      console.log(error);
    });
};
