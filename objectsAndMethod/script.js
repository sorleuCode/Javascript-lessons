// OBJECTS

// objects are used to represent real life data

const firstName = "Soliu";

const person = {
    firstName,
    Surname: "Hayzed",
    age: 158,
    children: {
        firstChild: "Eef",
        SecondChild: "Nafisat"
    }
}

console.log(person);
console.log(person.children.SecondChild);

// How to access properties in a data and how to add properties to data

const human = {
    firstName: "Abdullahi",
    "DLT Africa Location": "Pegamut"

}

human.pet = {name: "cobra", age: 3};
human.job = "Headmaster";
human.favFood = "Garri";

console.log(human["DLT Africa Location"]);
console.log(human.firstName);
console.log(human);

// OBJECT IN-BUILT METHODS

const pet = {
    petName: "dog",
    petSound: () => {
        console.log("Woof! Woof!");
    }
}

pet.petSound();

const dog = {
    name: "fluffy",
    age: 2,
    listAllProperties: function() {
        console.log(this.name, this.age)
    }
}
dog.listAllProperties();

// continuation on Objects: Built-in methods

const myObject = {
    myMethod1: () => {}, // arrow function
    myMethod2: function() {}, //function declaration
    myMethod3() {} // function expression
}

// examples: BUILT-IN METHOD WITH ARROW FUNCTION

const animal = {
    name: "fluffy orange",
    age: 10,
    bark: () => {
        console.log("woof woof!")
    }
}
console.log(animal.name)
animal.bark();
console.log(animal);


// OBJECT METHODS
//object.keys()
//object.value()
//object.entries()
//object.frezeez()
//object.seal()

const employees = {
    receptionist: "Soliu",
    secretary: "Kenny",
    sales: "Abdullahi",
    accountant: "Bode",
    cleaner: "Hayzed"
}

// object.keys() //this creates and returns an array containing the keys of an object
const employeeInfo = Object.keys(employees);
console.log(employeeInfo);

const session = {
    id: 1,
    date: "27-feb-2024",
    device: "Mobile",
    browser: "Chrome"
}

// object.value() // this creates and returns an array containing the values of an object
const sessionValues = Object.values(session);
console.log(sessionValues);

const operatingSystem = {
    name: "Linux",
    version: 18.04,
    license: "Open source"
}

// object.entries() // this creates a nested array of the key and value pairs of an object

const operatingSystemInfo = Object.entries(operatingSystem);
console.log(operatingSystemInfo);

const user = {
    username: "Jhon",
    password: 12345
}

// object.freez() //this prevents modification of existing properties, prevents adding another property or removing a property
const userInfo = Object.freeze(user);
console.log(userInfo)
user.username = "Soliu"
console.log(userInfo)
console.log(user.username); // the property didnt change!


const userOne = {
    userName: "John",
    password: 12345
}

// object.seal() // prevents new properties from being added or removed

const userInfo1 = Object.seal(userOne);
userInfo1.userAge = 32;
console.log(userInfo1) // userAge is not added

// DELETING AND UPDATING OBJECT PROPERTIES

let x;
const perSon = {
    name: "Soliu",
    age: 35,
    isAdmin: true,
    address: {
        street: "23, Onigbin street",
        city: "Ota",
        state: "Ogun",
    },
    
    hobbies: ["Music", "Sport"]

}

// accessing an array inside an object
x = perSon.hobbies[0];
let y = perSon["hobbies"][1];
console.log(x, y);

// updating a property
perSon.name = "Bode"
console.log(perSon);

perSon.address.street = "22, Tanke Oke-odo";
console.log(perSon);

// Deleting a property

delete perSon.address.state
console.log(perSon); // street wont show again

console.log(perSon);

delete perSon.address.city

// Adding a function (method) a as property to an object
perSon.greet = function() {
    console.log(`Hello, my name is ${this.name}`);
}

perSon.greet();

console.log(perSon); // to see that function/method has been added to our object "perSon"

// copying numbers 
let x1 = 1;
let y1 = x1;

x1 = 2;
console.log(y1, x1);


// copying strings

let firstPerson = "Mark";
let secondPerson = firstPerson;

firstPerson = "Austin";
console.log(firstPerson);
console.log(secondPerson);

// COPYING COMPLEX VALUE
// copying arrays

const aniMals = ["dogs", "cats"];
const otherAnimals = aniMals;
aniMals.push("Goat");
console.log(aniMals);
console.log(otherAnimals);

// copying objects

const data = {
    firstnaMe: "Zainab",
    lastName: "Abdullahi"
}

const otherData = data;
console.log(data);
console.log(otherData);
console.log(data === otherData); // returns a boolean value '// true


// EQUALITY 
const peron1 = {
    firstName: "Soliu"
}

const otherperson1 = {
    firstName: "Soliu"
}

console.log(peron1 === otherperson1); // false

