var charactor = /** @class */ (function () {
    //de tao ra instance
    function charactor(name, slogan, heal) {
        this.name = name;
        this.slogan = slogan;
    }
    charactor.prototype.chay = function () { };
    charactor.prototype.chem = function () { };
    charactor.prototype.showName = function () {
        return "Nh\u00E2n v\u1EADt t\u00EAn l\u00E0 " + this.name + ",\n         slogan: " + this.slogan + "\n        ch\u1EC9 s\u1ED1 m\u00E1u l\u00E0: " + this.heal;
    };
    return charactor;
}());
var char1 = new charactor('husky', 'ngao', 3000);
console.log(char1.showName());
var mobile = /** @class */ (function () {
    function mobile(name, price, rate, color) {
        this.name = name;
        this.price = price;
        this.rate = rate;
        this.color = color;
    }
    mobile.prototype.show = function () {
        return "\n\t\tsan pham: " + this.name + ",\n\t\tgia: " + this.price + ",\n\t\trate: " + this.rate + ",\n\t\tcolor: " + this.color[0] + "\n\t\t";
    };
    return mobile;
}());
var product1 = new mobile('iphone X', 2000, 5, ['xanh', 'den', 'trang']);
console.log(product1.show());
