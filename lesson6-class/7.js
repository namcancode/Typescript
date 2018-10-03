class DienThoai {
}
class android extends DienThoai {
    guitinnhan() {
        console.log('gui tin nhan android');
    }
    goidienthoai() {
        return 'goi dien thoai bang android';
    }
}
const samsung = new android();
samsung.guitinnhan();
console.log(samsung.goidienthoai());
