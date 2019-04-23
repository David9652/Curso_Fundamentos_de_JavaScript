/* Declaración Objetos */
var david = {
    nombre : "David",
    apellido : "Ángel",
    edad: 23
}

var daniel = {
    nombre : "Daniel",
    apellido : "Ángel",
    edad: 16
}
/* Fin Declaración Objetos */

function imprimirNombreMayusculas(persona){
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

// Modifica el atributo del Objeto
function cumpleanos (persona){
    persona.edad++
    console.log(persona.edad)
}
// No Modifica el atributo del Objeto
function cumpleanos2 (edad){
    edad++
    console.log(edad)

}

imprimirNombreMayusculas(david)
cumpleanos(david)        // Imprime 24
cumpleanos2(david.edad)  // Imprime 25
console.log(david.edad)  // Imprime 24 porque la segunda función no modifica el atributo del objeto

// Los objetos que pasamos por parámetro, en realidad se pasan por referencia.

/*
JS se comporta diferente con los objetos, los objetos que pasamos por parámetro a una función, se pasan por referencia, esto quiere decir que si modificamos al objeto dentro del cuerpo de la función, su valor se verá modificado fuera de ésta, produciéndose un Side Effect. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.
*/

function cumpleanos3 (persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}

var nuevoDavid = cumpleanos3(david)
console.log(nuevoDavid)