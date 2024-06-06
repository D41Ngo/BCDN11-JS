// Tạo lớp đối tượng sinh viên.
export class SinhVien {
  constructor(
    msv,
    ten,
    email,
    matKhau,
    ngaySinh,
    khoaHoc,
    diemToan,
    diemLy,
    diemHoa
  ) {
    this.msv = msv;
    this.name = ten;
    this.email = email;
    this.password = matKhau;
    this.birthday = ngaySinh;
    this.course = khoaHoc;
    this.math = diemToan;
    this.physic = diemLy;

    // @test
    this.chemistry = diemHoa;
  }

  tinhDiemTB() {
    return (this.diemHoa + this.diemLy + this.diemToan) / 3;
  }

  xepLoai() {
    var dtb = this.tinhDiemTB();
  }
}
