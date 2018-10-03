let pass: string = 'hello';
class Human {
	private _name: string;
	public get name() {
		if (pass == 'hello') {
			return this._name;
		} else {
			return `sai mat khau`;
		}
	}

	public set name(v: string) {
		if (pass === 'hello') {
			this._name = v;
		} else {
			this._name = 'sai pass';
		}
	}
}

const human1 = new Human();
pass = ""
human1.name = 'nam nguyen';

console.log(human1.name);
