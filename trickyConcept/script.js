// GLOBAL AND LOCAL VARIABLES

// global scope:

const name = 'Zainab';
const age = 17;
const school = "Agege Primary School, Orile";

const one = () => {
    return `${name} of ${age} years attended ${school}`;
}
const answer = one();
console.log(answer);

const file = () => {
    return `${name} likes eating ${age} wraps of Semo in ${school}`;
}

const sentence = file();
console.log(sentence);

// local variables:

const localScope = () => {
    const name = "Oloye Pupo";
    const religion = "Muslim";
    const activity = "Drinking of Wine";
    return `${name} who is a ${religion} enjoys ${activity}`;
}

const oloye = localScope();
console.log(oloye);


// BLOCK SCOPE

const religion = "christian"

const exampleThree = () => {
    const name = "chima"
    if(true){
        // block scope
        const schoolName = "LASU"

        console.log(`${name} is a ${religion} and goes to ${schoolName}`)
    }
}
exampleThree(); 

// HOISTING 

// const a = 2  
// something here is similar to func expression and arrow function but it is not similar to function declaration

// const result = exampleFive()
// console.log(result)

// // function exampleFive(){
// //     return 2 + 2
// // }

// const exampleFive = ()  => {
//     return 2 + 2
// }

// const exampleFive = () => {
//     return 2 + 2
// }

const me = function (){}

const m = 2;
console.log(g)
var g


// CLOSURE: The scope regarding a function inside a function

const outerFunction = () => {
    const ben = 5;

    const innerFunction = () => {

        const man = 7;

        return ben + man;
    }

    return innerFunction() * 2;

}

const anser = outerFunction()

console.log(anser);


// A function that carries a function with the condition that if true, return a certain number, then return the final answer of the condition * 4

// And in the main function the final answer of the previous function should be divided by 2 


const mainFunction = () => {
    const certainNumber = 8;
    const mainNum = 2;

    const childFunction = () => {
        const cdnNumber = 4;

        if (certainNumber) {
            return certainNumber * cdnNumber;
        }

    }

    return childFunction() / mainNum;

}

const finalAnswer = mainFunction();

console.log(finalAnswer);
