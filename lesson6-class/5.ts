class heroo {
	private _ten: string;
	constructor(_ten: string) {
		this._ten = _ten;
	}
	public get ten(): string {
		return this._ten;
	}

	public set ten(v: string) {
		this._ten = v;
	}
}

const zeus = new heroo('zeus');
console.log(`ten tuong: ${zeus.ten}`);
zeus.ten = 'than zeus';
console.log(`ten tuong: ${zeus.ten}`);
