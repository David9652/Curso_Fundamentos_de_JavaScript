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

function imprimirNombreMayusculas(persona){
    // var nombre = persona.nombre
    var { nombre } = persona
    console.log(nombre.toUpperCase())
}

function imprimirNombreYEdad(persona){
    console.log(`Hola me llamo ${persona.nombre} y tengo ${persona.edad} años`)
}

function imprimirNombreYEdad2({nombre,edad}){
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
}

imprimirNombreMayusculas(david)
imprimirNombreYEdad(daniel)
imprimirNombreYEdad2(david)