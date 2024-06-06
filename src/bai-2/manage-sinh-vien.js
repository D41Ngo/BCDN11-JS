import { fetchApi } from "./config.js";

export const listSinhVien = [];

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
      // Chuyển dữ liệu nhận được là JSON và parse về kiểu dữ liệu JS.
      return response.json();
    })
    .then((response) => {
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
                <td></td>
                <td>
                    <button class="btn btn-warning">Sửa</button>
                    <button class="btn btn-danger">Xóa</button>
                </td>
            </tr>
        `;
        })
        .join("");

      // render ra giao diện
      tbodyEle.innerHTML = content;
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

export const suaSinhVien = (id) => {};

export const xoaSinhVien = (id) => {};

export const updateSinhVien = () => {};
