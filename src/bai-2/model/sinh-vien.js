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
    this.ten = ten;
    this.email = email;
    this.matKhau = matKhau;
    this.ngaySinh = ngaySinh;
    this.khoaHoc = khoaHoc;
    this.diemToan = diemToan;
    this.diemLy = diemLy;
    this.diemHoa = diemHoa;
  }

  tinhDiemTB() {
    return (this.diemHoa + this.diemLy + this.diemToan) / 3;
  }

  xepLoai() {
    var dtb = this.tinhDiemTB();
  }
}
