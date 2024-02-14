// variables.

// let - it allows you to change the value stored in a variable at a later time

//  const - it make data to be  stored permanently inside the variable 


// let

let message = "Hello Eeif!";

console.log(message);

message = "Hello Zainab";

console.log(message);

// const

const greeting = "Good morning my Neighbor";

console.log(greeting);

// class work


// 1

let studentName = "Soliu";

console.log(studentName);


// 2

let _soliu2$ = "student";

let dltAfrica = "bootcamp";

const muhammed_soliu = "fair";

console.log('Hello! ' + _soliu2$, dltAfrica + ' and ' + muhammed_soliu);



// Data type
// string - number - bigInt - Boolean - symbol - null - undefined - typeOf ** object - array - date

// string
// single string - ''
// double string - ""
// back ticks - ``

const singleQuote = 'Who am i?';
const doubleQuote = "WHo are you?";

console.log(singleQuote);
console.log(doubleQuote);

let name = "Team Lead";
const backTick = `Hello ${name}`;

console.log(backTick);

let newName = 'Toheeb';
let favouriteDrink = 'bobo'

const details = `My name is ${newName}, and my favourite drink is ${favouriteDrink}`;
console.log(details);

// classwork

const numberOne = 45;
const numberTwo = 10;

const addition = numberOne + numberTwo;

console.log(addition);

const substraction = numberOne - numberTwo;

console.log(substraction);

const multiply = numberOne*numberTwo;

console.log(multiply);

const divide = numberOne / numberTwo;

console.log(divide);

// boolean - True / False  

const isBeautiful = true;

// consol.log(typeof isBeautiful);

if (!isBeautiful) {
    console.log("This woman is beautiful");
} else {
    console.log("This wom. is ugly");
    
}

// NULL

let age = null;
console.log(age)


// undefined
let x;
console.log(x);

// symbol 
const valueOne = Symbol("hello");
const valueTwo = Symbol("hello");

console.log(valueOne.description);
