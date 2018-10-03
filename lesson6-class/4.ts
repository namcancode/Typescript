class khoahoc {
	public id: number;
	public ten: string;
	public dodai: number;

	constructor(id: number, ten: string, dodai: number) {
		this.id = id;
		this.ten = ten;
		this.dodai = dodai;
	}

	xemkhoahoc(): void {
		console.log(`
        ID khoa hoc la: ${this.id},
        Ten khoa hoc: ${this.ten};
        Do dai: ${this.dodai} tieng
        `);
	}
}

class khoahoclaptring extends khoahoc {
	filedinhkem: string;

	constructor(id: number, ten: string, dodai: number, filedinhkem: string) {
		super(id, ten, dodai);
		this.filedinhkem = filedinhkem;
	}

	xemkhoahoc(): void {
		super.xemkhoahoc();
		console.log(`File dinh kem: ${this.filedinhkem}`);
	}
}

//test public
//test trong class

const khoa1 = new khoahoc(8, 'frontend', 4);
console.log(khoa1.ten);

const khoa2 = new khoahoclaptring(9, 'backend', 13, 'a.zip');
console.log(khoa2.ten);
