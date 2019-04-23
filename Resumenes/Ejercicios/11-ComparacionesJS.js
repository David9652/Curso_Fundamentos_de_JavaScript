var x = 4
var y ="4"

var nombre = {
    name: 'David'
}

var otroNombre = {
    name: 'David'
}

var nombre2 = nombre

console.log(x==y) // Compara solamente valores (true)
console.log(x===y) // Compara valores y tipo (false)

console.log(nombre==otroNombre) // Compara la referencia del objeto (false)
console.log(nombre == nombre2) // true

// Al modificar las propiedades de un objeto que apunta por referencia a otro (puntero), se modificarán en ambos objetos. 

/*

De forma directa, cuando comparamos dos variables que contiene objetos, no se comparan los valores de las propiedades del objeto, se comparan sus referencias al objeto. Esto cuesta un poco de comprender: dos variables son iguales con === si apuntan exactamente al mismo objeto, no a dos objetos con iguales valores.

*/

/*

Existen varias maneras de comparar variables u objetos dentro de javascript. En el primer ejemplo le asignamos a X un valor numérico y a Y un string. Para poder compararlos debemos agregar dos signos de igual (==). Esto los convierte al mismo tipo de valor y permite que se puedan comparar.

Cuando realizamos operaciones es recomendable usar tres símbolos de igual (===). Esto permite que JavasScript no iguale las variables que son de distinto tipo. Te recomendamos que uses el triple igual siempre que estés comparando variables.

Existen seis tipos de datos que son primitivos:

Boolean
Null
Undefined
Number
String
Symbol

Para el estandar ES6, recientemente existen 6 tipos de datos primitivos, con la añadidura del tipo de dato Symbol, el cual es un tipo de dato único e inmutable, es decir, que no puede modificarse y cada vez que declares uno, será algo distinto.

Los Symbols son identificadores, como su nombre lo indica, servirían para algo como las ID en HTML o las llaves primarias en una base de datos debido a sus propiedades de “únicos e inmutables".

*/