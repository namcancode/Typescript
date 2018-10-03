var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var khoahoc = /** @class */ (function () {
    function khoahoc(id, ten, dodai) {
        this.id = id;
        this.ten = ten;
        this.dodai = dodai;
    }
    khoahoc.prototype.xemkhoahoc = function () {
        console.log("\n        ID khoa hoc la: " + this.id + ",\n        Ten khoa hoc: " + this.ten + ";\n        Do dai: " + this.dodai + " tieng\n        ");
    };
    return khoahoc;
}());
var khoahoclaptring = /** @class */ (function (_super) {
    __extends(khoahoclaptring, _super);
    function khoahoclaptring(id, ten, dodai, filedinhkem) {
        var _this = _super.call(this, id, ten, dodai) || this;
        _this.filedinhkem = filedinhkem;
        return _this;
    }
    khoahoclaptring.prototype.xemkhoahoc = function () {
        _super.prototype.xemkhoahoc.call(this);
        console.log("File dinh kem: " + this.filedinhkem);
    };
    return khoahoclaptring;
}(khoahoc));
//test public
//test trong class
var khoa1 = new khoahoc(8, 'frontend', 4);
console.log(khoa1.ten);
var khoa2 = new khoahoclaptring(9, 'backend', 13, 'a.zip');
console.log(khoa2.ten);
