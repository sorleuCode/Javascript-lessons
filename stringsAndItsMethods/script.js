// //  Types of strings

// // single quote ('')
// const worlds = ' i am a boy'

// // double quote ("")
// const words = " i am a boy"

// // backticks (``)
// const world = `i am a boy`


// const age = 12;
// const school = 'DLT';
// const name = 'Eef';


// const sentence = `my name is ${name}, i am ${age} years old and i go to ${school} school`;

// console.log(sentence);

// const math = "2 + 2";

// const mathematics = `${2 + 2}`
// const lines = `1
// 2
// 3
// 3
// 4
// 5`

// console.log(lines);

// const numerals = `Hello i'm Aliyu and i am from "Kogi state"`

// console.log(numerals)

// checking the length of a string

const  name  = "Hayzed";

console.log(name.length);

console.log(name[0]);

// changing the case of string;

const words = "i am a boy";

const word = "SHE IS A GIRL";

console.log(words.toUpperCase());

console.log(word.toLowerCase());

//Checking for Substring

const man = "I love coding and my favourite language is javascript"

const final = man.indexOf('javascript');

console.log(final);

// checking if a substring is present in a string

const check = man.includes('favourite');

const starting = man.startsWith('I');
const ending = man.endsWith('t');

console.log(check);
console.log(starting);
console.log(ending);

// getting a substring using the following string methods:

// .slice()


const exampleString = "Hotdog";
console.log(exampleString.slice());
console.log(exampleString.slice(0, 3));
console.log(exampleString.slice());

// .split()

const sentence1 = "The quick brown fox jumped over the lazy dog";

console.log(sentence1.split(' '));

// .reverse() , .join() and .repeat()

// .reverse()

const name4 = "Nafisat and Zainab";
const split1 = name4.split(' ');
console.log(split1); 

const revers = split1.reverse()
console.log(revers);

// .join()


const join1 = revers.join('-');

console.log(join1);

// .repeat() 
const dogSays = "woof "
console.log(dogSays.repeat(2));

// .trim()

const trim1 = " @example.com "
console.log(trim1.trim())



