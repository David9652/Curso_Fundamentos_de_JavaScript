// Sesión 4 - Inventar un idioma manipulando strings
// Idioma Platzom
function platzom (str){
    let translation = str;
    const length = translation.length;
    const reverse = (str) => str.split("").reverse().join("");
    function minMay (str, lenght){
        let translation = "";
        let capitalize = true;
        for (let i=0; i < lenght; i++){
            const char = str.charAt(i);
            translation += capitalize ? char.toUpperCase() : char.toLowerCase();
            capitalize = !capitalize;
        }
        return translation;
    }
    // Si la palabra original (str) terminar con "ar" se le quitan los últimos dos caracteres
    if (str.toLowerCase().endsWith("ar")){
        translation = str.slice(0, -2);
    }
    // Si la palabra original (str) inicia con "z" se le agrega al final "pe"
    if (str.toLowerCase().startsWith("z")){
        translation += "pe";
    }
    // Si la palabra traducida (translation) tiene más de 10 letras, se le debe poner un guión en la mitad
    if(length >= 10){
        const firstHalf = translation.slice(0, Math.round(length/2));
        const secondHalf = translation.slice(Math.round(length/2)); // Si no se le pone segundo parámetro ya se sabe que es hasta el final
        translation = `${firstHalf}-${secondHalf}`;
    }
    /* Si la palabra original (str) es un palíndromo, ninguna regla anterior cuenta. Y se devuleve la palabra intercalando mayúsculas 
    y minúsculas */
    if(str.toLowerCase() == (reverse(str,length).toLowerCase())){
        return minMay (str, length);
    }
    return translation;
}
console.log(platzom("Programar")); // Program
console.log(platzom("Zorro")); //Zorrope
console.log(platzom("Zarpar")); //Zarppe
console.log(platzom("Abecedario")); //Abece-dario
console.log(platzom("anitalavalatina")); //SoMeTeMoS

// Solamente se ejecuta un return por función
// Para recibir un string sin significado se suele colocar como parámetro str
// Cuando ejecutamos métodos y/o funciones sobre un string estos no se modifican, debemos asignarlo a otra variable o a la misma
// Las arrow functions también se usan en el tema de asincronía, los llamados Callbacks pero más adelante veremos esos temas
// Los strings no tienen la propiedad de reverse, sin embargo, los arreglos sí
// ECMAScript - https://www.genbetadev.com/desarrollo-web/exprimiendo-javascript-y-su-consola
/*
str.toUpperCase() --> Convierte el texto a mayúscula
str.toLowerCase() --> Convierte el texto a minúscula
str.endsWith("texto") --> Evalúa si un string termina con un texto específico
str.startsWith("texto") --> Evalúa si un string comienza con un texto específico
str.slice(inicio, final) --> Divide un caracter
str.length --> Retorna cuantos caracteres tiene un string
str.split("") --> Convierte un string a un array dividiéndolo por lo que tiene de parámetro, en caso de que sea vacío los separa uno a uno
str.reverse() --> Le da la vuelta a un arreglo
str.join("") --> Convierte el arreglo en un string y los junta de acuerdo al parámetro que le pasemos
str.charAt(i) --> Sevuelve un caracter del string según la posición correspondiente al valor de i.
*/