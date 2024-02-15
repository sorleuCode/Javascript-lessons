//  The if statement

const allowedAge = 18;

const zainab = 18;

const hayzed = 24;

const nafisat = 8;




if (zainab > allowedAge) {
    console.log("You are granted admisson");
}
 else if (zainab === allowedAge){
    console.log("God save you");
 }
 else {
    console.log("Come back next year");
 }

// FALSY AND TRUTHY VALUES

// falsy values:

// false

// ""

// 0

// null

// undefined

// NaN

if (true) {
    console.log('truthly value')
} else {
    console.log('falsy value');
}

// truthy values: these are any data type like strings, number and characters

const password = "wrap"
const email = "anate@gmail.com"

if (password && email) {
    console.log("Login Approved")
}

else if (password || email) {
    console.log("password and email must be provided")
}
else {
    console.log("unapproved")
}

// classwork:
// craete a good morning message if the time is less than 10:00am.
// if not, but the time is less than 20:00, create a good day message, otherwise good evening.

let times = 10;

if (times < 10) {
    console.log("good morning")
} else if (times < 20) {

    console.log("good day")
} else {
    console.log("good evening")
}

let time = 20;

if (time < 10) {
    console.log("good morning")
} else if (time >= 10 && time < 20) {

    console.log("good day")
} else {
    console.log("good evening")
}

let temperature = 25;

if (temperature > 30) {
    console.log("its a hot day!");
}else {
    console.log("its not too hot today.");
}


let hour = new Date().getHours();

if (hour < 12) {
    console.log("Good morning");
} else if (hour >= 12 && hour < 18) {

    console.log("Good afternoon");
}else {
    console.log("Good evening");
}


// USING ELSE IF

let period = Math.random();
period = period * 13;
period = Math.floor(period) + 1;

if (period <= 9) {
    console.log("You are not a late comer today! 😊");
} 
else if ( period > 9 && period < 10) {
    console.log("Why are you late? Dont do that tommorow");
}
else if (period === 10 || period < 12) {
    console.log("Go back home, you are extremely late");
}
else {
    console.log("Javascript class is going on! nobody should enter")
}

// more examples on ELSE IF

let score = 85;
if (score >= 90) {
    console.log("Excellent! you score an A.");
} else if (score >= 80) {
    console.log("Well done! you score a B");
} else if (score >= 70) {
    console.log("Good job! you score C");
} else if (score >= 60) {
    console.log("you pass! you score a D");
} else {
    console.log("sorry you failed. You score an F");
}


// SWITCH STATEMENTS

let superHero = "Captain America";

switch (superHero) {
    case 'Iron Man':
        console.log("I am iron man..");
        break;
    case 'Thor':
        console.log("That is my hammer");
        break;
    case 'Captain America':
        console.log("Never give up!");
        break;
    case'Black Widow':
        console.log("One short, one  kill.!");
        break;
    default:
        console.log("Enter a valid superHero Name");        
}
console.log(superHero)

// more examples on switch case

let day = new Date().getDay();
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "UNKNWON";
        break;
    
}
console.log(`Today is ${dayName}`);



// // CLASS WORK:

let fruit = "orange";
let message;

switch (fruit) {
    case 'orange':
        message ='I love orange';
        break;
    case 'banana':
        message ='I love banana';
        break;
    case 'pineapple':
        message ='I love pineapple';
        break;
    case 'water melon':
        message ='I love water melon';
        break;
    default:
       message ='It is not my favorite';

}
console.log(message)

    
// TERNARY OPERATOR

    const oldMan = 70;

    
    if (oldMan >= 80) {
        console.log("you can drive");
    } else {
        console.log("you may not drive");
    }

    oldMan >= 80 ? console.log("u can drive"):oldMan >= 70 && oldMan < 80 ? console.log("You are young"):console.log("u may not drive");

    let age = 17;
    let canVote = age > 18 ? "YES you can vote!" : age === 18 ? "You match the condition": "NO you can't vote";
    console.log(canVote);

    