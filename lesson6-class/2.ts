enum state {
	Create = 10,
	Processing,
	Finish
}
class congViec {
	id: number;
	name: string;
	status: state;
	constructor(id: number, name: string, status: state) {
		this.id = id;
		this.name = name;
		this.status = status;
	}
	thongTin() {
		return `
        ${this.id} - ten:${this.name} - trang thai ${this.status}
        `;
	}
}
const cv1 = new congViec(1, 'hoc Typescript', state.Finish);
console.log(cv1.thongTin());
