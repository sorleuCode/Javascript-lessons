

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


// ARRAY FILTER

// .filter() method: it is used to filter the elements of the array

const numberS = [-10, 0, -2, 4, -9, 6, -8];
const filteredNumbers = numberS.filter((number) => {
    return number < 0;
})

console.log(filteredNumbers);


// Using for loop to filter

let filtered = [];
for (let i = 0; i < numberS.length; i++) {
    if (numberS[i] < 0) {
        filtered.push(numberS[i]);
    }
}
console.log(filtered);


// other examples
const employees = [
    {name: "Mohammed", overtime: 10},
    {name: "Aishat", overtime: 5},
    {name: "Bolaji", overtime: 4},
    {name: "Chris", overtime: 7},
    {name: "Ben", overtime: 9},
    {name: "Munirat", overtime: 12},
]

const employeesToReward = employees.filter((employee) => {
    if (employee.overtime >= 7){
        return employee.overtime;
    }
})
console.log(employeesToReward);

// class-work1

const employeeToRewardNames = employeesToReward.map((employee) => {
        return employee.name;
    
})
console.log(employeeToRewardNames);

// classwork2
employeeToRewardNames.forEach((name) => {
    console.log(`${name}, you have recieved an award`);
})


// loop style

for (let i = 0; i < employeeToRewardNames.length; i++) {
    console.log(`${employeeToRewardNames[i]}, you have recieved an award`);
}

const creatures = [
    {animal: "Shark", habitat: "Ocean"},
    {animal: "Whale", habitat: "Ocean"},
    {animal: "Hippopotamus", habitat: "Lake"},
    {animal: "Lion", habitat: "Savanna"},
    {animal: "Monkey", habitat: "Jungle"}

]

// const aquaticAnimals = creatures.filter((creature) => {
//     return creature.habitat === "Ocean" || creature.habitat === "Lake";
// })

// console.log(aquaticAnimals);


const aquaticAnimals = creatures.filter((creature) => {
    if (creature.habitat === "Ocean"){
        return creature;
    }
    else if (creature.habitat === "Lake") {
        return creature;
    }
    else {
        return false;
    }
})

console.log(aquaticAnimals);


// ARRAY FIND

// .find() method: this finds  particular element(s) in an array and returns it. It only returns the first element it founds to be true

const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9,];
const value = digits.find((digit) => {
    return digit < 4;
})
console.log(value);


const  states = [
    "Ogun State",
    "Kogi State",
    "Anambra State",
    "Lagos State",
    "Benue State",
]

const state = states.find((state) => {
    return state.includes("L");
})
console.log(state);



// CLASS WORK

// A student Assessment took place, with a total mark of 10, Give us 7 students and mark them over 10, now give a reward to each students with a score over the mark of 6.

const studentS = [
    {name: "Soliu", score: 4},
    {name: "Hayzed", score: 7},
    {name: "Kenny", score: 3},
    {name: "Eef", score: 8},
    {name: "Abdullahi", score: 2},
    {name: "Zainab", score: 5},
    {name: "Tunmise", score: 9},
]

const studentAboveFromSix = studentS.filter((student) => {
    if (student.score > 6 && student.score <= 10){
        return student;
    }
})

const rewardStudents = studentAboveFromSix.map((student) => {
    return student.name;
})

rewardStudents.forEach((name) => {
    console.log(`Hi ${name}, here is your reward for scoring above 6`)
})



// another ways without using the .map() method
// const studentAboveFromSix = studentS.filter((student) => {
//     if (student.score > 6 && student.score <= 10) {
//         return student.score;
//     }
    
// })


// studentAboveFromSix.forEach((student) => {
//     console.log(`Hi ${student.name}, here is your reward for scoring above 6`)
// })

//  ARRAY SOME AND ARRAY EVERY METHODS
// .some(): This checks if some of the properties in an array meets a particular condition

const box = [1, 2, 3, 4, 5, 6, 7];
console.log(box.some((el) => {return el > 4})) // output here is true

// .every(): This checks if all of the properties in an array meets a particular condition

console.log(box.every((el) => {return el > 4}))  // output here is false

// ARRAY REDUCE

// .reduce() method: loops through the array and return the sum of the array. It takes two properties: a callback function and an intial value. the callback function take two parameters which are accumulator and value.

const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const answer = boxes.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);
console.log(answer);


