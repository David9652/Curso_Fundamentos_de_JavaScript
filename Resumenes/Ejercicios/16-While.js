var david = {
    nombre: "David",
    apellido: "Ángel",
    edad: 23,
    peso: 60
}

const INCREMENTO =  0.2
const DIAS = 365
var contador = 0
const hacerEjercicio = persona => persona.peso -= INCREMENTO
const comerHamburguesa = persona => persona.peso += INCREMENTO

console.log(`${david.nombre} tiene un peso inicial de ${david.peso}kg`)

while (contador != DIAS) {
    var random = Math.random()
        if(random > 0.5){
            hacerEjercicio(david)
        }
        else{
            comerHamburguesa(david)
        }
    contador++
    //debugger
}

console.log(`${david.nombre} tiene un peso final de ${david.peso.toFixed(1)}kg`)