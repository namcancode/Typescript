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
class tuong {
    xemtuong() {
        console.log('xem');
    }
    skill(mau) {
        console.log('skill');
    }
    bienve() {
        console.log('bienve');
    }
}
//namespace va export
var androidd;
(function (androidd) {
    class String {
    }
    androidd.String = String;
    class Number {
    }
    androidd.Number = Number;
})(androidd || (androidd = {}));
