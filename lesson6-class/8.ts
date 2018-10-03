/* class mayTinh {
	ten: string;
	static xemThongtin<T>(x: T[]): void {
		console.log(`X: ${x}`);
	}
}
mayTinh.xemThongtin<string>(['hello', 'hi', 'say good bye']);
mayTinh.xemThongtin<any>(['dell', 3, true]);
 */
/* interface person {
	age: number;
	name?: string; // co the co hoac khong
}

function showInfo(person: person): void {
	console.log(`Xin chao ${person.name}, tuoi: ${person.age}`);
} */
// showInfo({age:30,name:"nam"})

interface tuongInterface {
	ten: string;
	mau: number;
	satthuong: number;
	mota: string;

	xemtuong(): void;
	skill(mau: number): any;
	bienve(): void;
}

class tuong implements tuongInterface {
	ten: string;
	mau: number;
	satthuong: number;
	mota: string;
    mana:string
	xemtuong(): void {
		console.log('xem');
	}
	skill(mau: number): any {
		console.log('skill');
	}
	bienve(): void {
		console.log('bienve');
	}
}

//namespace va export
module androidd{
   export class String {
    }
   export class Number{}
}