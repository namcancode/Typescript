import { SanPham } from "./sanpham";
export class QuanLyHang {
	private hang: SanPham[] = [];
	constructor() {
		console.log("test quanlyhang");
	}
	getCacSanPham(): SanPham[] {
		return [];
	}
	getSanPhamById(): SanPham {
		const motsanpham = new SanPham(1, "sp1", 90000, "mota", true, "image");
		return motsanpham;
	}
	addSanPham(): void {}
	showSanPham(): string {
		return "";
	}

}
