class hero {
	name: string;
	info: string;
	skill: string[];

	constructor(name: string, info: string, skill: string[]) {
		this.name = name;
		this.info = info;
		this.skill = skill;
	}
	show(): void {
		let kn: string = '';
		for (const item of this.skill) {
			kn += item;
			kn += ' | ';
		}
		const thongsotuong = `
        Ten tuong: ${this.name}
        Thong tin: ${this.info}
        Ki nang:${kn}
        `;
		console.log(thongsotuong);
	}
}

class satThu extends hero {
	donsatthu: string;
	constructor(name: string, info: string, skill: string[], donsatthu: string) {
		super(name, info, skill);
		this.donsatthu = donsatthu;
	}
	show(): void {
		super.show(); //su dung lai super class cha
		//dinh nghia them cai cua child
		console.log(`Don sat thu cua tuong nay la: ${this.donsatthu}`);
	}
}
const ashe = new hero('Ashe', 'Cung Bang', ['tan xa tien', 'Ung tien', 'Dai bang tien']);
const talon = new satThu('Talon', 'Sat thu bong dem', ['Am khi', 'tan cong'], 'Sat thu vo hinh');
ashe.show();
console.log(talon.show());
