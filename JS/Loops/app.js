// Iteración #1: Usa includes
//!---------------------------------------------
//? Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". 
//? Usa la función .includes de javascript.

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']

let camisetas = [];
const buscarProducto = (products) => {
    for (let i = 0; i < products.length; i++){
        if (products[i].includes('Camiseta') == true){
            camisetas.push(products[i]);
        }
    }
    return camisetas;
}
const buscarCamisetas = buscarProducto(products);
console.log(camisetas);