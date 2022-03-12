// export {}
console.log("nghia");
var a = 10;
var b = 100;
var c = false;
var myName = "nghia duc truong";
var me = {
    id: 1,
    name: "Trương Đức Nghĩa",
    age: 20,
    marriage: true
};
console.log(me);
function myFunction(a, b) {
    return a + b;
}
console.log(myFunction(a, b));
var getProducts = function (products) {
    var result = products;
    console.log(result);
};
getProducts([{ id: 1, name: "NGHIA" }, { id: 2, name: "NHUNG" }]);
