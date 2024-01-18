//Iteración #1: Buscar el máximo

//!---------------------------------------------------------------------------------
//? Completa la función que tomando dos números como argumento devuelva el más alto.
//!---------------------------------------------------------------------------------
const sumArrow = (numberOne , numberTwo) => (numberOne > numberTwo)? console.log(numberOne) : console.log(numberTwo);


function sum(numberOne , numberTwo) {
    if(numberOne > numberTwo){
        console.log(numberOne);
    }else{
        console.log(numberTwo);
    }
    }

sumArrow(23, 29);
sum(23, 29);

   // Iteración #2: Buscar la palabra más larga
    
//!---------------------------------------------------------------------------------   
//? Completa la función que tomando un array de strings como argumento devuelva el más largo, 
//? en caso de que dos strings tenga la misma longitud deberá devolver el primero.
//? Puedes usar este array para probar tu función:
//!---------------------------------------------------------------------------------
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
    
    function findLongestWord(avengers) {
        let longestString = '';
    
        for (let i = 0; i < avengers.length; i++) {
            const currentString = avengers[i];
    
            if (currentString.length > longestString.length) {
                longestString = currentString;
            }
        }
    
        return longestString;
    }
    
    const longestAvenger = findLongestWord(avengers);
    console.log(longestAvenger);
    
    

//Iteración #3: Calcular la suma

//!---------------------------------------------------------------------------------
//? Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
//? Implemente la función denominada sumNumbers que toma un array de números como argumento y devuelve la suma de todos los números de la matriz.
//? Puedes usar este array para probar tu función:
//!---------------------------------------------------------------------------------

const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumAll(numbers);
console.log(result);

//Iteración #4: Calcular el promedio

//!---------------------------------------------------------------------------------
//? Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
const numbersProm = [12, 21, 38, 5, 45, 37, 6];
//!---------------------------------------------------------------------------------
function average(numbersProm) {
    let prom = 0;
    let sum = 0;
    for(let i = 0; i < numbersProm.length; i++){
        sum += numbersProm[i];
        prom = sum / numbersProm.length;
    }
    return prom;
}
const promedio = average(numbersProm);
console.log(promedio);


//Iteración #5: Calcular promedio de strings
//!---------------------------------------------------------------------------------
//? Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
//? y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
//!---------------------------------------------------------------------------------

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arr) {
    let sumTotal = 0;

    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] == 'number'){
            sumTotal += arr[i];
        } else if (typeof arr[i] == 'string'){
            sumTotal += arr[i].length;
        }
    }
    return sumTotal;
}
const suma = averageWord(mixedElements);
console.log(suma);


//Iteración #6: Valores únicos

//!---------------------------------------------------------------------------------
//? Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
//? en caso que existan los elimina para retornar un array sin los elementos duplicados. 
//? Puedes usar este array para probar tu función:
//!---------------------------------------------------------------------------------


const duplicates = [
'sushi',
'pizza',
'burger',
'potatoe',
'pasta',
'ice-cream',
'pizza',
'chicken',
'onion rings',
'pasta',
'soda'
];

  let resultArray = duplicates.filter((item,index)=>{
    return duplicates.indexOf(item) === index;
  })

  console.log(resultArray);


//Iteración #7: Buscador de nombres

//!---------------------------------------------------------------------------------
//? Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
//? comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por el contrario un false.
//? Puedes usar este array para probar tu función:
//!---------------------------------------------------------------------------------


const nameFinder = [
'Peter',
'Steve',
'Tony',
'Natasha',
'Clint',
'Logan',
'Xabier',
'Bruce',
'Peggy',
'Jessica',
'Marc'
];

const finderName = (arrayNameFinder, buscarName)=> {
    
    for(let i = 0; i < arrayNameFinder.length; i++) {

        if(arrayNameFinder[i].toLowerCase().trim() ===
        buscarName.toLowerCase().trim()){
            const result = arrayNameFinder[i];
            return `true ${i}`;
            }else{
                return `false`;
            }
    }
};
const resultadoBusqueda = finderName(nameFinder, 'Peter');
console.log(resultadoBusqueda);



//Iteration #8: Contador de repeticiones
//!---------------------------------------------------------------------------------
//? Crea una función que nos devuelva el número de veces que se repite cada una 
//? de las palabras que lo conforma. Puedes usar este array para probar tu función:
//!---------------------------------------------------------------------------------

const counterWords = [
'code',
'repeat',
'eat',
'sleep',
'code',
'enjoy',
'sleep',
'code',
'enjoy',
'upgrade',
'code'
];
const repeatCounter = (arrCounter) => {
    const wordCount = [];

    for (const word of arrCounter) {
        if (wordCount[word]) {
            wordCount[word] += 1;
        } else {
            wordCount[word] = 1;
        }
    }

    return wordCount;
};

const counter = repeatCounter(counterWords);
console.log(counter);
