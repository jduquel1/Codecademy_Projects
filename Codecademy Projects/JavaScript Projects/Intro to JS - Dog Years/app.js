//I'm creating a variable to state my human age
const myAge = 22;

//I created a variable stating that the first two years count as 10.5 years each
let earlyYears = 2;
earlyYears *= 10.5;

//I substracted the first two years to see how many remain and estimate using those
let laterYears = myAge - 2;

//I used the remainder of years and multiplied them by 4 so calculate the number of dog years accounted for by my later years.
laterYears *= 4;

console.log(earlyYears);
console.log(laterYears);

//I'm adding my early years and later years to check how many years I am in dog years
let myAgeInDogYears = earlyYears + laterYears;

//I created a variable with my name as a string and used the lower case method on it
let myName = 'Juan';
myName = myName.toLowerCase();

//I'm printing a string using an interpolation method
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)