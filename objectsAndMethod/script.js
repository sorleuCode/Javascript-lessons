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
        console.log()
    }
}
