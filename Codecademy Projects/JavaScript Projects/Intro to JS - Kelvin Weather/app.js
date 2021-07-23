//The forecast today is 293 Kelvin
const kelvin = 0;

// I converted the kelvin degree to celsius
const celsius = kelvin - 273.15;

//I converted the celsius to fahrenheit and rounded it off
let fahrenheit;
fahrenheit = Math.floor(celsius * (9 / 5) + 32);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);