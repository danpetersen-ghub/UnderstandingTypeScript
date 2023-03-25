// Types:
//Number
var num = 1;
//console.log(num); // => 1
//string
var string = "stringify";
// console.log(string); //=> stringify
// Explanation
function add(num1, num2) {
    return num1 + num2;
}
var number1 = 3;
var number2 = 7;
var result = add(number1, number2);
console.log("result is: ", result);
// Objects
var person = {
    name: "dan",
    age: 40,
    sports: ["cricket", "rugby"]
};
for (var _i = 0, _a = person.sports; _i < _a.length; _i++) {
    var sport = _a[_i];
    console.log(sport.toUpperCase());
}
