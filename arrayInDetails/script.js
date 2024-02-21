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
console.log(students)

// .pop() method

const numbers = [3, 4, 5, 6, 7, 8, 9];

const popped = numbers.pop()
console.log(popped);
console.log(numbers);




// class work

// ES5

for (i = 0; i < cohorts.length; i++) {
    const result = cohorts[i];
    console.log(i, result);
}

// ES6

for(const result of cohorts) {
    console.log(result);
}


// nested arrays
const nestedArray = [[1, 2], [3,4], [5,6]];
const newArray = nestedArray[0][1]
console.log(newArray);

// object

const objectName = {name: "John", age: 60};
console.log(objectName);

// storing an object inside an array
const arr = [
    "Banana",
    1000000,
    {name: "Soliu", age: 30},
    function name () {
        alert("Booooooo😊");
    }
]
console.log(arr);
console.log(typeof arr);



