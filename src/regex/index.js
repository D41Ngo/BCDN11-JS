const regexNumber = /^\d+$/g;
const input = "012345";

console.log(regexNumber.test(input)); // false

const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const inputEmail = "fasdfbasfdsda@gmail";

console.log(regexEmail.test(inputEmail));

/**
 *
 *
 *
 */

class ChuyenXe {
  constructor() {
    console.log(3);
    this.soXe = "";
    this.hoTenTaiXe = "";
  }
}

class ChuyenXeNoiThanh extends ChuyenXe {
  constructor() {
    // Gọi super trước khi khai báo thuộc tính
    // super: chính là class Cha mà kết thừa
    console.log(1);
    super(); // gọi constructor của cha
    console.log(2);
    
    this.soTuyen = "";
    this.soKMDiDuoc = "";
  }
}

class ChuyenXeNgoaiThanh extends ChuyenXe {
  constructor() {
    super();

    this.noiDen = "";
    this.soNgayDiDuoc = "";
  }
}

console.log(new ChuyenXeNoiThanh())
console.log(new ChuyenXeNgoaiThanh())
