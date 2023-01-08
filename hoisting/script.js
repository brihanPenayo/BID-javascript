// PRIMER EJERCICIO
console.log(hello);
var hello = 'world';

/* Despues del hoisting
var hello;
console.log(hello) //muestra indefinido
hello="world";
********************/

// SEGUNDO EJERCICIO
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
/* Despues del hoisting
var needle = "haystack";
test(); // muestra en consola "magnet"
********************/

// TERCER EJERCICIO
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/* Despues del hoisting
var brendan = "super cool";
console.log(brendan) -> muestra en pantalla "super cool"
********************/

// CUARTO EJERCICIO
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/* Despues del hoisting
var food = "chicken"
console.log(food) -> imprime chicken
eat() -> imprime "half-chicken"
********************/

// QUINTO EJERCICIO
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
/* Despues del hoisting
var mean;
mean(); tira error por que no existe la funcion
console.log(food) -> indefinido
console.log(food) -> indefinido
********************/

// SEXTO EJERCICIO
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
/* Despues del hoisting
var genre;
console.log(genre) -> imprime indefinido
genre = "disco";
rewind(); -> imprime "rock" y luego imprime "r&b"
console.log(genre) -> imprime "disco"
********************/

// SEPTIMO EJERCICIO
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/* Despues del hoisting
dojo = "san jose";
console.log(dojo) -> imprime "san jose"
learn(); -> imprime "seattle" y luego imprime "burbank"
console.log(dojo) -> imprime "san jose"
********************/

// OCTAVO EJERCICIO
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
/* Despues del hoisting
console.log(makeDojo("Chicago", 65)); imprime la constante dojo {name: Chicago, students: 65, hiring: true}
console.log(makeDojo("Berkeley", 0)); imprime error por querer modificar una constante
********************/