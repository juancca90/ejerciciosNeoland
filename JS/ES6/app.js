//Iteración #1: Arrows

//!----------------------
//? Crea una arrow function que tenga dos parametros a y b y
//? que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
//? por consola la suma de los dos parametros.

const suma = (a = 10, b = 5)=> {
    const resultadoSuma = a + b;
    console.log(`\n`, "Ejercicio 1");
    console.log(resultadoSuma);
}

// 1.1 Ejecuta esta función sin pasar ningún parametro

suma ();

// 1.2 Ejecuta esta función pasando un solo parametro

suma(2);

// 1.3 Ejecuta esta función pasando dos parametros

suma(30,50);


// Iteración #2: Destructuring

//!-------------------------------
//? 2.1 En base al siguiente javascript, crea variables en base a las propiedades
//? del objeto usando object destructuring e imprimelas por consola. Cuidado,
//? no hace falta hacer destructuring del array, solo del objeto.

const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game;
console.log(`\n`, "Ejercicio 2.1");
console.log(title);
console.log(gender);
console.log(year);

//!-----------------------------------
//? 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
//? llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//? imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;
console.log(`\n`, "Ejercicio 2.2");
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

//!---------------------------------
//? 2.3 En base al siguiente javascript, usa destructuring para crear 2
//? variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
return {nameAn: 'Bengal Tiger', race: 'Tiger'}
};
const {nameAn, race} = animalFunction();
console.log(`\n`, "Ejercicio 2.3");
console.log(nameAn);
console.log(race);


//!----------------------------------------
//? 2.4 En base al siguiente javascript, usa destructuring para crear las
//? variables name y itv con sus respectivos valores. Posteriormente crea
//? 3 variables usando igualmente el destructuring para cada uno de los años
//? y comprueba que todo esta bien imprimiendolo.

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name, itv} = car;

const [year1, year2, year3]= itv;
console.log(`\n`, "Ejercicio 2.4");
console.log(name);
console.log(itv);
console.log(year1);
console.log(year2);
console.log(year3);


//Iteración #3: Spread Operator

//!---------------------------------------
//? 3.1 Dado el siguiente array, crea una copia usando spread operators.

const pointsList = [32, 54, 21, 64, 75, 43]
const pointListCopia = [...pointsList ];
console.log(`\n`, "Ejercicio 3.1");
console.log(pointListCopia);

//? 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopia = {...toy};
console.log(`\n`, "Ejercicio 3.2");
console.log(toyCopia);

//? 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
const pointList1y2 =[...pointsList1, ...pointsList2];
console.log(`\n`, "Ejercicio 3.3");
console.log(pointList1y2);

//? 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toy2yUpdate = {...toy2, ...toyUpdate};
console.log(`\n`, "Ejercicio 3.4");
console.log(toy2yUpdate);

//? 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//? pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


const [colors1, colors2, colors3, ...restOfColors] = colors;
const colorCopia = [colors1, colors2, ...restOfColors];
console.log(`\n`, "Ejercicio 3.5");
console.log(colorCopia);


// Iteración #4: Map
//!-----------------------------------------

//? 4.1 Dado el siguiente array, devuelve un array con sus nombres utilizando .map().

const users = [
{id: 1, name: 'Abel'},
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'},
{id:4, name: 'Amanda'}
];

const names = users.map(user => user.name);
console.log(`\n`, "Ejercicio 4.1");
console.log(names); 

//? 4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
//? de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que empiece por 'A'.

const users1 = [
{id: 1, name: 'Abel'},
{id:2, name: 'Julia'},
{id:3, name: 'Pedro'},
{id:4, name: 'Amanda'}
];

const namesArray = users1.map(user => user.name);

const namesWithA = namesArray.filter(name => name.includes('A'));

users1.forEach(user => {
  if (namesWithA.includes(user.name)) {
    user.name = 'Anacleto';
  }
});
console.log(`\n`, "Ejercicio 4.2");
console.log(users1);

//? 4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//? de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//? cuando el valor de la propiedad isVisited = true.
const cities = [
{isVisited:true, name: 'Tokyo'},
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'},
{isVisited:false, name: 'Seul'}
];
cities.forEach(city => {
    if (city.isVisited === true) {
      city.name = `${city.name} (visitado)`;
    }
  });
  
  const citiesName = cities.map(ciudad => ciudad.name);
  console.log(`\n`, "Ejercicio 4.3");
  console.log(citiesName);


// Iteración #5: Filter
//!-------------------
//? 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//? con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const mayores = ages.filter(edad => edad > 18);
console.log(`\n`, "Ejercicio 5.1");
console.log(mayores);


//? 5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//? con los valores que sean par.

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const pares = ages2.filter(edad => edad % 2 === 0);
console.log(`\n`, "Ejercicio 5.2");
console.log(pares);


//? 5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//? con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const player = streamers.filter(streamer => streamer.gameMorePlayed ==='League of Legends');
console.log(`\n`, "Ejercicio 5.3");
console.log(player);


//? 5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//? con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//? usar la funcion .includes() para la comprobación.
const streamers2 = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const namesArr = streamers2.map(streamer =>streamer.name);
const namesWithU = namesArr.filter(name=> name.includes('u'));
console.log(`\n`, "Ejercicio 5.4");
console.log(namesWithU);


//? 5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//? el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//? .includes() para la comprobación.
//? Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//? .age sea mayor que 35.

const legends = streamers2.filter(game=> game.gameMorePlayed.includes('Legends'));
legends.forEach(streamer => {
    if(streamer.age > 35) {
        streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
})
console.log(`\n`, "Ejercicio 5.5");
console.log(legends);


//? 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//? los streamers que incluyan la palabra introducida en el input. De esta forma, si
//? introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//? introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers3 = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//             <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <title>Document</title>
// </head>
// <body>
//  <input type="text" data-function="toFilterStreamers"/>
// </body>
// </html>

//? 5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//? los streamers que incluyan la palabra introducida en el input. De esta forma, si
//? introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i',
//? me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
//? En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.
const streamers4 = [
{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// <!doctype html>
// <html lang="en">
// <head>
// <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
//             <meta http-equiv="X-UA-Compatible" content="ie=edge">
//             <title>Document</title>
// </head>
// <body>
//  <input type="text" data-function="toFilterStreamers"/>
//  <button data-function="toShowFilterStreamers">Filter</button>
// </body>
// </html>


//Iteración #6: Find
//!--------------------------------------

//? 6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];

const buscar = numbers.find(number => number === 100);
console.log(`\n`, "Ejercicio 6.1");
console.log(buscar);


//? 6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
{title: 'Madagascar', stars: 4.5, date: 2015},
{title: 'Origen', stars: 5, date: 2010},
{title: 'Your Name', stars: 5, date: 2016}
];

const pelicula = movies.find(peli => peli.date === 2010);
console.log(`\n`, "Ejercicio 6.2");
console.log(pelicula);


//? 6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre
//? 'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa
//? spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación
//? lo queremos meter en la propiedad .mutation del objeto fusionado.
const aliens = [
{name: 'Zalamero', planet: 'Eden', age: 4029},
{name: 'Paktu', planet: 'Andromeda', age: 32},
{name: 'Cucushumushu', planet: 'Marte', age: 503021}
];
const mutations = [
{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}
];

const nombre = aliens.find(cucu => cucu.name === "Cucushumushu");
const mutacion = mutations.find(muta => muta.name === 'Porompompero');

const aliens2 = {...nombre, mutation:{ ...mutacion}};
console.log(`\n`, "Ejercicio 6.3");
console.log(aliens2);


// Iteración #7: Reduce
//!-------------------------------------------

//? 7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de
//? los alumnos usando la función .reduce().

const exams = [
{name: 'Yuyu Cabeza Crack', score: 5},
{name: 'Maria Aranda Jimenez', score: 1},
{name: 'Cristóbal Martínez Lorenzo', score: 6},
{name: 'Mercedez Regrera Brito', score: 7},
{name: 'Pamela Anderson', score: 3},
{name: 'Enrique Perez Lijó', score: 6},
{name: 'Pedro Benitez Pacheco', score: 8},
{name: 'Ayumi Hamasaki', score: 4},
{name: 'Robert Kiyosaki', score: 2},
{name: 'Keanu Reeves', score: 10}
];

const suma2 = exams.reduce((acumulador, valor) => {
  return acumulador + valor.score;}, 0);

console.log(`\n`, "Ejercicio 7.1");
console.log (suma2);

//? 7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
//? alumnos que esten aprobados usando la función .reduce().



//? 7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().