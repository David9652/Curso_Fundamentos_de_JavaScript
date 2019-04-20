// Sesión 5 - ¿Cuántos kms corre una persona en promedio? Entendiendo el ciclo for

const name = "David";
const days = ["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"];
const lengthDays = days.length; 

let totalKms = 0;

function toRun(){
    const min = 5;
    const max = 15;
    return (Math.round((Math.random() * (max-min)) + (min)));
}

for (let i=0; i < lengthDays ; i++){
    const kms = toRun();
    totalKms += kms;
    console.log(`El día ${days[i]} ${name} corrió ${kms}kms`);
}

const promKms = totalKms / lengthDays;
console.log(`En promedio, ${name} corrió ${promKms.toFixed(2)}kms`);

// No modificar un array dentro de un for
/*
Math.floor() --> Rendondea hacia abajo 3.9 = 3
Math.ceil() --> Redondea hacia arriba 3.1 = 4
Math.random() --> Retorna un valor entre 0 y 1
Math.round() --> Redondea dependiendo 3.1 = 3, 3.5 = 4
*/

/*https://guides.github.com/features/mastering-markdown/
https://pandao.github.io/editor.md/en.html
https://www.freecodecamp.org/*/