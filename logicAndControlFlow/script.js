//  The if statement

// const allowedAge = 18;

// const zainab = 18;

// const hayzed = 24;

// const nafisat = 8;




// if (zainab > allowedAge) {
//     console.log("You are granted admisson");
// }
//  else if (zainab === allowedAge){
//     console.log("God save you");
//  }
//  else {
//     console.log("Come back next year");
//  }

// FALSY AND TRUTHLY VALUES

// falsy values:

// false

// ""

// 0

// null

// undefined

// NaN

// if (true) {
//     console.log('truthly value')
// } else {
//     console.log('falsy value');
// }

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

let time = 10;

if (time < 10) {
    console.log("good morning")
} else if (time < 20) {

    console.log("good day")
} else {
    console.log("good evening")
}

// let time = 20;

// if (time < 10) {
//     console.log("good morning")
// } else if (time >= 10 && time < 20) {

//     console.log("good day")
// } else {
//     console.log("good evening")
// }



