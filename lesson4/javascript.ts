/* let chu: string;
chu = "viet";

var chu2: string;
chu2 = "sinh nam 2000";
console.log(`Xin Chào ${chu}, có phải bạn ${chu2}
`);

let x: number;
x = 10;
console.log(x);

var hocvien: string[];
hocvien = ["teo", "huy", "huong"];
for (let item of hocvien) {
	console.log(item);
}

let flag: boolean = true;
console.log(flag);

enum trangthai {
	moidangky = 10,
	dathutien = 150,
	hoanthanh = 243
}
console.log(trangthai.dathutien);

//kieu tuple
let tuple1: [string, number] = ["nam", 0];
console.log(tuple1);

function tinhtoan(): void {
	// body
	console.log("hello void");
}
tinhtoan()

//ep kiểu

let kieu1 :any;
kieu1= "day la vi du ve ep kieu"
console.log((<string>kieu1).length);
console.log((kieu1 as string).length);

 */

/* // hàm trả về kiểu number
function tinhtong(): number {
	// body
	return 100 + 154;
}
console.log(tinhtong()); //trả về là 1 giá trị
//hàm trả về string
function kieustring(): string {
	// body
	return "chao buoi sang";
}
console.log(kieustring());

//hàm trả về kiểu mảng chữ
function mang(): string[] {
	return ["a", "b", "c"];
}
console.log(mang());

//kiểu mảng số
function mangso(): number[] {
	return [4, 2, 6, 23, 3, 6, 7];
}

console.log(mangso());

//mang kieu doi tuong any
function doituong(): any {
	// body
	var charactor = {
		name: "checked",
		skill: {
			skillA: "invisible",
			skillB: "bomber"
		}
	};
	return charactor;
}
console.log(doituong()); */

let x: number = 10;
let y: number = 15;
let tbc: number = (x + y) / 2;
// console.log("tbc :", tbc);

let z = function(x: number, y: string): string {
	return `Chao ${y}, nam nay ban ${x} tuoi co phai khong?`;
};
let g: (x: number, y: string) => string = function(x, y) {
	return `Chao ${y}, nam nay ban ${x} tuoi co phai khong?`;
};
// console.log(g(31,"Viet"));

const h = (x: number): number => {
	return x + 10;
};
console.log(h(9));
function tinh6(x: number): number {
	return x + 10;
}

console.log(tinh6(10));
