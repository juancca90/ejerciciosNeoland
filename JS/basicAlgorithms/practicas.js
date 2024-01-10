let product = 'tomatoes';
let myProduct;

myProduct = product;
 //console.log(product);
//console.log(myProduct);


let pokemonExt = 'Charmander';
function showPokemon(){
    pokemonExt = "Squirtle"; //Cambio la variable externa
    let message = 'hola, ' + pokemonExt
    //console.log(message);
}
//console.log(pokemonExt); // Charmander antes de llamar la funcion
showPokemon();
//console.log(pokemonExt); //Squirtle, el valor modificado


var name = "John";

function sayHi() {
//    console.log("Hi, ", name);
}
sayHi();


let otherName = "John";
if (otherName == "John"){
    var otherAge = 25;
    //console.log(otherName, " is ", age, " years old.");
}
//console.log(age);



//TODO-------------------------------------------------------------------------
//TODO Mini ejercicios

//!Variables

//Crea una variable llamada myFavoriteHero, asigna el valor Hulk a ella.
let myFavoriteHero = "Hulk";
console.log(myFavoriteHero);
//Crea una variable llamada x, asigna el valor 50 a ella.
let x = 50;
console. log(x);
//Crea una variable llamada h con el valor 5 y otra y con el valor 10. 
let h = 5;
let y = 10;
console.log(h, y);
//Crea una otra variable z y asignale el valor de h + y.
let z = h+y;
console.log(z);

//Dado el siguiente javascript, cambia el valor de la propiedad age a 250.
const character = {name: 'Jack Frost', age: 10};
character.age = 250;
console.log(character);
//Declara 3 variables con los nombres y valores siguientes:
let firstName = 'Jon'; 
let lastName = 'Snow'; 
let age = 24; 

//Guarda los valores en sentence con la siguiente estructura:
//Soy Jon Snow, tengo 24 años y me gustan los lobos.
let sentence = ["Soy ", firstName, " ", lastName, ", tengo ", age, " años y me gustan los lobos."];
console.log(sentence);

//Dado el siguiente javascript, guarda en una variable la suma del precio de ambos juguetes.
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
let precio= toy1.price + toy2.price;
console.log(precio);