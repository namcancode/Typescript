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
var hero = /** @class */ (function () {
    function hero(name, info, skill) {
        this.name = name;
        this.info = info;
        this.skill = skill;
    }
    hero.prototype.show = function () {
        var kn = '';
        for (var _i = 0, _a = this.skill; _i < _a.length; _i++) {
            var item = _a[_i];
            kn += item;
            kn += ' | ';
        }
        var thongsotuong = "\n        Ten tuong: " + this.name + "\n        Thong tin: " + this.info + "\n        Ki nang:" + kn + "\n        ";
        console.log(thongsotuong);
    };
    return hero;
}());
var satThu = /** @class */ (function (_super) {
    __extends(satThu, _super);
    function satThu(name, info, skill, donsatthu) {
        var _this = _super.call(this, name, info, skill) || this;
        _this.donsatthu = donsatthu;
        return _this;
    }
    satThu.prototype.show = function () {
        _super.prototype.show.call(this); //su dung lai super class cha
        //dinh nghia them cai cua child
        console.log("Don sat thu cua tuong nay la: " + this.donsatthu);
    };
    return satThu;
}(hero));
var ashe = new hero('Ashe', 'Cung Bang', ['tan xa tien', 'Ung tien', 'Dai bang tien']);
var talon = new satThu('Talon', 'Sat thu bong dem', ['Am khi', 'tan cong'], 'Sat thu vo hinh');
ashe.show();
console.log(talon.show());
