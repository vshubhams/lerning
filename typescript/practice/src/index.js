// Basic Types
var id = 5;
var company = "Shubham verma";
var isTrue = true;
var x = "Hello";
var age;
age = 21;
var ids = [1, 2, 3, 4, 5, 6];
var arr = [1, 2, "shubham", true];
//Tuple
var person = [1, "Shubham", true];
//Tuple Array
var employee;
employee = [
    [1, 'One'],
    [2, 'Two'],
    [3, 'Three']
];
// Union
var prodId;
prodId = 22;
prodId = "shubham";
// Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 2] = "Up";
    Direction1[Direction1["Down"] = 3] = "Down";
    Direction1[Direction1["Left"] = 4] = "Left";
    Direction1[Direction1["Right"] = 5] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Up);
console.log(Direction1.Left);
var user = {
    id: 1,
    name: "shubham"
};
