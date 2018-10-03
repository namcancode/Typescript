import { SanPham } from "./sanpham";
export class QuanLyHang {
    constructor() {
        this.hang = [];
        console.log("test quanlyhang");
    }
    getCacSanPham() {
        return [];
    }
    getSanPhamById() {
        const motsanpham = new SanPham(1, "sp1", 90000, "mota", true, "image");
        return motsanpham;
    }
    addSanPham() { }
    showSanPham() {
        return "";
    }
}
