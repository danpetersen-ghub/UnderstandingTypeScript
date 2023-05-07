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
//function printResult(num: number): void 
/*

: void  meand that it doesnt return anything - this doesnt exist in regular JS
this is the return tyoe

*/
function printResult(num) {
    console.log('result is: ' + num);
    return;
}
function printResult2(num) {
    console.log('result is: ' + num);
}
function printResult3(num) {
    console.log('result is: ' + num);
}
add(number1, number2);
printResult(add(10, 25));
