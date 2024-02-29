// const rectArea = function(length, breadth) {
//     return length * breadth;
// }

// const result = rectArea(4,5);
// console.log(`The area of the rectangle is ${result}`);

// OOP --> Object Oriented Programming

// Object Literal

let person = {
    first_name : "Salman",
    last_name : "Kofoshi",

    getFunction : function() {
        return `My name is ${person.first_name} ${person.last_name}`;
    },

    phoneNumber : {
        mobile: "12345",
        landline : "6789"
    }
}

console.log(person.getFunction());
console.log(person.phoneNumber.landline);

// Object constructor
function PersonTwo (first_name, last_name) {
    this.first_name = first_name,
    this.last_name = last_name
}

let person1 = new PersonTwo("Hayzed", "Mabululu");
let person2 = new PersonTwo("Zainab", "Muritala");

console.log(person1);
console.log(person2);

// The NEW Keyword

const student = {} // simple object

const studentTwo = new Object(); // simple object using new keyword
console.log(studentTwo);

const arr = [1, 2, 3];
const newArr = new Array(1, 2, 3);
console.log(newArr)

// Date
const myBaiday = new Date ();

console.log(myBaiday);

const myNumber = new Number (100.00)
console.log(myNumber.toFixed(0))


// The this keyword

function Sentence(words) { // construction function syntax
    this.words = words;
    console.log(this)
}

const $_ = new Sentence (`Hello there! we are learning about this keyword`);

function Car(color, brand, wheels, id) {
    this.color = color;
    this.brand = brand;
    this.wheels = wheels;
    this.id = id;

    console.log(this);
}

const bluecar = new Car("Blue", "BMW", 4, "🚓");
const redCar = new Car ("Red", "Ferrari", 4, "🏎️")

// class-work
// create a cohort function with params (name, age, favFood, phoneNo, baiday), create new instances for three different cohorts, log the param argument onto the console --> birthday should be a new date instance

function Cohort(name, age, favFood, phoneNo, baiday) {
    this.name = name;
    this.age = age;
    this.favFood = favFood;
    this.phoneNo = phoneNo;
    this.baiday = baiday;

    console.log(this);
}

const cohort1 = new Cohort("Soliu", 27, "Yam", 12345, new Date("06-01-2003"))
const cohort2 = new Cohort("Hayzed", 20, "Rice", 1234, new Date("03-01-2003"))
const cohort3 = new Cohort("Kenny", 35, "beans", 345, new Date("01-01-2003"))


// Class keyword.
// class declaration:

class Shape1 {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this);
    }
}

const area = new Shape1(10, 2);

// class expression:
// i --> anonymous

const shape = class {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        console.log(this);
    }
}
const area1 = new Shape1(10, 2);


// --> unanonymous
const BigBoy = class Bigie {
    constructor(name, age) {
        this.name = name;
        this.age = age;

        console.log(this);
    }
    // getter function
    get him() {
        return this.coder();
    }

    // method
    coder() {
        return {name: this.name, age: this.age}
    }
}
const instance = new BigBoy("Paiko", 40);
console.log(instance.him);

const School = class Academy {
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }

    get principal () {
        return this.seniorBoy()
    }

    seniorBoy() {
        return {name: this.name, location: this.location}
    }
}

const headMaster = new School ("Hayzed", "PEGAMUT");
console.log(headMaster.principal);

// class-work 2: With an unanonymous class function named RectShape, craete a constructor with params of length and breadth, get the area of a rectangle using getter function and calculate method, create a new instance for the RectShape with its relative argument... answer to the console

const RectShape = class myShape {
    constructor(length, breadth){
        this.length = length;
        this.breadth = breadth;
    }

    get shapeArea () {
        return this.calc();
    }

    calc () {
        return {Area: this.length * this.breadth};
    }
}

const newRect = new RectShape (8, 9);
console.log(newRect.shapeArea);

