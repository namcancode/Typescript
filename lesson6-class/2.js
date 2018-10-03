var state;
(function (state) {
    state[state["Create"] = 10] = "Create";
    state[state["Processing"] = 11] = "Processing";
    state[state["Finish"] = 12] = "Finish";
})(state || (state = {}));
var congViec = /** @class */ (function () {
    function congViec(id, name, status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }
    congViec.prototype.thongTin = function () {
        return "\n        " + this.id + " - ten:" + this.name + " - trang thai " + this.status + "\n        ";
    };
    return congViec;
}());
var cv1 = new congViec(1, 'hoc Typescript', state.Finish);
console.log(cv1.thongTin());
