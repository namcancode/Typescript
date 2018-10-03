class charactor {
	name: string;
	slogan: string;
	heal: number;

	//de tao ra instance
	constructor(name: string, slogan: string, heal: number) {
		this.name = name;
		this.slogan = slogan;
	}
	chay() {}
	chem() {}
	showName() {
		return `Nhân vật tên là ${this.name},
         slogan: ${this.slogan}
        chỉ số máu là: ${this.heal}`;
	}
}
const char1 = new charactor('husky', 'ngao', 3000);
console.log(char1.showName());

class mobile {
	name: string;
	price: number;
	rate: number;
	color: string[];
	constructor(name: string, price: number, rate: number, color: string[]) {
		this.name = name;
		this.price = price;
		this.rate = rate;
		this.color = color;
	}
	show() {
		return `
		san pham: ${this.name},
		gia: ${this.price},
		rate: ${this.rate},
		color: ${this.color[0]}
		`;
	}
}
const product1 = new mobile('iphone X', 2000, 5, ['xanh', 'den', 'trang']);
console.log(product1.show());
