import { SanPhamGioHang } from "./sanphamgiohang";
import { SanPham } from "./sanpham";
export class QuanLyGioHang {
	private CacSanPhamTrongGioHang: SanPhamGioHang[] = [];

	addSanPhamTrongGioHang(motsanpham: SanPham, soLuong: number): void {}
	updateSanPhamTrongGioHang(motsanpham: SanPham, soLuong: number): void {}
	kiemTraTrangThaiSanPham(): void {}
	tinhSoLuong(): number {
		return;
	}
	tinhGia(): number {
		return;
	}
	hienThiGioHang(): string {
		return;
	}
	constructor() {}
}
