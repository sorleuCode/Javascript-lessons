

// ARRAY IN DETAILS

let cohorts = ["Soliu", "Zainab", "Azeez", "Nafisat", "sir Kenny", "Baba Oloye", "Abdul Lateef"];
console.log(cohorts);

// replacing  an array element
const replaceEl = (cohorts[0] = "Bashirat");
// adding element to the end of array
cohorts[7] = "Bolaji"

// Array Methods:
// .Push()
const students = ["Yemi", "Sola", "Grace", "Maryam", "Femi", "Bola"];
console.log(students);

const pushed = students.push("Babe", "Rofiat", "Rahmat");
console.log(pushed);
console.log(students);

// .pop() method

const numbers = [3, 4, 5, 6, 7, 8, 9];

const popped = numbers.pop()
console.log(popped);
console.log(numbers);

// .shift() method: This removes the first element of the array
const colors = ["Violent", "Red", "Blue", "Black"];
console.log(colors.shift());
const rmFirst = colors.shift();
console.log(rmFirst);
console.log(colors);

// .unshift() method: This adds first element to the array

const months = ["March", "July", "September", "Janauary"];
console.log(months);
const addMonth = months.unshift("February");
console.log(addMonth);
console.log(months);

// .splice() method

const countries = ["kenya", "Malaysia", "Canada", "Qatar", "Nigeria"];
console.log(countries);

countries.splice(3, 1,"Egypt", "Ghana");
console.log(countries);

const wears = ["Gucci", "Vercace", "D&G", "Nike", "LV"];
console.log(wears);

wears.splice(3);
console.log(wears);

const drinks = ["coke", "viju", "Gin", "Exotic", "Bobo"];
console.log(drinks);
drinks.splice(2, 1);
console.log(drinks);

// .slice() method
const men = ["Tunmise", "Kenny", "Soliu", "Bode", "Abee", "Hayzed"];
console.log(men);
console.log(men.slice(2,5));


const newString = "Nafeesah";
console.log(newString.length);
const newSlice = newString.slice(2, 7);
console.log(newSlice);

const myName = "Soliu"
console.log(myName.slice(1, 4));


// .toString() method: This turns an array into a string

const menString = men.toString();
console.log(menString);

// .includes() methods: This search or verify  if an element is included in an array.

const checkMen = men.includes("Soliu")
console.log(checkMen);
const checkMen2 = men.includes("Bash");
console.log(checkMen2);

// .sort() method: This arrange the array elements in alphabetical order
men.sort();
console.log(men);

const alph = ["G", "F", "K", "A", "B", "Z"];
console.log(alph);

alph.sort();
console.log(alph);

const nums = [9, 7, 6, 8, 15, 25, 35, 99, 5, 1, 3, 2, 4];
console.log(nums);

nums.sort((a, b) => a -b);
nums.sort((a, b) => b -a);

// .indexOf() method: This returns the index of the element we specified for it. And it is is the first encounter in case we have more than one copy of the element

const $number = [1, 4, 3, 6, 2, 9, 8, 2, 4, 7, 5, 2];
console.log($number);

const indexOne = $number.indexOf(2);
console.log(indexOne);

const tutor = ["Abdullahi", "Naheem", "Anate", "Seyi", "Soliu", "Anate"];
console.log(tutor);

const indexTt = tutor.indexOf("Anate");
console.log(indexTt);

// .lastIndexOf() method: This returns the index of the element we specified for it. And it is is the last encounter in case we have more than one copy of the element

const lastIndex = $number.lastIndexOf(2);
console.log(lastIndex);

// .forEach() method

// function declaration format

const _names =  ['Zainab', 'Bashirat', 'Nafeesah']

_names.forEach(function() {} );


// Arrow function format

// SYNTAX

_names.forEach((name, i, arr) => {
    console.log(name.toUpperCase());
    // console.log(i);
    // console.log(arr);
});

// Example 1

let _$numbers = [2, 4, 3, 1, 2, 4];
_$numbers.sort();


_$numbers.forEach((number, i, arr) => {
    console.log(number, i);
    
});

// Example 2
const mammals = ["Lion", "Cow", "Dog", "Cat"];

mammals.sort();
mammals.forEach((mammal, i) => console.log(mammal.toUpperCase(), i));


// Example 3
let totalVal = 0;
const trans = [42, 45, 26, 4, 13, 16];
trans.forEach((tran) => {
    console.log(totalVal, (totalVal += tran), tran);

})

console.log(totalVal);

// Example 4

_names.forEach((name) => console.log(`Congratulations ${name}, you don smoke igbo`)


);

// .map() method: This creates a new array populated with the results of calling a provided function on every element of the original array

const inventory = [
    {name: "rice", price: 4000},
    {name: "Beans", price: 4000},
    {name: "Semo", price: 4000},
    {name: "Yam", price: 4000},
    {name: "Garri", price: 4000}
];

// inventory.map((value) => {console.log(value)})

const price = inventory.map((value) => {
    return value.price;
})

console.log(price);


const naMes = inventory.map((value) => {
    return value.name;
})

console.log(naMes);

// class-work

const numBers = [1, 2, 3, 4, 5, 6, 7];
console.log(numBers);

const newMultiple = numBers.map((value) => {
    return value * 2;
})

console.log(newMultiple);





// class work

// ES5

// for (i = 0; i < cohorts.length; i++) {
//     const result = cohorts[i];
//     console.log(i, result);
// }

// // ES6

// for(const result of cohorts) {
//     console.log(result);
// }


// // nested arrays
// const nestedArray = [[1, 2], [3,4], [5,6]];
// const newArray = nestedArray[0][1]
// console.log(newArray);

// // object

// const objectName = {name: "John", age: 60};
// console.log(objectName);

// // storing an object inside an array
// const arr = [
//     "Banana",
//     1000000,
//     {name: "Soliu", age: 30},
//     function name () {
//         alert("Booooooo😊");
//     }
// ]
// console.log(arr);
// console.log(typeof arr);




