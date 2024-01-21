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
