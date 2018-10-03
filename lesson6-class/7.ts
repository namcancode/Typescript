abstract class DienThoai {
	ten: string;
	abstract guitinnhan(): void;
	abstract goidienthoai(): string;
}

class android extends DienThoai {
	guitinnhan(): void {
		console.log('gui tin nhan android');
	}
	goidienthoai(): string {
			return 'goi dien thoai bang android';
	}
}

const samsung = new android();
samsung.guitinnhan();
console.log(samsung.goidienthoai());
