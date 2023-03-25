// Types:

//Number
const num = 1 as number;
//console.log(num); // => 1

//string
const string = "stringify" as string;
// console.log(string); //=> stringify


// Explanation
function add(num1: number, num2: number) {
    return num1 + num2;
}

const number1 = 3;
const number2 = 7;

const result = add(number1, number2);
console.log("result is: ", result)


// Objects

const person: {
    name: string;
    age: number;
    sports: string[];
} = {
    name: "dan",
    age: 40, 
    sports: ["cricket", "rugby"]
};

for( const sport of person.sports) {
    console.log(sport.toUpperCase());
}

