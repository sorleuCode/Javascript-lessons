// Javascript function is a block of codes designed to perform a specific task
//  The js declaration  is done in three ways:
// function declaration, function expression and Arrow function

// function declaration :

function square(parameter) {
    // statement
}

square() // funcion calling


// function expression: it is storing the function in a variable

const nameFunction = function(params) {
    // statement
}


// Arrow function

const arrowFn = () => {}


// FUNCTION DECLARA EXAMPLES

function sayHello(firstName) {
    console.log(`Hello ${firstName}`);
}

sayHello('Hayzed');

// FUNCTION EXPRESSION EXAMPLE

const functionName = function(firstName) {
    console.log(`Hello ${firstName}`);
}

functionName(`Hayzed`);

// ARROW FUNCTION EXAMPLE

const fnName = (firstName) => 
    console.log(`Hello ${firstName}`);{
}

fnName(`Hayzed`);

// return statement

const division = (number) => {
    return number / number
}

const answer = division(5);
console.log(answer);

// no parenthesis needed for one parameter
const square2 = number => {return number * number};


// no curly braces needed if return statement is  not used
const square3 = number => number * number

// class work 

const  substraction = (bigNumber, smallNumber)=> {
     return bigNumber < smallNumber ? `Negative number detected. Though , the answer is ${bigNumber - smallNumber}` : bigNumber - smallNumber;
    //  return bigNumber < smallNumber ? `true` : `false`;
}
const answers = substraction(3, 2);

console.log(answers);
 
// const solution = substraction ( 1, 4);

// console.log(solution);

// Nested Function 

function getScore(num1, num2, name) {


    function add() {
        return `${name} is ${num1 + num2} years old`;
    }

    return add();
}
console.log(getScore(2, 4, "DLT Africa"));

// USING ARROW FUNCTION FOR NESTED FUNCTIONS

const nestedFunction = (a, b, c) => {

    const anotherFunction = () => {
        return `${a + b + c}`;
    };

    return anotherFunction();
};
console.log(nestedFunction(2, 4, 6));

// CLASS WORK: Declare a function with two parameters, check if the addition of the two parameters is >= 10, it should return a statement showing 'Sum is greater than or equuals to 10', if not - we should have the param1 + param2.

function checkFunction(num1, num2){
    let sum = num1 + num2;
    return sum >= 10 ? `Sum is greater than or equals to 10` : num1 + num2;
}

const greater = checkFunction(2, 10);
console.log(greater);

const lesser = checkFunction(1, 3);
console.log(lesser);

// check for even numbers

const isEven = (nestedGame) => {
    return nestedGame % 2 === 0 ? true : false;
}

const even = isEven(4)
console.log(even);

const odd = isEven(7);
console.log(odd);

// check prime numbers

const isPrime = (number) => {
    if (number <= 1 && number % 2 === 0) {
      return false;
    }
    else {
        return true;
    }
       
}

const  prime = isPrime()
console.log(prime)

