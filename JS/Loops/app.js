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



//Iteración #2: Condicionales avanzados
//!---------------------------------------------------
//? Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruébalo con un console.log.
//? Puedes usar este array para probar tu función:

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true},
    {name: 'Lucia Aranda', T1: true, T2: false, T3: true},
    {name: 'Juan Miranda', T1: false, T2: true, T3: true},
    {name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
    {name: 'Raquel Benito', T1: true, T2: true, T3: true}
    ]
    
    alumns.forEach((alumn)=>{
        if( alumn.T1 == true && alumn.T2 == true){
            alumn.isApproved =true
            
        }else if( alumn.T1 == true && alumn.T3 == true){
            alumn.isApproved =true
        }else if( alumn.T2 == true && alumn.T3 == true){
            alumn.isApproved =true
        }else{
            alumn.isApproved = false
        }
        console.log(alumn);
    })


    //Iteración #3: Probando For...of
//!------------------------------------
//? Usa un bucle forof para recorrer todos los destinos del array. Imprime en un console.log sus valores.
//? Puedes usar este array:

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']
    
    for(value of placesToTravel) {
        console.log(value);
    }