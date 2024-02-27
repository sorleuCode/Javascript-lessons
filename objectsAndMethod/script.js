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