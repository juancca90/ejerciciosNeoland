// Iteración #1: Creando Events

//** 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//** evento click que ejecute un console log con la información del evento del click 

const handleClick = (event) => {
    console.log(event);
}
document.getElementById("btnToClick").addEventListener("click", (e) => handleClick(e));


//** 1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const handleFocus = (event) => {
    console.log(event);
}
document.querySelector(".focus").addEventListener("focus", (e) => handleFocus(e));

//** 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

document.type = "text";
document.addEventListener("input", (e) => {
  console.log(e.target.value);
});