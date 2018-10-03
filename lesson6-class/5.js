class heroo {
    constructor(_ten) {
        this._ten = _ten;
    }
    get ten() {
        return this._ten;
    }
    set ten(v) {
        this._ten = v;
    }
}
const zeus = new heroo('zeus');
console.log(`ten tuong: ${zeus.ten}`);
zeus.ten = 'than zeus';
console.log(`ten tuong: ${zeus.ten}`);
