// PRIMER EJERCICIO
const cars = ['Tesla', 'Mercedes', 'Honda']
const [randomCar] = cars
const [, otherRandomCar] = cars
//Predict the output
console.log(randomCar);
console.log(otherRandomCar);
/* 
const [ randomCar ] = cars -> toma el primer valor, "Tesla"
const [ ,otherRandomCar ] = cars -> toma el segundo valor "Mercedes", si pusieramos otra coma tomaria el tercer valor
console.log(randomCar); imprime Tesla
console.log(otherRandomCar); imprime Mercedes
*/

// SEGUNDO EJERCICIO
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
console.log(name);
console.log(otherName);
/* 
console.log(name)-> Tira error por que no existe o no esta definido
console.log(otherName) -> imprime "Elon" por que en la desestructuracion le asignamos ese valor
*/

// TERCER EJERCICIO
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);
/* 
password = "12345";
desestructuramos password de person (no existe por lo tanto da indefinido)
console.log(password)-> Imprime 12345
console.log(hashedPassword) -> Imprime indefinido por que el objeto persona no posee password
*/

// CUARTO EJERCICIO
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
/*
const [,first] = 2
const [,,,second] = 5
const [,,,,,,,,third] = 2
console.log(first == second); -> 2 es igual a 5, no. por lo tanto imprime false
console.log(first == third); -> 2 es igual a 2, si. por lo tanto imprime true
*/

// QUINTO EJERCICIO
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
/*
const { key } = lastTest; le asignamos lastTest.key
const { secondKey } = lastTest; le asignamos lastTest.secondKey
const [ ,willThisWork] = secondKey; le asignamos 5

console.log(key); imprime en pantalla "value"
console.log(secondKey); imprime en pantalla [1,5,1,8,3,3]
console.log(secondKey[0]); imprime en pantalla [1]
console.log(willThisWork); imprime en pantalla [5]
*/