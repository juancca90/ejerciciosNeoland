//Iteración #1: Arrows

//!----------------------
//? Crea una arrow function que tenga dos parametros a y b y
//? que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre
//? por consola la suma de los dos parametros.

const suma = (a = 10, b = 5)=> {
    const resultadoSuma = a + b;
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

console.log(title);
console.log(gender);
console.log(year);

//!-----------------------------------
//? 2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
//? llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
//? imprimelo por consola.

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits;

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

console.log(pointListCopia);

//? 3.2 Dado el siguiente objeto, crea una copia usando spread operators.

const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopia = {...toy};

console.log(toyCopia);

//? 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsList2 = [54,87,99,65,32];
const pointList1y2 =[...pointsList1, ...pointsList2];

console.log(pointList1y2);

//? 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos con spread operators.

const toy2 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toy2yUpdate = {...toy2, ...toyUpdate};

console.log(toy2yUpdate);

//? 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
//? pero sin editar el array inicial. De nuevo, usando spread operatos.

const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];


const [colors1, colors2, colors3, ...restOfColors] = colors;
const colorCopia = [colors1, colors2, ...restOfColors];
console.log(colorCopia);
