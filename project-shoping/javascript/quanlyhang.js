"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sanpham_1 = require("./sanpham");
var QuanLyHang = /** @class */ (function () {
    function QuanLyHang() {
        this.hang = [];
    }
    QuanLyHang.prototype.getCacSanPham = function () {
        return [];
    };
    QuanLyHang.prototype.getSanPhamById = function () {
        var motsanpham = new sanpham_1.SanPham(1, 'sp1', 90000, 'mota', true, 'image');
        return motsanpham;
    };
    QuanLyHang.prototype.addSanPham = function () { };
    QuanLyHang.prototype.showSanPham = function () {
        return;
    };
    return QuanLyHang;
}());
exports.QuanLyHang = QuanLyHang;
