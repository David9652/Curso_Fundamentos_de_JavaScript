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

function imprimirNombreMayusculas(obj){
    var nombre = obj.nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreMayusculas(david)
imprimirNombreMayusculas(daniel)