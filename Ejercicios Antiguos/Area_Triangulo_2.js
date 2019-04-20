// Sesión 2 - Calcula el área de un triángulo. Creando funciones

console.log("El área de un triángulo de base 5 y altura 7 es: " + (5 * 7) / 2);
console.log('El área de un triángulo de base 5 y altura 7 es: ' + (5 * 7) / 2);
console.log(`El área de un triángulo de base 5 y altura 7 es: ${(5 * 7) / 2}`);

let base = 5;
let height = 7;

function Triangle_Area(base, height){
    return ((base * height) / 2);
}

console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${Triangle_Area(base,height)} cm\xb2`);

// A una variable le podemos asignar una función como se puede observar a continuación

let base = 5;
let height = 7;

let Triangle_Area = function (base, height){
    return ((base * height) / 2); 
}
console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${Triangle_Area(base,height)} cm\xb2`);

// O utilizando Arrow Function

let base = 5;
let height = 7;

let Triangle_Area = (base, height) => {
    // Las llaves sólo son necesarias si se va a escribir más de una linea
    return ((base * height) / 2); 
}
console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${Triangle_Area(base,height)} cm\xb2`);

// Finalmente, de manera más óptima

let base = 5;
let height = 7;
const Triangle_Area = (base, height) => ((base * height) / 2);
console.log(`El área de un triángulo de base ${base} y altura ${height} es: ${Triangle_Area(base,height)} cm\xb2`);

// Desafío - Sesión 2 - Área de un círculo πr²  

let ratio = 5;
const Circle_Area = (ratio) => (Math.PI * Math.pow(ratio, 2));
console.log(`El área de un círculo de radio ${ratio} es: ${Circle_Area(ratio)} cm\xb2`);

// Desafío - Sesión 2 - Área de un rectángulo h*b 

let base = 5;
let height = 7;
const Rectangle_Area = (base,height) => (base * height); 
console.log(`El área de un rectángulo de base ${base} y altura ${height} es: ${Rectangle_Area(base,height)} cm\xb2`);

/* Para imprimir strings se puede utilizar comillas dobles (""), comillas simples (''), sin embargo, necesitan de un mas (+) para 
concatenar. En cambio los strings literals (``````) no necesitan de eso, estos pueden utilizar placeholders ($ y {}) para ejecutar 
acciones. 
*/

/* Las funciones en JS pueden ser anónimas o no. En caso de que sea anónima no la podríamos llamar si queremos referenciarnos
por un nombre. */

/*Let es de ES6 y se utiliza para declarar una variable. Antes, sólo teníamos Var y con esa misma declarábamos tanto variables 
como constantes. Con ES6 ahora tenemos let y const siendo const la que se utiliza para declara constantes. Let permite declarar
variables limitando su alcance (scope) al bloque, declaración, o expresión donde se está usando. Mientras que var define una 
variable global o local en una función sin importar el ámbito del bloque.
*/

// Otros usos de console .info .warn .error .debug

// https://platzi.com/@alejandra_Correa/ - Pug -- Programación