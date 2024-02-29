const person = {
    firstName: "Tunmise",
    middleName: "Paul",
}

const otherPerson = person;

person.firstName = "Makalele";
console.log(person);
console.log(otherPerson) // the same output as "person"

console.log(person === otherPerson);

// SHALLOW CLONING
// spread OPerator (...)
// array cloning

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers)

const newNumbers = [...numbers] //this copy numbers into newNumbers
console.log(newNumbers)

// checking for equality

const copiedNumber = numbers
console.log(copiedNumber);

console.log(numbers === copiedNumber); // returns true because they hold or stores the same reference/address to the object
console.log(numbers === newNumbers) // returns false because they are now two different object with expectedly different reference/address

// adding elements to the original array "numbers" to differenciate btw ;
numbers.push(8);
numbers.slice(2, 4) // "2" delete elements backward apart from elements at index two while "4" delete elements forwards apart from element at  index four
console.log(numbers);
console.log(copiedNumber);
console.log(newNumbers);


// Objects cloning

const personDetails = {
    name: "Zainab",
    age: 40,
}

const changeDetails = {...personDetails};

personDetails.name = "Soliu";

console.log(personDetails);
console.log(changeDetails);


// sample 1

const originalObj = {
    name: "Bash",
    age: 20,
    address: {
        city: "Pegamut",
        state: "Ogun"
    }
}


const cloneObj = Object.assign({}, originalObj);

cloneObj.name = "Naphy";
cloneObj.address.city = "Elejigbo";
console.log("Original Obj", originalObj);
console.log("clone Obj", cloneObj);


// more on spread operators // merging two more Ojects/arrays together

// sample 1

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8];

const merge = [...arr1, ...arr2];
console.log(merge);

// sample 2

const text = {name: "Bode"};
const numbs = [1, 2, 3, 4];

const cloneMerged = {...text, number:[...numbs]}
// {name: "Soliu", [1, 2, 3, 4]}

cloneMerged.name = "Hayzed";
cloneMerged.number.push(5);

console.log(text);
console.log(numbs)
console.log(cloneMerged);


// DEEP CLONING

const details = {
    firstName: "Kenny",
    car: {
        brand: "Toyota",
        wheels: 4,
        color: "Red"
    }
}

const stringiFiedDetails = JSON.stringify(details);
console.log(stringiFiedDetails);

const newDetails = JSON.parse(stringiFiedDetails);

console.log(newDetails);

newDetails.car.color = "Blue";
newDetails.firstName = "Tunmise";

console.log(details);
console.log(newDetails);

console.log(details.car.color);
console.log(newDetails.car.color);

// sample 2
const originaObj = {
    name: "Zainab",
    age: 12,
    address: {
        local: "Agege wa",
        area: "Baba Yemi"
    }
}

const clonObj = JSON.parse(JSON.stringify(originaObj));

clonObj.name = "Soliu";
clonObj.age = 54;
clonObj.address.local = "Pegamut";
clonObj.address.area = "Mujayiduun";

console.log(originaObj);

console.log(clonObj);





