var nombre = 'David', edad = 23

function imprimirNombreMayusculas(nombre){
    nombre = nombre.toUpperCase()
    console.log(this.nombre) // Variable Global
    console.log(nombre) // Variable Local
    window.nombre // Definición Objeto Global
}
imprimirNombreMayusculas(nombre)