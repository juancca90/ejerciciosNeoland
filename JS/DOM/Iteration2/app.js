//** 2.1 Inserta dinamicamente en un html un div vacio con javascript.

const newDiv = document.createElement("div"); //Se crea el elemento
document.body.appendChild(newDiv); //añadimos el elemento en el index HTML


//const template = `<div></div>`; 
//document.body.innerHTML += template; Lo insertamos mediante un template

//const templateArrow = () => `<div></div>`;
//document.body.innerHTML += templateArrow(); Lo insertamos mediante una funcion


//document.body.innerHTML += `<div></div>`;  si se pone un igual solo, se elimina todo lo demas en el body


//** 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const div = document.createElement("div");//creamos elementos
const newP = document.createElement("p");

newP.textContent="Primera p";//añadimos texto al p

div.appendChild(newP);//añadimos el p al div

document.body.appendChild(div);  //añadimos el div al index HTML


//** 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divLoop = document.createElement("div");

for (let i = 0; i < 6; i++){
    const parrafo = document.createElement("p");
    parrafo.textContent = `Parrafo # ${i+1}`;

    divLoop.appendChild(parrafo);
}

document.body.appendChild(divLoop);


//** 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pDinamica = document.createElement("p");
pDinamica.textContent = "Soy dinamico!";

document.body.appendChild(pDinamica);

document.body.innerHTML += `<p>Soy dinámico en un template</p>`; // Mediante un template

//** 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const insertH2 = document.querySelector("h2.fn-insert-here");
insertH2.textContent = "Wubba Lubba dub dub";


//** 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const listaUl = document.createElement("ul");

apps.forEach((app) =>{
    const elemenLi = document.createElement("li");
    elemenLi.textContent = app;
    listaUl.appendChild(elemenLi);
});

document.body.appendChild(listaUl);
 

//** 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminarNodos = document.querySelectorAll(".fn-remove-me");

eliminarNodos.forEach((element) =>{
    element.remove();
})


//** 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
//** 	Recuerda que no solo puedes insertar elementos con .appendChild.

const enMedio = document.createElement("p"); //se crea el elemento p
enMedio.textContent = "Voy en medio!"; // se le añade el texto a p

const allDivInsertHere = document.querySelectorAll("div.fn-insert-here"); //Se busca el elemento fn-insert-here

const secondDiv = allDivInsertHere[1]; // se guarda el segundo div en una variable

document.body.insertBefore(enMedio, secondDiv); // se inserta antes del segundo div el elemento p


//** 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const insertDivs = document.querySelectorAll("div.fn-insert-here");

const templateDiv = () => `<p>Voy dentro!</p>`;
insertDivs.forEach((div) =>(div.innerHTML = templateDiv()));